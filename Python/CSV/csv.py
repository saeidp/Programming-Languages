# ------------------------------------------- Using CSV library --------------------------
import csv
import os

# Get the directory of the script
directory = os.path.dirname(os.path.realpath(__file__))
# Create a new file path
file_path = os.path.join(directory, 'my_file.csv')

with open(file_path, newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        print(f"{row['name']} is {row['age']} years old")


# --------------------------------------------- Using Pandas --------------------------------
import pandas as pd

# Get the directory of the script
directory = os.path.dirname(os.path.realpath(__file__))
# Create a new file path
file_path = os.path.join(directory, 'my_file.csv')

df = pd.read_csv(file_path)
for index, row in df.iterrows():
    print(f"{row['name']} is {row['age']} years old")



# --------------------------------- if you want to get the current directory ------------------------------------

import os

current_directory = os.getcwd()
print(current_directory)

# Output:
# 'C:\Dev\GitHub\Programming-Languages\Python'


