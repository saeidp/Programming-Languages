# ---------------------------------------------- Simple greet function --------------------
def greet(name):
    return "Hello " + name

print(greet("Alice"))  # Output: Hello Alice

def greet(name, msg="Good morning!"):
    print("Hello", name + ', ' + msg)

greet("Kate")          # Output: Hello Kate, Good morning!
greet("Bruce", "How do you do?")  # Output: Hello Bruce, How do you do?


