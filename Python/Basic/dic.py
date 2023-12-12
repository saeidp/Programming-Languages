#  ---------------------------------- basic dictionary ----------------------------
# person = {"name": "Alice", "age": 30, "city": "New York"}
# print(person)

# print(person["name"])  # Outputs: Alice

# person["email"] = "alice@example.com"  # Adds a new key-value pair
# person["age"] = 31                     # Updates the value for key "age"
# print(person)

# del person["city"]              # Removes the key "city"
# email = person.pop("email")     # Removes "email" and returns its value
# print(person)

# -------------------------------------- Advanced operations ---------------------------------
# person = {"name": "Alice", "age": 30, "city": "New York"}
# for key in person:
#     print(f"{key}: {person[key]}")

# keys = person.keys()      # Returns keys
# values = person.values()  # Returns values
# print(keys, values)

# #  Nested Dictionary
# users = {
#     "user1": {"name": "Alice", "age": 30},
#     "user2": {"name": "Bob", "age": 25}
# }

# print(users["user1"]["name"])  # Accesses name of user1


# #  Comprehensions
# squares = {x: x*x for x in range(6)}
# print(squares)  # Creates a dictionary of squares {0: 0, 1: 1, 2: 4, ...}

# #  Merging Dictionaries 
# dict1 = {"a": 1, "b": 2}
# dict2 = {"b": 3, "c": 4}
# merged = {**dict1, **dict2}
# print(merged)  # {'a': 1, 'b': 3, 'c': 4}