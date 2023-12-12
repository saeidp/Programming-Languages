#  -------------------------------------- Implementing an interface ---------------------
#  An "interface" in Python is usually created using abstract base classes and the abc module. Here's an example:

from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return "Woof"

class Cat(Animal):
    def make_sound(self):
        return "Meow"

my_dog = Dog()
print(my_dog.make_sound())  # Outputs: Woof

my_cat = Cat()
print(my_cat.make_sound())  # Outputs: Meow

animal = Animal() # Can't instantiate abstract class Animal with abstract method make_sound

# Enforcing Interface Implementation
#  If you try to instantiate an object of the abstract class Animal or a subclass that 
# doesn't implement the abstract methods, Python will throw an error
class Bird(Animal):
    pass

my_bird = Bird()  # TypeError: Can't instantiate abstract class Bird with abstract methods make_sound

