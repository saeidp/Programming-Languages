animals = ['toad', 'lion', 'seal']
print(animals[0])
print(animals[1])
print(animals[2])

Indexes from the end of array
animals = ['toad', 'lion', 'seal']
print(animals[-1])
print(animals[-2])
print(animals[-3])

#Append
animals = ['toad', 'lion', 'seal']
animals.append('fox')

# Extend
animals = ['toad', 'lion', 'seal']
animals.extend(['fox', 'owl'])
print(animals)

# Insert
nimals = ['toad', 'lion', 'seal']
animals.insert(0, 'whale')

# Accessing arrays elements
animals = ['toad', 'lion', 'seal', 'fox', 'owl', 'whale']
some_animals = animals[1:4]
# It means from index 1 to 3 not including 4
# Or
lion_index = animals.index('lion')

# List Concatenation
animals = ['toad', 'lion', 'seal']
more_animals = ['fox', 'owl', 'whale']
all_animals = animals + more_animals
print(all_animals)

# Ranges
# Another important built-in function is the range() function, which creates a list of numbers and is often combined with the for statement.

for number in range(4):
    print(number)
# 0,1,2,3
for number in range(2, 4):
    print(number)
# 2,3
for number in range(0, 10, 2):
    print(number)
# 0,2,4,6,8
animals = ['toad', 'lion', 'seal', 'fox', 'owl', 'whale', 'elk']
for number in range(0, len(animals), 2):
    print(animals[number])


Create a list to hold items
# Create a list to hold the grocery items.
grocery_list = []
finished = False
while not finished:
    item = input('Enter an item for your grocery list.  Press <ENTER> when done: ')
    if len(item) == 0:
        finished = True
    else:
        grocery_list.append(item)
        print('Item added.')
# Display the grocery list.
print()
print('Your Grocery List:')
print('-' * 18)
for item in grocery_list:
    print(item)

# List Slices
List slices provide a more advanced way of retrieving values from a list. Basic list slicing involves indexing a list with two colon-separated integers. This returns a new list containing all the values in the old list between the indices.

squares = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
print(squares[2:6])
print(squares[3:8])
print(squares[0:1])

# [4, 9, 16, 25]
# [9, 16, 25, 36, 49]
# [0]

# if the first number in a slice is omitted, it is taken to be the start of the list.
# If the second number is omitted, it is taken to be the end.
squares = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
print(squares[:7])
print(squares[7:])

# [0, 1, 4, 9, 16, 25, 36]
# [49, 64, 81]

# List slices can also have a third number, representing the step, to include only alternate values in the slice.
squares = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
print(squares[::2])
print(squares[2:8:3])

# [0, 4, 16, 36, 64]
# [4, 25]

# Negative values can be used in list slicing (and normal list indexing). When negative values are used for the first and second values in a slice (or a normal index), they count from the end of the list.

squares = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
print(squares[1:-1])

[1, 4, 9, 16, 25, 36, 49, 64]

# If a negative value is used for the step, the slice is done backwards.
# Using [::-1] as a slice is a common and idiomatic way to reverse a list.

sqs = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
print(sqs[7:5:-1])

# [49,36]

# List Comprehensions

# List comprehensions are a useful way of quickly creating lists whose contents obey a simple rule.
# For example, we can do the following:
# a list comprehension
cubes = [i**3 for i in range(5)]

print(cubes)
# [0, 1, 8, 27, 64]


evens=[i**2 for i in range(10) if i**2 % 2 == 0]

print(evens)
# [0, 4, 16, 36, 64]


# List Functions

# Often used in conditional statements, all and any take a list as an argument, and return True if all or any (respectively) of their arguments evaluate to True (and False otherwise).
# The function enumerate can be used to iterate through the values and indices of a list simultaneously.
# Example:
nums = [55, 44, 33, 22, 11]
if all([i > 5 for i in nums]):
   print("All larger than 5")
if any([i % 2 == 0 for i in nums]):
   print("At least one is even")
for v in enumerate(nums):
   print(v)
# All larger than 5
# At least one is even
# (0, 55)
# (1, 44)
# (2, 33)
# (3, 22)
# (4, 11)


