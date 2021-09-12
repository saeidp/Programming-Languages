// //---------------this global-------------
// function printThis() {
//   console.log(this); // object global
// }
// printThis();

// ------------- use strict----------------
// even within a function, this still refers to the window, or global object.
// however, when using strict mode, the context of this within a function on the global context will be undefined.
// "use strict";
// function printThis() {
//   console.log(this);
// }
// printThis(); // undefined

// //-------------------- object method---------------------
// // A method uses this to refer to the properties of the object.
// const america = {
//   name: 'The United States of America',
//   yearFounded: 1776,

//   describe() {
//     console.log(`${this.name} was founded in ${this.yearFounded}.`)
//   },
// }
// america.describe() //"The United States of America was founded in 1776."

// --------------------nested object method---------------------
// //In a nested object, this refers to the current object scope of the method
// const america = {
//   name: 'The United States of America',
//   yearFounded: 1776,
//   details: {
//     symbol: 'eagle',
//     currency: 'USD',
//     printDetails() {
//       console.log(`The symbol is the ${this.symbol} and the currency is ${this.currency}.`)
//     },
//   },
// }

// america.details.printDetails() //"The symbol is the eagle and the currency is USD."

// // ------------------------------function costructor----------------
// // when you use the new keyword, it creates an instance of a constructor function or class
// function Country(name: string, yearFounded: number): void {
//   this.name = name;
//   this.yearFounded = yearFounded;

//   this.describe = function() {
//     console.log(`${this.name} was founded in ${this.yearFounded}.`);
//   };
// }

// const america = new Country("The United States of America", 1776);

// america.describe(); //"The United States of America was founded in 1776."

// ---------------------------------class constructor----------------------
// class Country {
//   name: string;
//   yearFounded: number;
//   constructor(name: string, yearFounded: number) {
//     this.name = name;
//     this.yearFounded = yearFounded;
//   }

//   describe() {
//     console.log(`${this.name} was founded in ${this.yearFounded}.`);
//   }
// }
// const america = new Country("The United States of America", 1776);
// america.describe(); //"The United States of America was founded in 1776."

// // ------------------Dom event handler-------------------------------
// // in the browser, there is a special this context for event handlers.
// // in an event handler called by addEventListener, this will refer to event.currentTarget
// const button = document.createElement("button");
// button.textContent = "Click me";
// document.body.append(button);

// button.addEventListener("click", function(event) {
//   console.log(this);
// }); //<button>Click me</button>

// // -----------------------------Explicit context---------------------
// // call and apply are very similar—they invoke a function with a specified this context,
// // and optional arguments. The only difference between call and apply is that call
// // requires the arguments to be passed in one-by-one, and apply takes the arguments as an array.
// const book = {
//   title: "Brave New World",
//   author: "Aldous Huxley"
// };
// function summary() {
//   console.log(`${this.title} was written by ${this.author}.`);
// }
// summary(); // "undefined was written by undefined"
// // if
// summary.call(book); // "Brave New World was written by Aldous Huxley."
// // or:
// summary.apply(book); // "Brave New World was written by Aldous Huxley."

// // with parameter
// function longerSummary(genre: string, year: number) {
//   console.log(
//     `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
//   );
// }
// longerSummary.call(book, "dystopian", 1932); // "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932."
// longerSummary.apply(book, ["dystopian", 1932]); //"Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932."

// // -------------------------------------bind-----------------------
// // both call and apply are one-time use methods—if you call the method with the
// // this context it will have it, but the original function will remain unchanged.
// const book = {
//   title: "Brave New World",
//   author: "Aldous Huxley"
// };
// function summary() {
//   console.log(`${this.title} was written by ${this.author}.`);
// }
// const braveNewWorldSummary = summary.bind(book);
// braveNewWorldSummary(); // "Brave New World was written by Aldous Huxley"
// // in this example, every time you call braveNewWorldSummary, it will always
// // return the original this value bound to it. Attempting to bind a new this
// // context to it will fail, so you can always trust a bound function to return the this value you expect.

// // ------------------------------------------Arrow function----------------
// // arrow functions do not have their own this binding. Instead, they go up to the next level of execution.
// const whoAmI = {
//   name: "Leslie Knope",
//   regularFunction: function() {
//     console.log(this.name);
//   },
//   arrowFunction: () => {
//     console.log(this.name);
//   }
// };

// whoAmI.regularFunction(); // "Leslie Knope"
// whoAmI.arrowFunction(); // undefined

// // it can be useful to use the arrow function in cases where you
// // really want this to refer to the outer context. For example, if you
// // had an event listener inside of a class, you would probably want
// // this to refer to some value in the class.

// // in this example, you’ll create and append button to the DOM
// // like before, but the class will have an event listener that will
// // change the text value of the button when clicked.
// const button = document.createElement("button");
// button.textContent = "Click me";
// document.body.append(button);

// class Display {
//   constructor() {
//     this.buttonText = "New text";

//     button.addEventListener("click", event => {
//       event.target.textContent = this.buttonText;
//     });
//   }
// }

// new Display();
// // if you click the button, the text content will change
// // to the value of buttonText. If you hadn’t used an arrow
// // function here, this would be equal to event.currentTarget,
// // and you wouldn’t be able to use it to access a value within
// // the class without explicitly binding it.
// // this tactic is often used on class methods in frameworks like React.

// const whoAmI = {
//   name: "Leslie Knope",
//   regularFunction: function() {
//     console.log(this.name);
//   },
//   arrowFunction: () => {
//     console.log(this.name);
//   }
// };

// whoAmI.regularFunction(); // "Leslie Knope"
// whoAmI.arrowFunction(); // undefined
// ---------------------------------------------------------------

// // ES5
// var obj = {
//   id: 42,
//   counter: function counter() {
//     setTimeout(function() {
//       console.log(this.id);
//     }.bind(this), 1000);
//   }
// }; // this is undefined - a function inside another function. binding needed

// // ES6
// var obj = {
//   id: 42,
//   counter: function counter() {
//     setTimeout(() => {
//       console.log(this.id);
//     }, 1000);
//   }
// }; // ES6 arrow functions can’t be bound to a this keyword,
// // so it will lexically go up a scope, and use the value of this in the scope in which it was defined.

// when not to use arrow function
// 1- Object methods
// when you call cat.jumps, the number of lives does not decrease.
// it is because this is not bound to anything, and will inherit
// the value of this from its parent scope.
// var cat = {
//   lives: 9,
//   jumps: () => {
//     this.lives--;
//   }
// }

// 2. Callback functions with dynamic context
// if you need your context to be dynamic, arrow functions
// are not the right choice. Take a look at this event handler below:
// var button = document.getElementById('press');
// button.addEventListener('click', () => {
//   this.classList.toggle('on');
// });
// if we click the button, we would get a TypeError.
// it is because this is not bound to the button,
// but instead bound to its parent scope.
