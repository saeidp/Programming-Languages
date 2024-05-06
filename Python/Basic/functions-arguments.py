# This code is extracted from the following github repository
# https://github.com/patrickloeber/python-engineer-notebooks/blob/master/advanced-python/18-Functions%20arguments.ipynb

# ------------------------------ Positional and keyword arguments --------------
def foo(a, b, c):
    print(a, b, c)
    
# positional arguments
foo(1, 2, 3)

# keyword arguments
foo(a=1, b=2, c=3)
foo(c=3, b=2, a=1) # Note that the order is not important here

# mix of both
foo(1, b=2, c=3)

# This is not allowed:
# foo(1, b=2, 3) # positional argument after keyword argument
# foo(1, b=2, a=3) # multiple values for argument 'a'

# output:
# 1 2 3
# 1 2 3
# 1 2 3
# 1 2 3

# ------------------------------ Default arguments ------------------------------
# default arguments
def foo(a, b, c, d=4):
    print(a, b, c, d)

foo(1, 2, 3, 4)
foo(1, b=2, c=3, d=100)

# not allowed: default arguments must be at the end
# def foo(a, b=2, c, d=4):
#     print(a, b, c, d)

# output:
# 1 2 3 4
# 1 2 3 100

# ------------------------------ Variable length arguments ----------------------
def foo(a, b, *args, **kwargs):
    print(a, b)
    for arg in args:
        print(arg)
    for kwarg in kwargs:
        print(kwarg, kwargs[kwarg])

# 3, 4, 5 are combined into args
# six and seven are combined into kwargs
foo(1, 2, 3, 4, 5, six=6, seven=7)
print()

# omitting of args or kwargs is also possible
foo(1, 2, three=3)

# output:
# 1 2
# 3
# 4
# 5
# six 6
# seven 7

# 1 2
# three 3
# ----------------------------------- Forced keyword arguments -------------------
# If you write '*,' in your function parameter list, all parameters after that must be passed as keyword arguments.
# Arguments after variable-length arguments must be keyword arguments.
def foo(a, b, *, c, d):
    print(a, b, c, d)

foo(1, 2, c=3, d=4)
# not allowed:
# foo(1, 2, 3, 4)

# arguments after variable-length arguments must be keyword arguments
def foo(*args, last):
    for arg in args:
        print(arg)
    print(last)

foo(8, 9, 10, last=50)

# output:
# 1 2 3 4
# 8
# 9
# 10
# 50

# ------------------------------ Unpacking into agruments-----------------
# Lists or tuples can be unpacked into arguments with one asterisk (*) if the length of the container matches the number of function parameters.
# Dictionaries can be unpacked into arguments with two asterisks (**) the the length and the keys match the function parameters.
def foo(a, b, c):
    print(a, b, c)


# list/tuple unpacking, length must match
my_list = [4, 5, 6] # or tuple
foo(*my_list)

# dict unpacking, keys and length must match
my_dict = {'a': 1, 'b': 2, 'c': 3}
foo(**my_dict)

# my_dict = {'a': 1, 'b': 2, 'd': 3} # not possible since wrong keyword

# output:
# 4 5 6
# 1 2 3

# ------------------------------ Local vs global variables-----------------
# Global variables can be accessed within a function body, but to modify them, we first must state global var_name in order to change the global variable.
def foo1():
    x = number # global variable can only be accessed here
    print('number in function:', x)

number = 0
foo1()

# modifying the global variable
def foo2():
    global number # global variable can now be accessed and modified
    number = 3

print('number before foo2(): ', number)
foo2() # modifies the global variable
print('number after foo2(): ', number)

# output:
# number in function: 0
# number before foo2():  0
# number after foo2():  3


