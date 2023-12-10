# -----------------------------------  json load -----------------------
# import json
# import os

# directory = os.path.dirname(os.path.realpath(__file__))
# # Create a new file path
# file_path = os.path.join(directory, 'data.json')

# with open(file_path, 'r') as file:
#     data = json.load(file)

# for person in data:
#     print(f"{person['name']} is {person['age']} years old")


# -------------------------------- json dump -----------------------
# #  save the dictionary to a json file
# import json
# import os
# directory = os.path.dirname(os.path.realpath(__file__))
# # Create a new file path
# file_path = os.path.join(directory, 'output.json')

# data = {
#     "name": "Alice",
#     "age": 30,
#     "is_student": False,
#     "courses": ["Math", "Science"]
# }

# # Open a file for writing
# with open(file_path, 'w') as file:
#     # Serialize and write the Python dictionary to the file in JSON format
#     json.dump(data, file, indent=4)


# ---------------------------------- Json loads---------------------------
# #  json loads converts json formatted string to dictionary
# import json

# json_string = '[{"name": "Alice", "age": 30}, { "name": "Bob", "age": 25 }]'
# data = json.loads(json_string)

# for person in data:
#     print(f"{person['name']} is {person['age']} years old")




# ---------------------------------- Json dumps---------------------------
# #  json dumps converts dictionary to json formatted string
# import json

# # Example Python dictionary
# data = {
#     "name": "Alice",
#     "age": 30,
#     "is_student": False,
#     "courses": ["Biology", "Chemistry"]
# }
# # Convert the Python dictionary to a JSON string
# json_string = json.dumps(data, indent=4)

# print(json_string)




