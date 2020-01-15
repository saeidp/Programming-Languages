"use strict";
exports.__esModule = true;
var status = 'Bad';
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
// let start = new Date();
// let end = new Date();
// end.setDate(start.getDate() + 1);
// // start = new Date(start.toDateString());
// start.setHours(0, 0, 0, 0);
// end.setHours(0, 0, 0, 0);
// console.log(start);
// console.log(end);
var start = new Date();
start.setHours(start.getHours() + 3);
console.log(start);
var time = start.toLocaleTimeString();
console.log(time);
console.log(start.getHours());
function addZero(i) {
    var num = '' + i;
    if (i < 10) {
        num = '0' + i;
    }
    return num;
}
var hour = addZero(start.getHours()) + ':' + addZero(start.getMinutes());
console.log(hour);
console.log(start.toLocaleString());
