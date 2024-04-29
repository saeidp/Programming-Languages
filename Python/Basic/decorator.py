# This sample is extracted from Python-engineer-notebooks/advanced-python github code
# https://github.com/patrickloeber/python-engineer-notebooks/blob/master/advanced-python/13-Decoratos.ipynb

# A decorator function takes another function as argument, wraps its behaviour inside
# an inner function, and returns the wrapped function.
# def start_end_decorator(func):
    
#     def wrapper():
#         print('Start')
#         func()
#         print('End')
#     return wrapper

# def print_name():
#     print('Alex')
    
# print_name()

# print()

# # Now wrap the function by passing it as argument to the decorator function
# # and asign it to itself -> Our function has extended behaviour!
# print_name = start_end_decorator(print_name)
# print_name()
# #output: Start Alex End
# -------------------------------------------------------------
# # The decoraor syntax
# def start_end_decorator(func):
    
#     def wrapper():
#         print('Start')
#         func()
#         print('End')
#     return wrapper

# @start_end_decorator
# def print_name():
#     print('Alex')
    
# print_name()
# #output: Start Alex End
# --------------------------- Function arguments ----------------------------------------
# def start_end_decorator_2(func):
    
#     def wrapper(*args, **kwargs):
#         print('Start')
#         result = func(*args, **kwargs)
#         print('End')
#         return result
#     return wrapper

# @start_end_decorator_2
# def add_5(x):
#     return x + 5

# result = add_5(10)
# print(result)

# # output: Start End 15

#--------------------------------------------- Function Identiy ------------------
# # we loose the identity of the function. It will be called wrapper.
# def start_end_decorator_2(func):
    
#     def wrapper(*args, **kwargs):
#         print('Start')
#         result = func(*args, **kwargs)
#         print('End')
#         return result
#     return wrapper

# @start_end_decorator_2
# def add_5(x):
#     return x + 5

# result = add_5(10)
# print(result)
# print(add_5.__name__)
# help(add_5)
# # output: Start End 15 wrapper 
# # Help on function wrapper in module __main__:
# # wrapper(*args, **kwargs)

# ------------------------------ Fix the identity ------------------
# import functools
# def start_end_decorator_4(func):
    
#     @functools.wraps(func)
#     def wrapper(*args, **kwargs):
#         print('Start')
#         result = func(*args, **kwargs)
#         print('End')
#         return result
#     return wrapper

# @start_end_decorator_4
# def add_5(x):
#     return x + 5
# result = add_5(10)
# print(result)
# print(add_5.__name__)
# help(add_5)

# output: 
# Start
# End
# 15
# add_5
# Help on function add_5 in module __main__:

# add_5(x)

# ------------------------------------------------------- Class decorator -------------------
# # Class decorators
# # We can also use a class as a decorator. Therefore, we have to implement'
# # the __call__() method to make our object callable. Class decorators are
# # typically used to maintain a state, e.g. here we keep track of the number
# # of times our function is executed. The __call__ method does essentially the same
# # thing as the wrapper() method we have seen earlier. It adds some functionality,
# # executes the function, and returns its result. Note that here we use 
# # functools.update_wrapper() instead of functools.wraps to preserve the 
# # information about our function.

# import functools

# class CountCalls:
#     # the init needs to have the func as argument and stores it
#     def __init__(self, func):
#         functools.update_wrapper(self, func)
#         self.func = func
#         self.num_calls = 0
    
#     # extend functionality, execute function, and return the result
#     def __call__(self, *args, **kwargs):
#         self.num_calls += 1
#         print(f"Call {self.num_calls} of {self.func.__name__!r}")
#         return self.func(*args, **kwargs)

# @CountCalls
# def say_hello(num):
#     print("Hello!")
    
# say_hello(5)
# say_hello(5)

# # output:
# # Call 1 of 'say_hello'
# # Hello!
# # Call 2 of 'say_hello'
# # Hello!