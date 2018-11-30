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

    def import_product_groups(self, my_aws_profile, my_env, my_table, my_csv_file):
        self.debug("ENTER - " + "process_import")
        session = boto3.Session(profile_name=my_aws_profile)
        if my_aws_profile == 'local-dynamodb':
            dynamodb = session.resource(service_name='dynamodb', endpoint_url='http://localhost:8000')
        else:
            dynamodb = session.resource(service_name='dynamodb')
        table = dynamodb.Table('sseks-' + my_env + '-' + my_table)
        with open(my_csv_file, 'r') as csvfile:
            reader = csv.reader(csvfile,delimiter='\t')
            with table.batch_writer() as batch:
                for pg_id, pg_name in reader:
                    batch.put_item(Item={"pgid": pg_id, "pgname": pg_name})
        ret = 0
        self.debug("EXIT - " + "process_import")
        return ret

def import_csv(my_aws_profile, my_env, my_table, my_csv_file):
    importer = MyTableImporter()
    ret = 0
    importer.debug("ENTER - " + "import_csv, params:")
    importer.debug("  my_aws_profile: " + my_aws_profile)
    importer.debug("  my_env: " + my_env)
    importer.debug("  my_table: " + my_table)
    importer.debug("  my_csv_file: " + my_csv_file)
    if my_table == 'product-group':
        ret = importer.import_product_groups(my_aws_profile, my_env, my_table, my_csv_file)
    elif my_table == 'product':
        print("Not yet implemented")
    elif my_table == 'users':
        print("Not yet implemented")
    elif my_table == 'session':
        print("Not yet implemented")
    else:
        print("Unknown table: " + my_table)
        ret = -1
    importer.debug("EXIT - " + "import_csv, ret: " + str(ret))
    print(str(ret))


if __name__ == '__main__':
    if len(sys.argv) != 5:
        print("Usage: python3 table_importer.sh <aws-profile> <env> <table> <csv file>")
        exit(-1)
    my_aws_profile = sys.argv[1]
    my_env = sys.argv[2]
    my_table = sys.argv[3]
    my_csv_file = sys.argv[4]
    import_csv(my_aws_profile, my_env, my_table, my_csv_file)
