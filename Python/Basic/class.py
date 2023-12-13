# -------------------------------------- Basic Class Definition ------------------------
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return "Woof!"

    def birthday(self):
        self.age += 1

my_dog = Dog("Buddy", 5)
print(f"{my_dog.name} is {my_dog.age} years old.")  # Outputs: Buddy is 5 years old.

my_dog.birthday()
print(f"{my_dog.name} is now {my_dog.age} years old.")  # Outputs: Buddy is now 6 years old.

#  ------------------------------------- class methods -----------------------------------
# Class methods
class MyClass:
    @classmethod
    def my_class_method(cls, arg1, arg2):
        print(f"Class method called with arguments {arg1} and {arg2}")

MyClass.my_class_method("hello", 42)

# ------------------------------------- pass ------------------------------------
# Class. pass means this class has no attributes
class MyClass:
    pass

# ----------------------------------------- Inheritance -------------------------------
# Inheritance
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def make_sound(self):
        print("Generic animal sound")
    
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, species="Dog")
        self.breed = breed
    
    def make_sound(self):
        print("Woof!")
    
    def wag_tail(self):
        print("Tail wagging")

dog = Dog("Fido", "Labrador")
dog.make_sound()  # Output: "Woof!"
dog.wag_tail()    # Tail wagging


# ---------------------------------------------- Polymorphism ------------------------
# In Python, you can implement polymorphism by defining methods in different
# classes with the same name, and then calling those methods on objects of those classes.
class Animal:
    def __init__(self, name):
        self.name = name
    
    def make_sound(self):
        print("Generic animal sound")
    
class Dog(Animal):
    def make_sound(self):
        print("Woof!")
    
class Cat(Animal):
    def make_sound(self):
        print("Meow!")

dog = Dog("Fido")
cat = Cat("Fluffy")

dog.make_sound()  # Output: "Woof!"
cat.make_sound()  # Output: "Meow!"


#  ------------------------------------- Method Overloading --------------------------
# Method overloading is the ability to define methods with the same name but with 
# different parameters. However, Python does not support method overloading in the
# traditional sense, because Python functions do not require you to declare the type of their parameters.
class MyClass:
    def method(self, a, b=None, c=None):
        if b is None and c is None:
            print("a =", a)
        elif c is None:
            print("a =", a, "b =", b)
        else:
            print("a =", a, "b =", b, "c =", c)

my_object = MyClass()

my_object.method(1)
my_object.method(2, 3)
my_object.method(4, 5, 6)
# a = 1
# a = 2 b = 3
# a = 4 b = 5 c = 6

# 1- Using default parameters:
class Calculator:
    def add(self, x, y=0, z=0):
        return x + y + z

c = Calculator()
print(c.add(10))           # Output: 10
print(c.add(10, 20))       # Output: 30
print(c.add(10, 20, 30))   # Output: 60

# 2- Using variable-length arguments:
class Calculator:
    def add(self, *args):
        total = 0
        for num in args:
            total += num
        return total

c = Calculator()
print(c.add(10))           # Output: 10
print(c.add(10, 20))       # Output: 30
print(c.add(10, 20, 30))   # Output: 60


#  ----------------------------------------- Operator Overloading -------------------------
# In Python, operator overloading allows you to define the behavior of an operator
# when it is used with instances of your own custom classes. This means that you can
# define what the '+' or '-' operators do when used with instances of your own class.
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

v1 = Vector(1, 2)
v2 = Vector(3, 4)
v3 = v1 + v2
print(v3.x, v3.y)  # output: 4 6
# Python provides a number of special methods that you can use to overload operators,
# such as sub() for the '-' operator, mul() for the '*' operator, and so on. These methods
# are also known as "magic methods" or "dunder methods" (short for "double underscore methods").


#  ---------------------------------------------- class distructor ------------------------------
class MyClass:
    def __init__(self, name):
        self.name = name
        print(f'{self.name} created')
        
    def __del__(self):
        print(f'{self.name} destroyed')

obj = MyClass("myobject")
del obj  # This will trigger the destructor
# output: myobject destroyed

#  ------------------------------------------------ operator decorator --------------------------
class Student:

    def __init__(self, name):
        self.__name = name

    @property
    def name(self):
        return self.__name
    
    @name.setter   #property-name.setter decorator
    def name(self, value):
        self.__name = value
    
s = Student('Steve')
print(s.name) #'Steve'

s.name = 'Bill'
print(s.name) # 'Bill'



#  ---------------------------------- Class variable -----------------------------
# Class variables are shared among all instances of the class.
class Dog:
    species = "Canis familiaris"  # Class variable

    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        return "Woof!"

    def birthday(self):
        self.age += 1

# Accessing class variable
print(Dog.species)  # Outputs: Canis familiaris
