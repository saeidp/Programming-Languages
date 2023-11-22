// // ------------------------------ basic funtions -------------------------------------
// function addTwo(num: number): number {
//   return num + 2
//   //return "hello"
// }

// function getUpper(val: string) {
//   return val.toUpperCase()
// }

// function signUpUser(name: string, email: string, isPaid: boolean) { }

// let loginUser = (name: string, email: string, isPaid: boolean = false) => { }

// let myValue = addTwo(5)
// getUpper("hitesh")

// signUpUser("hitesh", "hitesh@lco.dev", false)
// loginUser("h", "h@h.com")

// // Type 'string' is not assignable to type 'boolean'
// // function getValue(myVal: number): boolean{
// //     if (myVal > 5) {
// //         return true
// //     }
// //     return "200 OK"
// // }

// const getHello = (s: string): string => {
//   return ""
// }

// const heros = ["thor", "spiderman", "ironman"]
// // const heros = [1, 2, 3]

// const values = heros.map((hero): string => {
//   return `hero is ${hero}`
// })

// console.log(values) // ['hero is thor', 'hero is spiderman', 'hero is ironman']




// function consoleError(errmsg: string): void {
//   console.log(errmsg);

// }
// function handleError(errmsg: string): never {
//   throw new Error(errmsg);

// }


// export { }


// ------------------------------- function type expressions
// function greeter1(fn: (a: string) => void) {
//   fn("Hello, World");
// }

// function printToConsole1(s: string) {
//   console.log(s);
// }

// greeter1(printToConsole1);


//// another way
// type GreetFunction = (a: string) => void;
// function greeter2(fn: GreetFunction) {
//   fn("Hello, World");
// }
// function printToConsole2(s: string) {
//   console.log(s);
// }
// greeter2(printToConsole2);
//greeter2((s) => { console.log(s) })




// --------------------------function expression--------------------
// // assign add function to sum constant
// const sum = function add(x: number, y: number): number {
//   return x + y;
// };
// // invoke function to find the sum
// sum(20, 5);

// // ----------------------------Arrow function------------------------
// // arrow functions are always anonymous functions and a type of function expression
// // define multiply function
// const multiply = (x: number, y: number): number => {
//   return x * y;
// };

// // invoke function to find product
// multiply(30, 4);

//--------------------------------------------------- Call Signatures --------------------------
// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean;
// };
// function doSomething(fn: DescribableFunction) {
//   console.log(fn.description + " returned " + fn(6));
// }

// function myFunc(someArg: number) {
//   return someArg > 3;
// }
// myFunc.description = "default description";

// doSomething(myFunc);


// --------------------------------------Generic Functions --------------------------------------

// function firstElement(arr: any[]) {
//   return arr[0];
// }
// function firstElement_2<Type>(arr: Type[]): Type | undefined {
//   return arr[0];
// }

// // hover on the value then it is any
// const value = firstElement([1, 2, 3])

// const ss = firstElement_2(["a", "b", "c"])
// const nn = firstElement_2([1, 2, 3])
// const uu = firstElement_2([])


// ---------------------------------------------- inference --------------------------

//// The type was inferred - chosen automatically - by TypeScript.
// function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
//   return arr.map(func);
// }

// // Parameter 'n' is of type 'string'
// // 'parsed' is of type 'number[]'
// const parsed = map(["1", "2", "3"], (n) => parseInt(n));


// ----------------------------------------------- Constraints ---------------------------

//// we can use a constraint to limit the kinds of types that a type parameter can accept.
// function longest<Type extends { length: number }>(a: Type, b: Type) {
//   if (a.length >= b.length) {
//     return a;
//   } else {
//     return b;
//   }
// }

// // longerArray is of type 'number[]'
// const longerArray = longest([1, 2], [1, 2, 3]);
// // longerString is of type 'alice' | 'bob'
// const longerString = longest("alice", "bob");
// // Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);


// ------------------------------------------ Working with Constrained Values ------------------

//// when function promise to returns the same kind of object
// function minimumLength<Type extends { length: number }>(
//   obj: Type,
//   minimum: number
// ): Type {
//   if (obj.length >= minimum) {
//     return obj;
//   } else {
//     return { length: minimum }; // Type '{ length: number; }' is not assignable to type 'Type'.
//   }
// }


// -------------------------------------- Specifying Type Arguments -------------------
//// specifying the type is essential otherwise concat may not work
// function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
//   return arr1.concat(arr2);
// }
// // const arr = combine([1, 2, 3], ["hello"]); // Type 'string' is not assignable to type 'number'.
// const arr = combine<string | number>([1, 2, 3], ["hello"]);


// ---------------------------------------- Optional Parameter ---------------------------
// function f(x?: number) {
//   // ...
// }
// f(); // OK
// f(10); // OK


// // default value
// function f2(x = 10) {
//   // ...
// }


// ---------------------------------------- Function Overloads ----------------------------

////  a function to produce a Date that takes either a timestamp (one argument) or a month/day/year specification (three arguments).
// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }

// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3); // No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.


// --------------------------------------------- Good Overloads -----------------------
// function len(s: string): number;
// function len(arr: any[]): number;
// function len(x: any) {
//   return x.length;
// }

////Always prefer parameters with union types instead of overloads when possible
// // you can write non overload one as well because both have length
// function len2(x: any[] | string) {
//   return x.length;
// }

// --------------------------------- unknown -------------------------
//// The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value:
// function f1(a: any) {
//   a.b(); // OK
// }
// function f2(a: unknown) {
//   a.b(); // 'a' is of type 'unknown'.

// ------------------------------- never --------------------------------------
//// Some functions never return a value:
// function fail(msg: string): never {
//   throw new Error(msg);
// }

//// never also appears when TypeScript determines there’s nothing left in a union.
// function fn(x: string | number) {
//   if (typeof x === "string") {
//     // do something
//   } else if (typeof x === "number") {
//     // do something else
//   } else {
//     x; // has type 'never'!
//   }
// }

// ------------------------------------------------ Rest parameters and arguments --------------------
//// rest parameters
//// In TypeScript, the type annotation on these parameters is implicitly any[] instead of any, and any type annotation given must be of the form Array<T> or T[], or a tuple
// function multiply(n: number, ...m: number[]) {
//   return m.map((x) => n * x);
// }
// // 'a' gets value [10, 20, 30, 40]
// const a = multiply(10, 1, 2, 3, 4);

//// rest arguments
//// Conversely, we can provide a variable number of arguments from an iterable object . push method of arrays takes any number of arguments:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// arr1.push(...arr2);
// arr1.push(7, 8, 9);
// console.log(arr1);

// ------------------------------------ parameter destructing ------------------------------
// function sum({ a, b, c }) {
//   console.log(a + b + c);
// }
// sum({ a: 10, b: 3, c: 9 });

//// The type annotation for the object goes after the destructuring syntax:
// function sum({ a, b, c }: { a: number; b: number; c: number }) {
//   console.log(a + b + c);
// }

//// Same as prior example
// type ABC = { a: number; b: number; c: number };
// function sum({ a, b, c }: ABC) {
//   console.log(a + b + c);
// }

// ----------------------------------------------------- Assignability of Functions ---------------------
//// return type void. The void return type for functions
//// Contextual typing with a return type of void does not force functions to not return something
// type voidFunc = () => void;

// const f1: voidFunc = () => {
//   return true;
// };

// const f2: voidFunc = () => true;

// const f3: voidFunc = function () {
//   return true;
// };

// const v1 = f1();

// const v2 = f2();

// const v3 = f3();

// // types are void andthen they can not be used in a calculation as follows
// const v4 = v1 + v2 + v3


//// This behavior exists so that the following code is valid even though Array.prototype.push returns a number and the Array.prototype.forEach method expects a function with a return type of void.
// const src = [1, 2, 3];
// const dst = [0];

// src.forEach((el) => dst.push(el));