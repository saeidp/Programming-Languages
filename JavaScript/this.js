// // --------------Implicit Context----------------
// // the global context
// // as a method within an object
// // as a constructor on a function or class
// // as a DOM event handler
// // ----------Global-------------
// // In the global context, this refers to the global object. When you’re working in a browser, the global context is would be window.
// console.log(this);
// //Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

// function printThis() {
//   console.log(this);
// }

// printThis(); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
// // You might be tempted to think that this would follow the same rules inside a function, but it does not.
// //-----------An Object Method-----------------
// const america = {
//   name: "The United States of America",
//   yearFounded: 1776,

//   describe() {
//     console.log(`${this.name} was founded in ${this.yearFounded}.`);
//   }
// };

// america.describe();
// // "The United States of America was founded in 1776."

// //----------------
// const america = {
//   name: "The United States of America",
//   yearFounded: 1776,
//   details: {
//     symbol: "eagle",
//     currency: "USD",
//     printDetails() {
//       console.log(
//         `The symbol is the ${this.symbol} and the currency is ${this.currency}.`
//       );
//     }
//   }
// };

// america.details.printDetails();
// // "The symbol is the eagle and the currency is USD."
// //--------------------

// //----------A Function Constructor------------
// function Country(name, yearFounded) {
//   this.name = name;
//   this.yearFounded = yearFounded;

//   this.describe = function() {
//     console.log(`${this.name} was founded in ${this.yearFounded}.`);
//   };
// }

// const america = new Country("The United States of America", 1776);

// america.describe();
// //"The United States of America was founded in 1776."

// //-----------------A Class Constructor--------------
// class Country {
//   constructor(name, yearFounded) {
//     this.name = name;
//     this.yearFounded = yearFounded;
//   }

//   describe() {
//     console.log(`${this.name} was founded in ${this.yearFounded}.`);
//   }
// }

// const america = new Country("The United States of America", 1776);

// america.describe();
// // "The United States of America was founded in 1776."

// // -----------------A DOM Event Handler-----------------
// // run following in browser:
// const button = document.createElement("button");
// button.textContent = "Click me";
// document.body.append(button);

// button.addEventListener("click", function(event) {
//   console.log(this);
// });
// // <button>Click me</button>

// //----------------call-apply------------------------
// const book = {
//   title: "Brave New World",
//   author: "Aldous Huxley"
// };

// function summary() {
//   console.log(`${this.title} was written by ${this.author}.`);
// }

// summary(); // undefined
// summary.apply(book); // same
// summary.call(book); // same

// //------------------
// function longerSummary(genre, year) {
//   console.log(
//     `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
//   );
// }
// longerSummary.call(book, "dystopian", 1932);
// // "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932."

// longerSummary.apply(book, "dystopian", 1932);
// // Uncaught TypeError: CreateListFromArrayLike called on non-object at <anonymous>:1:15
// longerSummary.apply(book, ["dystopian", 1932]);
// // "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932."
// //-------------------

//-----------------bind-------------------
const book = {
  title: "Brave New World",
  author: "Aldous Huxley"
};

function summary() {
  console.log(`${this.title} was written by ${this.author}.`);
}
const braveNewWorldSummary = summary.bind(book);
braveNewWorldSummary();
// "Brave New World was written by Aldous Huxley"

//------------------Arrow Functions---------------
// Arrow functions do not have their own this binding.
// Instead, they go up to the next level of execution.
// don't use arrow functions in class (recommended).
const whoAmI = {
  name: "Leslie Knope",
  regularFunction: function() {
    console.log(this.name);
  },
  arrowFunction: () => {
    console.log(this.name);
  }
};

whoAmI.regularFunction(); // "Leslie Knope"
whoAmI.arrowFunction(); // undefined

//--------------------------
// It can be useful to use the arrow function in cases
// where you really want this to refer to the outer context.
const button = document.createElement("button");
button.textContent = "Click me";
document.body.append(button);

class Display {
  constructor() {
    this.buttonText = "New text";

    button.addEventListener("click", event => {
      event.target.textContent = this.buttonText;
    });
  }
}

new Display();
