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
// -------------------------------------bind-----------------------
// both call and apply are one-time use methods—if you call the method with the
// this context it will have it, but the original function will remain unchanged.
var book = {
    title: "Brave New World",
    author: "Aldous Huxley"
};
function summary() {
    console.log(this.title + " was written by " + this.author + ".");
}
var braveNewWorldSummary = summary.bind(book);
braveNewWorldSummary();
