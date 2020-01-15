// let d = new Date();
// console.log("Today's date is " + d);

//------ adding two integers----------------

// let x = 5;
// let y = 10;
// z = x + y;
// console.log("z = " + z);

//------ adding (const vs let)----------------

// generates error because of const
// const x = 5;
// const y = 2;

// x = 8;
// z = x + y;
// console.log("z = " + z);

// let x = 5;
// const y = 2;

// x = 8;
// z = x + y;
// console.log("z = " + z);
// worked

//------ if  else statement----------------

// const x = 3;
// if (x > 5) {
//   console.log("your number is greater than 5");
// } else if (x === 5) {
//   console.log("your number equal to 5");
// } else {
//   console.log("your number is less than 5");
// }

// //------ array/object for loop----------------

// let rectangle = {
//   width: 5,
//   length: 10
// };

// console.log(rectangle.width);

// let rectangles = [
//   {
//     width: 5,
//     height: 10
//   },
//   {
//     width: 6,
//     height: 11
//   }
// ];

// console.log(rectangles[1].width);

// for (let i = 0; i < rectangles.length; i++) {
//   console.log(rectangles[i].width);
// }

// ---------------------string--------------

// const str = "a,b,c";
// const arr = str.split(",");
// console.log(arr[1]);

// ---------------------ternary operator-----------
// const age = 45;
// let msg;
// if (age >= 40) {
//   msg = "old";
// } else {
//   msg = "young";
// }
// console.log(msg);
// const msg = age >= 45 ? "old" : "young";
// console.log(msg);

// // ---------------------switch-----------
// const date = new Date();
// const month = date.getMonth();

// switch (month) {
//   case 9:
//     console.log("october");
//     break;
//   case 11:
//     console.log("december");
//     break;
//   default:
//     console.log("Month not found");
// }

// const halfYear = new Date().getMonth();
// switch (halfYear) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("first half");
//     break;
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//   case 11:
//     console.log("second half");
//     break;
//   default:
//     console.log("something went wrong");
// }

// ------------------while---------------
// let x = 12;
// while (x > 10) {
//   console.log(x);
//   x -= 1;
// }

// let x = 9;
// do {
//   console.log(x);
//   x -= 1;
// } while (x > 10);

// let x = 10;
// while (true) {
//   if (x > 12) {
//     break;
//   }
//   console.log(x);
//   x++;
// }

// // ------------------array---------------
// let arr = [];
// for (let i = 1; i < 6; i++) {
//   arr.push(i);
// }
// console.log(arr);

// // -------------For…In Loop----------------------
// const person = {
//   name: "saeid",
//   age: 54
// };

// for (p in person) {
//   console.log(p);
// }

// for (p in person) {
//   console.log(person[p]);
// }

// arr = [1, 2, 3, 4, 5];
// for (a of arr) {
//   console.log(a);
// }

// const multiply = (x, y, z) => {
//   return x * y * z;
// };

// console.log(multiply(1, 2, 3));

//// ------------array----------------
// const arr = ["orange", "apple"];
// arr.push("pear");
// arr.unshift("carrot");
// console.log(arr);

// let arr = [];
// for (let i = 1; i < 11; i++) {
//   // arr[i - 1] = i;
//   arr.push(i);
// }

// arr.shift();
// arr.pop();
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr); // [ 5, 4, 3, 2, 1 ]

// const arr = [
//   {
//     name: "saeid",
//     age: 50
//   },
//   {
//     name: "shahriar",
//     age: 25
//   }
// ];

// const mySort = function(a) {
//   return a.age;
// };
// arr.sort(mySort);
// console.log(arr);

// const mySortArrow = a => {
//   return a.age;
// };
// arr.sort(mySortArrow);
// console.log(arr);

// arr.sort(a => {
//   return a.age;
// });
// console.log(arr);

// let calc = function(a, func) {
//   let result = func(a);
//   return result;
// };

// let result = calc(10, a => a * a);
// console.log(result);

// let calc = function(arr, func) {
//   let result = func(arr);
//   return result;
// };

// let result = calc([1, 2, 3], arr => {
//   let sum = 0;
//   for (let a of arr) {
//     sum += a;
//   }
//   return sum;
// });

// console.log(result);

// // ----------------map()------------------
// let arr = ["saeid", "ashkan", "shahriar"];
// arr.map(a => {
//   <div>${a}</div>;
// });

// // ----------------filter()------------------
// const people = [
//   {
//     name: "saeid",
//     age: 54
//   },
//   {
//     name: "shahriar",
//     age: 25
//   }
// ];

// const arr = people.filter(person => {
//   return person.age < 50;
// });
// console.log(arr);

// const arr2 = people.filter(person => {
//   return person.name.includes("sa");
// });
// console.log(arr2);

// // ----------- object ----------------
// const person = {
//   name: "shah",
//   age: 25,
//   message: function() {
//     console.log(`${this.name} is ${this.age} years old.`);
//   }
// };

// person.message();

// const rectangle = {
//   width: 10,
//   height: 5,
//   area: function() {
//     return this.width * this.height;
//   }
// };

// rectangle.width = 3;
// rectangle.height = 4;

// console.log(rectangle.area());

// // -----------date-------------
// const date = new Date("1970-01-02");
// console.log(date.getTime());

// -----------json--------------
// const arr = [
//   {
//     name: "saeid",
//     age: 54
//   },
//   {
//     name: "shah",
//     age: 24
//   }
// ];

// const strArr = JSON.stringify(arr);
// console.log(strArr);
// // [{"name":"saeid","age":54},{"name":"shah","age":24}]

// const arr2 = JSON.parse(strArr);
// console.log(arr2);
// // [ { name: 'saeid', age: 54 }, { name: 'shah', age: 24 } ]cz

// // ---------------prototype----------------
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const p = new Person("shah", 25);
// const p2 = new Person("saeid", 54);
// Person.prototype.print = function () {
//   console.log(`${this.name} is ${this.age} years' old`);
// };

// p.print();
// p2.print();

// function Age(age) {
//   this.age = age;
// }

// function Person(name, age) {
//   this.name = name;
//   Age.call(this, age);
// }

// p = new Person("shahriar", 25);
// p2 = new Person("saeid", 54);

// console.log(p);
// console.log(p2);

// //------------class--------------
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   Print() {
//     console.log(`${this.name} is ${this.age} years' old`);
//   }
// }

// const shah = new Person("shah", 24);
// shah.Print();

// //------------class--------------

// class Physical {
//   constructor(height) {
//     this.height = height;
//   }
//   PrintHeight() {
//     console.log(`${this.height}cm`);
//   }
// }

// class Person extends Physical {
//   constructor(name, age, height) {
//     super(height); // declared first in constructor
//     this.name = name;
//     this.age = age;
//   }
//   Print() {
//     console.log(`${this.name} is ${this.age} years' old & is ${this.height}cm`);
//   }
// }

// const shah = new Person("shah", 24, 178);
// shah.Print();
// shah.PrintHeight();

// // -------------objects----------------

// const person = {
//   name: "shah",
//   age: 25
// };

// Object.keys(person).forEach(key => {
//   console.log(`${key}: ${person[key]}`);
// });

// -----------------------

// const person = {
//   name: "shah",
//   age: 25
// };
// const physical = {
//   height: 178
// };
// console.log({ ...person, ...physical });

// -----------------------

// const person = {
//   name: "shah",
//   age: 25
// };

// function Print({ name, age }) {
//   console.log(`${name}, ${age}`);
// }

// function Print2(props) {
//   console.log(`${props.name} is ${props.age} years' old.`);
// }

// Print({ ...person });
// Print2(person);
// -----------------------

// const people = [
//   {
//     name: "shah",
//     age: 25
//   },
//   {
//     name: "saeid",
//     age: 54
//   }
// ];

// function Print(props) {
//   console.log(props[0]);
// }
// console.log(...people);
// console.log([...people]);
// Print([...people]);

// ----------------
// merging 2 arrays
// arr = [1, 2, 3];
// arr2 = [4, 5];
// console.log([...arr, ...arr2]);

// //-------------
// const person = {
//   name: "shah",
//   age: 24
// };
// const physical = {
//   height: 178
// };

// const combine = {
//   ...person,
//   ...physical
// };

// console.log(combine);

// //------------this-----------
// const person = {
//   name: "shah",
//   age: 24,
//   Print() {
//     console.log(this);
//   }
// };
// person.Print();
// // { name: 'shah', age: 24, Print: [Function: Print] }

//-------------call------------------
// const person = {
//   name: " shahriar",
//   age: 24
// };

// function Print(height) {
//   console.log(`${this.name} is ${this.age} years' old and ${height}cm tall`);
// }

// Print();
// Print.call(person, 178);

// // ----------------------
// const person = {
//   name: "shahriar",
//   age: 25
// };

// let { age } = person;

// console.log(age);

// // -----------default parameters--------
// var func = function(a, b) {
//   b = b === undefined ? 2 : b;
//   return a + b;
// };

// console.log(func(10)); // returns 12

// ----------------
// const sum = (a, b, c, d, e, f = 10) => a + b + c + d + e + f;

// const arr = [1, 2, 3, 4, 5];

// console.log(sum(...arr));

// ----------------
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   print() {
//     console.log(`${this.name} is ${this.age} years' old.`);
//   }
//   static createPerson(name, age) {
//     return new Person(name, age);
//   }
// }

// // const p = new Person("shahriar", 25);
// // p.print();

// const p = Person.createPerson("shahriar", 25);
// p.print();

//------------hoisting----------------
// console.log(i);
// var i = 10;
// // undefined
// // can't use var i before being defined.

// print();
// function print() {
//   console.log("hello world");
// }
// // hello world
// // normal functions are defined first before execution happens.

// print();
// const print = function() {
//   console.log("hello world");
// };
// //undefined
// // can't call function expression since it has an assignment.

//--------------call back function----------------

const calc = function(n, func) {
  return func(n);
};

const power = function(n) {
  return n * n;
};
console.log(calc(10, power));

// Short Cut
const result = calc(10, n => {
  return n * n;
});
console.log(result);
