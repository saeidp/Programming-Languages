
#  ------------------------------------- errors -----------------------------------------
# SyntaxError: This exception is raised when the interpreter encounters a syntax error
# in the code, such as a misspelled keyword, a missing colon, or an unbalanced parenthesis.

# TypeError: This exception is raised when an operation or function is applied to an
# object of the wrong type, such as adding a string to an integer.

# NameError: This exception is raised when a variable or function name is not found in the current scope.

# IndexError: This exception is raised when an index is out of range for a list, tuple, or other sequence types.

# KeyError: This exception is raised when a key is not found in a dictionary.

# ValueError: This exception is raised when a function or method is called with an invalid
# argument or input, such as trying to convert a string to an integer when the string does not represent a valid integer.

# AttributeError: This exception is raised when an attribute or method is not found on
# an object, such as trying to access a non-existent attribute of a class instance.

# IOError: This exception is raised when an I/O operation, such as reading or writing a file, fails due to an input/output error.

# ZeroDivisionError: This exception is raised when an attempt is made to divide a number by zero.

# ImportError: This exception is raised when an import statement fails to find or load a module.


# --------------------------------- basic example ---------------------------
try:
    # Code block where you suspect an exception may occur
    number = int(input("Enter a number: "))
    inverse = 1 / number
except ValueError:
    # Code to run if a ValueError occurs
    print("You must enter a valid integer.")
except ZeroDivisionError:
    # Code to run if a ZeroDivisionError occurs
    print("Infinity! Division by zero is not allowed.")
else:
    # Code to run if no exceptions occur
    print(f"The inverse is: {inverse}")
finally:
    # Code that runs no matter what
    print("Thank you for entering a number.")

#  ---------------------------- catching any exception --------------------------
def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Cannot divide by zero!")
    except Exception as e:
        # Catch any other exception
        print(f"An error occurred: {e}")
    else:
        return result

print(divide(10, 2))  # Outputs: 5
print(divide(10, 0))  # Outputs: Cannot divide by zero!
print(divide('10', '2'))  # Outputs: An error occurred: unsupported operand type(s) for /: 'str' and 'str'


# ------------------------------------------ Syntax error ------------------------------------------
# SyntaxError: This exception is raised when the interpreter encounters a syntax error
# in the code, such as a misspelled keyword, a missing colon, or an unbalanced parenthesis.

# initialize the amount variable
amount = 10000

# check that You are eligible to
# purchase Dsa Self Paced or not
if(amount > 2999)
    print("You are eligible to purchase Dsa Self Paced")


#  --------------------------------------  Exceptions -------------------------------------------
# Exceptions are raised when the program is syntactically correct, but the code results in an error. 
# initialize the amount variable
marks = 10000

# perform division with 0
a = marks / 0
print(a)

#  ------------------------------------------ TypeError -----------------------------------------
# TypeError: This exception is raised when an operation or function is applied to an object of the wrong type. Here’s an example:
x = 5
y = "hello"
z = x + y # Raises a TypeError: unsupported operand type(s) for +: 'int' and 'str'

# output: 
# Traceback (most recent call last):
#   File "7edfa469-9a3c-4e4d-98f3-5544e60bff4e.py", line 4, in <module>
#     z = x + y
# TypeError: unsupported operand type(s) for +: 'int' and 'str'

x = 5
y = "hello"
try:
	z = x + y
except TypeError:
	print("Error: cannot add an int and a str")
     
#  ------------------------------------------- NameError --------------------------------------------
# NameError: This exception is raised when a variable or function name is not found in the current scope.
def fun(a):
	if a < 4:

		# throws ZeroDivisionError for a = 3
		b = a/(a-3)

	# throws NameError if a >= 4
	print("Value of b = ", b)
	
try:
	fun(3)
	fun(5)

# multiple exceptions
except ZeroDivisionError:
	print("ZeroDivisionError Occurred and Handled")
except NameError:
	print("NameError Occurred and Handled")


#  ------------------------------------- Raising Exception -------------------------------------
try:
	raise NameError("Hi there") # Raise Error
except NameError:
	print ("An exception")
	raise # To determine whether the exception was raised or not

# The output of the above code will simply line printed as “An exception” but a Runtime error
# will also occur in the last due to the raise statement in the last line. 

# So, the output on your command line will look like 
# Traceback (most recent call last):
#   File "/home/d6ec14ca595b97bff8d8034bbf212a9f.py", line 5, in <module>
#     raise NameError("Hi there")  # Raise Error
# NameError: Hi there