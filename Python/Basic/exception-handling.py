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

