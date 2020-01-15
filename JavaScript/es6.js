// ES6 Syntax and Feature Overview
// Variable declaration
// ES6 introduced the let keyword, which allows
// for block-scoped variables which cannot be hoisted
// or redeclared.
var x = 0;
let x = 0;

//Constant declaration
// ES6 introduced the const keyword, which
// cannot be redeclared or reassigned, but is not immutable.

// Arrow functions
// The arrow function expression syntax is a shorter
// way of creating a function expression. Arrow functions
// do not have their own this, do not have prototypes,
// cannot be used for constructors, and should not be used
// as object methods.
function func(a, b, c) {} // function declaration
var func = function(a, b, c) {}; // function expression

let func = a => {}; // parentheses optional with one parameter
let func = (a, b, c) => {}; // parentheses required with multiple parameters

// Template literals
// Concatenation/string interpolation
var str = "Release date: " + date;
let str = `Release Date: ${date}`;

// Multi-line strings
var str = "This text " + "is on " + "multiple lines";
let str = `This text
            is on
            multiple lines`;

// Implicit returns
// The return keyword is implied and can be omitted
// if using arrow functions without a block body.
function func(a, b, c) {
  return a + b + c;
}
let func = (a, b, c) => a + b + c; // curly brackets must be omitted

// Method definition shorthand
// The function keyword can be omitted when assigning
// methods on an object.
var obj = {
  a: function(c, d) {},
  b: function(e, f) {}
};
let obj = {
  a(c, d) {},
  b(e, f) {}
};

// Destructuring (object matching)
// Use curly brackets to assign properties of an
// object to their own variable.

const person = {
  name: "shahriar",
  age: 25
};

let { age } = person;

console.log(age);

// Array iteration (looping)
// A more concise syntax has been introduced for
// iteration through arrays and other iterable objects.
var arr = ["a", "b", "c"];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i of arr) {
  console.log(i);
}

// Default parameters
// Functions can be initialized with default parameters,
// which will be used only if an argument is not invoked
// through the function.
var func = function(a, b) {
  b = b === undefined ? 2 : b;
  return a + b;
};
func(10); // returns 12
func(10, 5); // returns 15

let func = (a, b = 2) => {
  return a + b;
};
func(10); // returns 12
func(10, 5); // returns 15

// Spread syntax
// es6
// Spread syntax can be used to expand an array.
let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c"];
let arr3 = [...arr1, ...arr2];

console.log(arr3); // [1, 2, 3, "a", "b", "c"]

// Spread syntax can be used for function arguments.
let arr1 = [1, 2, 3];
let func = (a, b, c) => a + b + c;

console.log(func(...arr1)); // 6

// Classes/constructor functions
// ES6 introducess the class syntax on top of the
// prototype-based constructor function.
// es5
function Func(a, b) {
  this.a = a;
  this.b = b;
}

Func.prototype.getSum = function() {
  return this.a + this.b;
};

var x = new Func(3, 4);

// es6
class Func {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getSum() {
    return this.a + this.b;
  }
}

let x = new Func(3, 4);

// Inheritance
// The extends keyword creates a subclass.
// es5
function Func(a, b) {
  this.a = a;
  this.b = b;
}

Func.prototype.getSum = function() {
  return this.a + this.b;
};

var x = new Func(3, 4);
function Inheritance(a, b, c) {
  Func.call(this, a, b);

  this.c = c;
}

Inheritance.prototype = Object.create(Func.prototype);
Inheritance.prototype.getProduct = function() {
  return this.a * this.b * this.c;
};

var y = new Inheritance(3, 4, 5);

// es6
class Func {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getSum() {
    return this.a + this.b;
  }
}

let x = new Func(3, 4);

class Inheritance extends Func {
  constructor(a, b, c) {
    super(a, b);

    this.c = c;
  }

  getProduct() {
    return this.a * this.b * this.c;
  }
}

let y = new Inheritance(3, 4, 5);

// modules export/import
// Modules can be created to export and import code
// between files.

// export.js
let func = a => a + a;
let obj = {};
let x = 0;

export { func, obj, x };

// import.js
import { func, obj, x } from "./export.js";
console.log(func(3), obj, x);
