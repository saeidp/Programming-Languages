// --------------------------defining class--------------------
// initializing a class definition
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
console.log(greeter.greet());
// -----------------------------------------Inheritance-------------------------
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

// ---------------------------------------More classes-----------------
class Hero {
  name: string;
  level: number;
  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
  }

  // adding a method to the constructor
  greet() {
    return `${this.name} says hello.`;
  }
}

const hero = new Hero("saeid", 5);
console.log(hero.greet());

// creating a new class from the parent
class Mage extends Hero {
  spell: string;
  constructor(name: string, level: number, spell: string) {
    // chain constructor with super
    super(name, level);

    // add a new property
    this.spell = spell;
  }
}
