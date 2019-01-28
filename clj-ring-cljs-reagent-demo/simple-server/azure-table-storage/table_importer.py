#!/usr/bin/python3

import sys
import os
import re
import datetime
from azure.storage.table import TableService, Entity
import csv


class MyTableImporter:

    DEBUG_FLAG = True

    def debug(self, buf):
        if (self.DEBUG_FLAG):
            print("DEBUG - " + buf)

    def get_table_service(self, my_azure_profile):
        self.debug("ENTER - " + "get_table")
        if my_azure_profile == 'local-table':
            table_service = TableService(connection_string = 'DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;TableEndpoint=http://127.0.0.1:10002/devstoreaccount1;')
        elif my_azure_profile == 'azure':
            azure_storage_connection_string = os.environ['AZURE_CONNECTION_STRING']
            #azure_storage_account_name = os.environ['AZURE_STORAGE_ACCOUNT']
            #azure_storage_account_key = os.environ['AZURE_STORAGE_KEY']
            #table_service = TableService(account_name = azure_storage_account_name, account_key=azure_storage_account_key)
            table_service = TableService(connection_string = azure_storage_connection_string)
        else:
            self.debug("Unknown profile: " + my_azure_profile)
            sys.exit(-1)
        self.debug("EXIT - " + "get_table")
        return table_service

    def import_product_groups(self, my_azure_profile, my_env, my_table, my_prefix, my_csv_file):
        self.debug("ENTER - " + "import_product_groups")
        table_service = self.get_table_service(my_azure_profile)
        table_name = my_prefix + my_env + my_table
        with open(my_csv_file, 'r') as csvfile:
            reader = csv.reader(csvfile,delimiter='\t')
            for pg_id, pg_name in reader:
                pg_entity = {'PartitionKey': pg_id, 'RowKey': pg_name}
                table_service.insert_entity(table_name, pg_entity)
        ret = 0
        self.debug("EXIT - " + "import_product_groups")
        return ret

    def import_products(self, my_azure_profile, my_env, my_table, my_prefix, my_csv_file):
        self.debug("ENTER - " + "import_products")
        table_service = self.get_table_service(my_azure_profile)
        table_name = my_prefix + my_env + my_table
        with open(my_csv_file, 'r') as csvfile:
            reader = csv.reader(csvfile,delimiter='\t')
            for p_id, pg_id, title, price, author_or_director, year, country, genre_or_language in reader:
                product_entity = {'PartitionKey': pg_id, 'RowKey': p_id, 'Title': title, 'Price': price,
                                         'AorD': author_or_director, 'Year': year, 'Country': country,
                                         'GorL': genre_or_language}
                table_service.insert_entity(table_name, product_entity)
        ret = 0
        self.debug("EXIT - " + "import_products")
        return ret

    def import_users(self, my_azure_profile, my_env, my_table, my_prefix, my_csv_file):
        self.debug("ENTER - " + "import_users")
        table_service = self.get_table_service(my_azure_profile)
        table_name = my_prefix + my_env + my_table
        with open(my_csv_file, 'r') as csvfile:
            reader = csv.reader(csvfile,delimiter='\t')
            for user_id, email, first_name, last_name, hashed_password in reader:
                user_entity = {'PartitionKey': email, 'RowKey': user_id, 'Firstname': first_name,
                                         'Lastname': last_name, 'Hpwd': hashed_password}
                table_service.insert_entity(table_name, user_entity)
        ret = 0
        self.debug("EXIT - " + "import_users")
        return ret

def import_csv(my_azure_profile, my_env, my_table, my_prefix, my_csv_file):
    importer = MyTableImporter()
    ret = 0
    importer.debug("ENTER - " + "import_csv, params:")
    importer.debug("  my_azure_profile: " + my_azure_profile)
    importer.debug("  my_env: " + my_env)
    importer.debug("  my_table: " + my_table)
    importer.debug("  my_csv_file: " + my_csv_file)
    if my_table == 'productgroup':
        ret = importer.import_product_groups(my_azure_profile, my_env, my_table, my_prefix, my_csv_file)
    elif my_table == 'product':
        ret = importer.import_products(my_azure_profile, my_env, my_table, my_prefix, my_csv_file)
    elif my_table == 'users':
        ret = importer.import_users(my_azure_profile, my_env, my_table, my_prefix, my_csv_file)
    elif my_table == 'session':
        print("Not implemented - there is no need for initial sessions")
    else:
        print("Unknown table: " + my_table)
        ret = -1
    importer.debug("EXIT - " + "import_csv, ret: " + str(ret))
    print(str(ret))


if __name__ == '__main__':
    if len(sys.argv) !=6:
        print("Usage: python3 table_importer.sh <azure-profile> <env> <table> <prefix> <csv file>")
        exit(-1)
    my_azure_profile = sys.argv[1]
    my_env = sys.argv[2]
    my_table = sys.argv[3]
    my_prefix = sys.argv[4]
    my_csv_file = sys.argv[5]
    import_csv(my_azure_profile, my_env, my_table, my_prefix, my_csv_file)
