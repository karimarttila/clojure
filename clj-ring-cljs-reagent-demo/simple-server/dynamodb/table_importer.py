#!/usr/bin/python3

import sys
import re
import datetime
import boto3
import csv

class MyTableImporter:

    DEBUG_FLAG = True

    def debug(self, buf):
        if (self.DEBUG_FLAG):
            print("DEBUG - " + buf)

    def get_table(self, my_aws_profile, my_prefix, my_env, my_table):
        self.debug("ENTER - " + "get_table")
        session = boto3.Session(profile_name=my_aws_profile)
        if my_aws_profile == 'local-dynamodb':
            dynamodb = session.resource(service_name='dynamodb', endpoint_url='http://localhost:8000')
        else:
            dynamodb = session.resource(service_name='dynamodb')
        table = dynamodb.Table(my_prefix + '-' + my_env + '-' + my_table)
        self.debug("EXIT - " + "get_table")
        return table

    def import_product_groups(self, my_aws_profile, my_prefix, my_env, my_table, my_csv_file):
        self.debug("ENTER - " + "import_product_groups")
        table = self.get_table(my_aws_profile, my_prefix, my_env, my_table)
        with open(my_csv_file, 'r') as csvfile:
            reader = csv.reader(csvfile,delimiter='\t')
            with table.batch_writer() as batch:
                for pg_id, pg_name in reader:
                    batch.put_item(Item={"pgid": pg_id, "pgname": pg_name})
        ret = 0
        self.debug("EXIT - " + "import_product_groups")
        return ret

    def import_products(self, my_aws_profile, my_prefix, my_env, my_table, my_csv_file):
        self.debug("ENTER - " + "import_products")
        table = self.get_table(my_aws_profile, my_prefix, my_env, my_table)
        with open(my_csv_file, 'r') as csvfile:
            reader = csv.reader(csvfile,delimiter='\t')
            with table.batch_writer() as batch:
                for p_id, pg_id, title, price, author_or_director, year, country, genre_or_language in reader:
                    batch.put_item(Item={"pid": p_id, "pgid": pg_id, "title": title, "price": price,
                                         "a_or_d": author_or_director, "year": year, "country": country,
                                         "g_or_l": genre_or_language})
        ret = 0
        self.debug("EXIT - " + "import_products")
        return ret

    def import_users(self, my_aws_profile, my_prefix, my_env, my_table, my_csv_file):
        self.debug("ENTER - " + "import_users")
        table = self.get_table(my_aws_profile, my_prefix, my_env, my_table)
        with open(my_csv_file, 'r') as csvfile:
            reader = csv.reader(csvfile,delimiter='\t')
            with table.batch_writer() as batch:
                for user_id, email, first_name, last_name, hashed_password in reader:
                    batch.put_item(Item={"userid": user_id, "email": email, "firstname": first_name,
                                         "lastname": last_name, "hpwd": hashed_password})
        ret = 0
        self.debug("EXIT - " + "import_users")
        return ret

def import_csv(my_aws_profile, my_prefix, my_env, my_table, my_csv_file):
    importer = MyTableImporter()
    ret = 0
    importer.debug("ENTER - " + "import_csv, params:")
    importer.debug("  my_aws_profile: " + my_aws_profile)
    importer.debug("  my_prefix: " + my_prefix)
    importer.debug("  my_env: " + my_env)
    importer.debug("  my_table: " + my_table)
    importer.debug("  my_csv_file: " + my_csv_file)
    if my_table == 'product-group':
        ret = importer.import_product_groups(my_aws_profile, my_prefix, my_env, my_table, my_csv_file)
    elif my_table == 'product':
        ret = importer.import_products(my_aws_profile, my_prefix, my_env, my_table, my_csv_file)
    elif my_table == 'users':
        ret = importer.import_users(my_aws_profile, my_prefix, my_env, my_table, my_csv_file)
    elif my_table == 'session':
        print("Not implemented - there is no need for initial sessions")
    else:
        print("Unknown table: " + my_table)
        ret = -1
    importer.debug("EXIT - " + "import_csv, ret: " + str(ret))
    print(str(ret))


if __name__ == '__main__':
    if len(sys.argv) != 6:
        print("Usage: python3 table_importer.sh <aws-profile> <prefix> <env> <table> <csv file>")
        exit(-1)
    my_aws_profile = sys.argv[1]
    my_prefix = sys.argv[2]
    my_env = sys.argv[3]
    my_table = sys.argv[4]
    my_csv_file = sys.argv[5]
    import_csv(my_aws_profile, my_prefix, my_env, my_table, my_csv_file)
