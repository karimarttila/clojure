#!/usr/bin/python3

import sys
import re
import datetime

class MyProductGroupImporter:

    DEBUG_FLAG = True

    def debug(self, buf):
        if (self.DEBUG_FLAG):
            print("DEBUG - " + buf)

    def process_import(self, my_aws_profile, my_env, my_table, my_csv_file):
        self.debug("ENTER - " + "process_import")

        ret = 0
        self.debug("EXIT - " + "process_import")
        return ret

def import_csv(my_aws_profile, my_env, my_table, my_csv_file):
    importer = MyProductGroupImporter()
    ret = 0
    importer.debug("ENTER - " + "import_csv, params:")
    importer.debug("  my_aws_profile: " + my_aws_profile)
    importer.debug("  my_env: " + my_env)
    importer.debug("  my_table: " + my_table)
    importer.debug("  my_csv_file: " + my_csv_file)

    ret = importer.process_import(my_aws_profile, my_env, my_table, my_csv_file)
    importer.debug("EXIT - " + "import_csv, ret: " + str(ret))
    print(str(ret))


if __name__ == '__main__':
    if len(sys.argv) != 5:
        print("Usage: python3 import-product-groups.sh <aws-profile> <env> <table> <csv file>")
        exit(-1)
    my_aws_profile = sys.argv[1]
    my_env = sys.argv[2]
    my_table = sys.argv[3]
    my_csv_file = sys.argv[4]
    import_csv(my_aws_profile, my_env, my_table, my_csv_file)
