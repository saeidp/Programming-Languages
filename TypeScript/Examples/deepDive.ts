//export {};
// interface Point2D {
//   x: number;
//   y: number;
// }

// var point2D: Point2D = { x: 0, y: 10 };
// console.log(point2D);
// -------------------------------------------------------

// jquey $
// // declare var $: any;
// // $('.awesome').show();
// ------------------------------------------------------

// class Point {
//   constructor(public x: number, public y: number) {}
//   add(point: Point) {
//     return new Point(this.x + point.x, this.y + point.y);
//   }
// }

// var p1 = new Point(0, 10);
// var p2 = new Point(10, 20);
// var p3 = p1.add(p2); // { x: 10, y: 30 }
// console.log(p3);
// --------------------------------------------------------

// type Idisplay = {
//   id: string;
//   display: string;
// };

// const list: Idisplay[] = [
//   { id: "foo", display: "foo select" },
//   { id: "bar", display: "bar select" }
// ];

// const fooIndex = list.map(i => i.id).indexOf("bar");
// console.log(fooIndex);
// --------------------------------------------------------

// return an object
// function toInt(str: string): { valid: boolean; int?: number } {
//   const int = parseInt(str);
//   if (isNaN(int)) {
//     return { valid: false };
//   } else {
//     return { valid: true, int };
//   }
// }

// const { valid, int } = toInt("s10");
// const { valid, int } = toInt("10");
// if (valid) {
//   console.log(int);
// }
// const obj = toInt("10");
// if (obj.valid) {
//   console.log(obj.int);
// }
// ---------------------------------------------------------------

// undefined is not used in json
// console.log(JSON.stringify({ willStay: null, willBeGone: undefined })); // {"willStay":null}
// ------------------------------------------------------------------------------------------------

// this
// any access to this keyword within a function is actually controlled
// by how the function is actually called.It is commonly referred to as
// the “calling context.”
// function foo() {
//   console.log(this);
// }

// foo(); // logs out the global e.g. `window` in browsers
// let bar = {
//   foo
// };
// bar.foo(); // Logs out `bar` as `foo` was called on `bar`
// ------------------------------------------------------------------------

// closures
// function in JavaScript has access to any variables defined in the
// outer scope
// function outerFunction(arg) {
//     var variableInOuterFunction = arg;

//     function bar() {
//         console.log(variableInOuterFunction); // Access a variable from the outer scope
//     }

//     // Call the local function to demonstrate that it has access to arg
//     bar();
// }

// outerFunction("hello closure"); // logs hello closure!

// // closures allow compose objects. the revealing module pattern:
// function createCounter() {
//     let val = 0;
//     return {
//         increment() { val++ },
//         getVal() { return val }
//     }
// }

// let counter = createCounter();
// counter.increment();
// console.log(counter.getVal()); // 1
// counter.increment();
// console.log(counter.getVal()); // 2
// ------------------------------------------------------------------------------

// truthy
// being explicit on Truthy
// let name1: string = "ss";
// const hasName = !!name1;
// console.log(hasName); // true

// let name2: string = "";
// const hasName2 = !!name2;
// console.log(hasName2); // false
// -------------------------------------------------------------

// inheritence
// class Point {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//   add(point: Point) {
//     return new Point(this.x + point.x, this.y + point.y);
//   }
// }
// class Point3D extends Point {
//   z: number;
//   constructor(x: number, y: number, z: number) {
//     super(x, y);
//     this.z = z;
//   }
//   add(point: Point3D) {
//     var point2D = super.add(point);
//     return new Point3D(point2D.x, point2D.y, this.z + point.z);
//   }
// }
// ------------------------------------------------------------------
// arrow functions
// var inc = (x: number) => x + 1;

// this meaning is fixed using arrow function. This in below is windo in this case
// this.age inside Person will not be read for growOld.
// function Person(age) {
//     this.age = age;
//     this.growOld = function() {
//         this.age++;
//     }
// }
// var person = new Person(1);
// setTimeout(person.growOld,1000);

// setTimeout(function() { console.log(person.age); },2000); // 1, should have been 2

// to fix the above we have to use arrow function
// function Person(age) {
//     this.age = age;
//     this.growOld = () => {
//         this.age++;
//     }
// }
// var person = new Person(1);
// setTimeout(person.growOld,1000);

// setTimeout(function() { console.log(person.age); },2000); // 2

// combine arrows with classes
// class Person {
//     constructor(public age:number) {}
//     growOld = () => {
//         this.age++;
//     }
// }
// var person = new Person(1);
// setTimeout(person.growOld,1000);

// setTimeout(function() { console.log(person.age); },2000); // 2
// ----------------------------------------------------------------------

// arrow functions and inheritance
// class Adder {
//     constructor(public a: number) {}
//     add = (b: number): number => {
//         return this.a + b;
//     }
// }
// class Child extends Adder {
//     callAdd(b: number) {
//         return this.add(b);
//     }
// }

// demo to show it works
// const child = new Child(123);
// console.log(child.callAdd(123)); // 246

// the above do not work with the super keyword when you try to
//  override the function in a child class.
// since there is only one this such functions cannot participate in a call
// to super (super only works on prototype members). You can easily get around it
// by creating a copy of the method before overriding it in the child.
// class Adder {
//     constructor(public a: number) {}
//     // This function is now safe to pass around
//     add = (b: number): number => {
//         return this.a + b;
//     }
// }

// class ExtendedAdder extends Adder {
//     // Create a copy of parent before creating our own
//     private superAdd = this.add;
//     // Now create our override
//     add = (b: number): number => {
//         return this.superAdd(b);
//     }
// }

// ------------------------------------------------------------------------------
// quick object return
// sometimes you need a function that just returns a simple object literal
// wRONG WAY TO DO IT. is parsed as a block containing a JavaScript Label by JavaScript runtimes

// var foo = () => {
//     bar: 123
// };

// you can fix it by surrounding the object literal with ()
// correct 🌹

// var foo = () => ({
//     bar: 123
// });

// ------------------------------------------------------------------
// rest parameters
// rest parameters (denoted by ...argumentName for the last argument) allow you to quickly
// accept multiple arguments in your function and get them as an array

// function iTakeItAll(first, second, ...allOthers) {
//     console.log(allOthers);
// }
// iTakeItAll('foo', 'bar'); // []
// iTakeItAll('foo', 'bar', 'bas', 'qux'); // ['bas','qux']
// ----------------------------------------------------------------------

// let
// var Variables in JavaScript are function scoped. This is different
// from many other languages (C# / Java etc.) where the variables are block scoped
// var foo = 123;
// if (true) {
//     var foo = 456;
// }
// console.log(foo); // 456

// using let

// let foo = 123;
// if (true) {
//     let foo = 456;
// }
// console.log(foo); // 123

// this problem doesn't happen using function
// functions create a new scope

// var foo = 123;
// function test() {
//   console.log(foo); // undefined
//   var foo = 456;
// }
// test();
// console.log(foo); // 123

// ---------------------------------------------------------------

// let in closure
// what is the output of this?

// var funcs = [];
// // create a bunch of functions
// for (var i = 0; i < 3; i++) {
//   funcs.push(function() {
//     console.log(i);
//   });
// }
// // call them
// for (var j = 0; j < 3; j++) {
//   funcs[j]();
// }

// // output will be 3 3 3

// // Use let to fix

// var funcs = [];
// // create a bunch of functions
// for (let i = 0; i < 3; i++) {
//   // Note the use of let
//   funcs.push(function() {
//     console.log(i);
//   });
// }
// // call them
// for (var j = 0; j < 3; j++) {
//   funcs[j]();
// }
// // output will be 0 1 2

// ------------------------------------------------------
// const
// const foo = 123;
// const foo = 123;
// foo = 456; // ERROR: Left-hand side of an assignment expression
// //cannot be a constant

// const foo = { bar: 123 };
// foo = { bar: 456 }; // ERROR : Left hand side of an assignment
// //expression cannot be a constant

// const foo = { bar: 123 };
// foo.bar = 456; // Allowed!
// console.log(foo); // { bar: 456
// --------------------------------------------------------------

// // Destructing
// var rect = { x: 0, y: 10, width: 15, height: 20 };

// // Destructuring assignment
// var { x, y, width, height } = rect;
// console.log(x, y, width, height); // 0,10,15,20

// rect.x = 10;
// ({ x, y, width, height } = rect); // assign to existing variables using outer parentheses
// console.log(x, y, width, height); // 10,10,15,20

// // Object Destructuring with rest
// var { w, x, ...remaining } = { w: 1, x: 2, y: 3, z: 4 };
// console.log(w, x, remaining); // 1, 2, {y:3,z:4}

// // A common use case is also to ignore certain properties
// // Example function
// function goto(point2D: { x: number; y: number }) {
//   // Imagine some code that might break
//   // if you pass in an object
//   // with more items than desired
// }
// // Some point you get from somewhere
// const point3D = { x: 1, y: 2, z: 3 };
// /** A nifty use of rest to remove extra properties */
// const { z, ...point2D } = point3D;
// console.log(point2D);
// goto(point2D);

// // Array Destructing
// var x = 1, y = 2;
// [x, y] = [y, x];
// console.log(x, y); // 2,1

// // Array Destructuring with rest
// // You can pick up any number of elements from an array and get an array of the
// // remaining elements using array destructuring with rest.
// var [x, y, ...remaining2] = [1, 2, 3, 4];
// console.log(x, y, remaining2); // 1, 2, [3,4]

// var [x, , ...remaining3] = [1, 2, 3, 4];
// console.log(x, remaining3); // 1, [3,4]
//// ------------------------------------------------

// // Spread operator
//// previously you would need to use Function.prototype.apply
// function foo(x, y, z) {}
// var args = [0, 1, 2];
// console.log(args);
// console.log(...args);
// //foo(...args); // it doesn't work and i don't know why

// // Destructing
// var [x, y, ...remaining] = [1, 2, 3, 4];
// console.log(x, y, remaining); // 1,2,[3,4]

// // Array assignments.
// // It allows an expanded version of an array into another array
// var list = [1, 2];
// list = [...list, 3, 4];
// console.log(list); // [1,2,3,4]

// var list = [1, 2];
// list = [0, ...list, 4];
// console.log(list); // [0,1,2,4]
// //-----------------------------------------------------------
// // Object Spread
// const point2D = {x: 1, y: 2};
// /** Create a new object by using all the point2D props along with z */
// const point3D = {...point2D, z: 3};

// // what comes first is 'overridden' by what comes later:
// const point2D_1 = {x: 1, y: 2};
// const anotherPoint3D = {x: 5, z: 4, ...point2D_1};
// console.log(anotherPoint3D); // {x: 1, y: 2, z: 4}
// const yetAnotherPoint3D = {...point2D_1, x: 5, z: 4}
// console.log(yetAnotherPoint3D); // {x: 5, y: 2, z: 4}
// --------------------------------------------------------

// for...of
// for...in for an array does not iterate over the array items. Instead it iterates over
// the keys of the object passed in.
// var someArray = [9, 2, 5];
// for (var item in someArray) {
//   console.log(item); // 0,1,2
// }

// var someArray = [9, 2, 5];
// for (var item2 of someArray) {
//   console.log(item2); // 9,2,5
// }

// var hello = "is it me you're looking for?";
// for (var char of hello) {
//   console.log(char); // is it me you're looking for?
// }
// --------------------------------------------------------------------------------------
// template String
// var lyrics = 'Never gonna give you up';
// var html = '<div>' + lyrics + '</div>';

// var lyrics = 'Never gonna give you up';
// var html = `<div>${lyrics}</div>`;

// console.log(`1 and 1 make ${1 + 1}`);

// //Multiple Strings
// var lyrics = "Never gonna give you up \
// \nNever gonna let you down";

// // With Typescript using template string
// var lyrics = `Never gonna give you up
// never gonna let you down`;

// -------------------------------------------------
// creating types and use it as a domain
// type StatusEnum = 'Good' | 'Bad' | 'None';

// const status: StatusEnum = 'Bad';
// you get intellisense and you are just able to assign one of those values
// --------------------------------------------------
// //Promise
// function iReturnPromiseAfter1Second(): Promise<string> {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Hello world!"), 1000);
//   });
// }

// const promise = new Promise((resolve, reject) => {
//   resolve(123);
// });
// promise
//   .then(res => {
//     // res is inferred to be of type `number`
//     return iReturnPromiseAfter1Second();
//   })
//   .then(res => {
//     // res is inferred to be of type `string`
//     console.log(res); // Hello world!
//   });
// -------------------------------------------------------
// generators
// function* infiniteSequence() {
//   var i = 0;
//   while (true) {
//     yield i++;
//   }
// }

// var iterator = infiniteSequence();
// while (true) {
//   console.log(iterator.next()); // { value: xxxx, done: false } forever and ever
// }
// // Of course if the iterator does end, you get the result
// // of { done: true } as demonstrated below:
// function* idMaker() {
//   let index = 0;
//   while (index < 3) yield index++;
// }

// let gen = idMaker();

// console.log(gen.next()); // { value: 0, done: false }
// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { done: true }
// ------------------------------------------------
// not actual code. A thought experiment
// async function foo() {
//   try {
//       var val = await getMeAPromise();
//       console.log(val);
//   }
//   catch(err) {
//       console.log('Error: ', err.message);
//   }
// }

// function delay(milliseconds: number, count: number): Promise<number> {
//   return new Promise<number>(resolve => {
//     setTimeout(() => {
//       resolve(count);
//     }, milliseconds);
//   });
// }

// // async function always returns a Promise
// async function dramaticWelcome(): Promise<void> {
//   console.log("Hello");

//   for (let i = 0; i < 5; i++) {
//     // await is converting Promise<number> into number
//     const count: number = await delay(500, i);
//     console.log(count);
//   }

//   console.log("World!");
// }
//-------------------------------------------------------------
// const label = '30/10/2019, 20:00:00';
// const date = new Date(label);

// console.log(label);
// console.log(date);

//const date = new Date(Date.UTC(2019, 09, 3, 10));
const date = new Date();
console.log(date);
// const label = date.toLocaleString('en-AU');
const label = date.toString();
console.log(label);

const date2 = new Date(label);
console.log(date2);

//console.log(new Date('30/10/2019, 10:00:00'));
