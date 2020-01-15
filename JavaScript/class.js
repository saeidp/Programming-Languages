// // -------defining a class-------------
// // Initializing a class definition
// function Hero(name, level) {
//     this.name = name;
//     this.level = level;
// }

// // Adding a method to the constructor
// Hero.prototype.greet = function() {
//     return `${this.name} says hello.`;
// }

// class Hero {
//     constructor(name, level) {
//         this.name = name;
//         this.level = level;
//     }

//     // Adding a method to the constructor
//     greet() {
//         return `${this.name} says hello.`;
//     }
// }

// ------------Extending a Class--------------
// class Hero {
//   constructor(name, level) {
//     this.name = name;
//     this.level = level;
//   }

//   // Adding a method to the constructor
//   greet() {
//     return `${this.name} says hello.`;
//   }
// }

// // Creating a new class from the parent
// class Mage extends Hero {
//   constructor(name, level, spell) {
//     // Chain constructor with super
//     super(name, level);

//     // Add a new property
//     this.spell = spell;
//   }
// }
// const hero2 = new Mage("Lejon", 2, "Magic Missile");

// ----------- complete class exercise--------------
class Physical {
  constructor(height) {
    this.height = height;
  }
  PrintHeight() {
    console.log(`${this.height}cm`);
  }
}

class Person extends Physical {
  constructor(name, age, height) {
    super(height); // declared first in constructor
    this.name = name;
    this.age = age;
  }
  Print() {
    console.log(`${this.name} is ${this.age} years' old & is ${this.height}cm`);
  }
}

const shah = new Person("shah", 24, 178);
shah.Print();
shah.PrintHeight();
