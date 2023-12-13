# ---------------------------------------------- function with parameters --------------------
def greet(name):
    return "Hello " + name

print(greet("Alice"))  # Output: Hello Alice

def greet(name, msg="Good morning!"):
    print("Hello", name + ', ' + msg)

greet("Kate")          # Output: Hello Kate, Good morning!
greet("Bruce", "How do you do?")  # Output: Hello Bruce, How do you do?


#  -------------------------------------- function with return value --------------------------
# Define a function that returns a value
def add(a, b):
    return a + b

# Call the function and print its result
result = add(5, 3)
print(result)  # This will output: 8

# ----------------------------------------- function with default parameter values --------------------------
# Define a function with default parameter values
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# Call the function with default greeting
print(greet("Alice"))  # This will output: Hello, Alice!

# Call the function with a different greeting
print(greet("Bob", "Howdy"))  # This will output: Howdy, Bob!

#  -------------------------------------------- Function with Arbitrary Number of Arguments -------------------
# Define a function that accepts any number of arguments
def make_pizza(*toppings):
    print("Making a pizza with the following toppings:")
    for topping in toppings:
        print(f" - {topping}")

# Call the function with a varying number of arguments
make_pizza('pepperoni')
make_pizza('mushrooms', 'green peppers', 'extra cheese')

# --------------------------------------------- Function with Keyword Arguments ---------------------
# Define a function with keyword arguments
def build_profile(first, last, **user_info):
    user_info['first_name'] = first
    user_info['last_name'] = last
    return user_info

# Call the function with keyword arguments
user_profile = build_profile('albert', 'einstein',
                             location='princeton',
                             field='physics')
print(user_profile)  # {'location': 'princeton', 'field': 'physics', 'first_name': 'albert', 'last_name': 'einstein'}

#  -------------------------------------- Lambda Functions (Anonymous Functions) -----------------------
# Define a lambda function
square = lambda x: x ** 2

# Call the lambda function
print(square(5))  # This will output: 25


