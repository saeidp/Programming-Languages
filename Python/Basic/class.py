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


#  ---------------------------------- Advanced Class Features -----------------------------
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

# Inheritance
# GermanShepherd is a subclass of Dog that overrides the bark method.
class GermanShepherd(Dog):
    def bark(self):
        return "Loud Woof!"

gs_dog = GermanShepherd("Rex", 3)
print(gs_dog.bark())  # Outputs: Loud Woof! (Overridden method)

#  Using property for Getter and Setter
class Dog:
    def __init__(self, name, age):
        self._name = name
        self.age = age

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        self._name = value

my_dog = Dog("Buddy", 5)
print(my_dog.name)  # Outputs: Buddy

my_dog.name = "Max"
print(my_dog.name)  # Outputs: Max