// -------------------------------------------- union -------------------------------
// type StringOrNumber = string | number;

// let myVar: StringOrNumber;
// myVar = "Hello";  // Valid
// myVar = 123;      // Also valid

// -------------------------------------- Defining type for objects -----------------------

// // The type keyword in TypeScript allows you to define custom types, enhancing code readability and maintainability.
// type User = {
//     id: number;
//     name: string;
//     age?: number;  // Optional property
// };

// const user: User = { id: 1, name: "Alice", age: 30 };

// ---------------------------------------- Intersection Types --------------------------------
// type Name = {
//     firstName: string;
//     lastName: string;
// };
// type Contact = {
//     email: string;
//     phone: string;
// };

// type Employee = Name & Contact;

// const employee: Employee = {
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@example.com",
//     phone: "123-456-7890"
// };

// -------------------------------------------------- Type for Function ------------------------------------
// // Here, GreetFunction is a type that represents a function taking a string argument and returning a string.
// type GreetFunction = (name: string) => string;
// const sayHello: GreetFunction = name => `Hello, ${name}`;
// console.log(sayHello("Alice"));  // Output: Hello, Alice

// ---------------------------------------------------- Readonly type modifier ------------------------------
// type ReadonlyUser = {
//     readonly id: number;
//     readonly name: string;
// };

// const readOnlyUser: ReadonlyUser = { id: 1, name: "Alice" };
// // readOnlyUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

// ----------------------------------------------------- Type of arrays ------------------------------------------
// type NumberArray = number[];
// const numbers: NumberArray = [1,2,3,4,5]

// -------------------------------------------------------- Mapped Types ----------------------------------------
// // each key is a string literal type and each value is a boolean.
// type MyPermissions = {
//     [P in 'read' | 'write' | 'execute']: boolean;
// };

// const userPermissions: MyPermissions = {
//     read: true,
//     write: false,
//     execute: true
// };

// ---------------------------------------------------------- Conditional Types ---------------------------------
// // Check is a conditional type that evaluates to different types based on the type of T
// type Check<T> = T extends string ? 'StringType' : 'OtherType';
// type Type1 = Check<string>;  // 'StringType'
// type Type2 = Check<number>;  // 'OtherType'

// ------------------------- basic types ---------------------
// type User = {
//     readonly _id: string
//     name: string
//     email: string
//     isActive: boolean
//     credcardDetails?: number
// }

// let myUser: User = {
//     _id: "1245",
//     name: "h",
//     email: "h@h.com",
//     isActive: false
// }

// type cardNumber = {
//     cardnumber: string
// }

// type cardDate = {
//     cardDate: string
// }

// type cardDetails = cardNumber & cardDate & {
//     cvv: number
// }


// myUser.email = "h@gmail.com"

// console.log(myUser.email)

// // You need to use all the properties. This is like interface inheriting
// let card: cardDetails = {
//     cardnumber: "",
//     cardDate: "",
//     cvv: 0
// }


// interface User {
//     name: string;
//     id: number;
// }

// const user: User = {
//     name: "Hayes",
//     id: 0,
// };

// console.log(user.name);

//--------------------------------------------------------------
// interface User {
//     name: string;
//     id: number;
// }

// class UserAccount {
//     name: string;
//     id: number;
//     constructor(name: string, id: number) {
//         this.name = name;
//         this.id = id;
//     }
// }

// const user: User = new UserAccount("Murphy", 1);
// console.log(user.name)

//---------------------------- Composing Types ------------------------

// a value is allowed to bee
// type MyBool = true | false;
// type WindowStates = "open" | "closed" | "minimized";

// function getLength(obj: string | string[]) {
//     return obj.length;
// }

// const objLength = getLength("Hello World");
// console.log(objLength);

// const objLength2 = getLength(["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]);
// console.log(objLength2);

// function wrapInArray(obj: string | string[]) {
//     if (typeof obj === "string") {
//         return [obj];
//     }
//     return obj;
// }

// --------------------------------- Generics -----------------------------

// // An array without generics could contain anything. An array with generics can describe
// // the values that the array contains.
// type StringArray = Array<string>;
// type ObjectWithNameArray = Array<{ name: string }>
// const values: StringArray = ["Hello", " World"];
// console.log(values);


// // your own type. You define one generic interface but you can implement it in different
// // classes. One can use string or one can use number but you don't need to redefine interface
// interface Backpack<Type> {
//     add: (obj: Type) => void;
//     get: () => Type;
// }

// // This line is a shortcut to tell TypeScript there is a
// // constant called `backpack`, and to not worry about where it came from.
// declare const backpack: Backpack<string>;
// const object = backpack.get();
// // you can't pass number like backpack.add(3)

// ------------------------------- Structurl Type System ----------------------------------
// // This is sometimes called “duck typing” or “structural typing”. (focuses on the shape that the values have)
// interface Point {
//     x: number;
//     y: number;
// }

// function logPoint(p: Point) {
//     console.log(`${p.x}, ${p.y}`);
// }

// // logs "12, 26". Typescript based on the shape of point found that it is of type Point
// const point = { x: 12, y: 26 };
// logPoint(point);


// // There is no difference between how classes and objects conform to shapes:
// class VirtualPoint {
//     x: number;
//     y: number;

//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
// }
// const newVPoint = new VirtualPoint(13, 56);
// logPoint(newVPoint); // logs "13, 56"

// const names = ["Alice", "Bob", "Eve"];

// // Contextual typing for function - parameter s inferred to have type string
// names.forEach(function (s) {
//     console.log(s.toUpperCase());
// });

// // Contextual typing also applies to arrow functions
// names.forEach((s) => {
//     console.log(s.toUpperCase());
// });

//------------------------------------------- Object Types -------------------------
// function printCoord(pt: { x: number, y: number }) {
//     console.log(pt.x);
//     console.log(pt.y);
// }
// printCoord({ x: 3, y: 7 });

// -----------------------------------Optional Properties -------------------------
// function printName(obj: { first: string; last?: string }) {
//     console.log(obj.first);
//     if (obj.last) {
//         console.log(obj.last)
//     }
// }
// // Both OK
// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });

// ------------------------------------ Union Types ------------------------------
// function printId(id: number | string) {
//     console.log("Your ID is: " + id);
// }
// // OK
// printId(101);
// // OK
// printId("202");
// // Error
//// printId({ myID: 22342 });

// function printId(id: number | string) {
//     if (typeof id === "string") {
//         // In this branch, id is of type 'string'
//         console.log(id.toUpperCase());
//     } else {
//         // Here, id is of type 'number'
//         console.log(id);
//     }
// }
// printId("hello");


// function welcomePeople(x: string[] | string) {
//     if (Array.isArray(x)) {
//         // Here: 'x' is 'string[]'
//         console.log("Hello, " + x.join(" and "));
//     } else {
//         // Here: 'x' is 'string'
//         console.log("Welcome lone traveler " + x);
//     }
// }
// welcomePeople(["John", "Mike"]);


// --------------------------------------------- Type Aliases ----------------------------

// // This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.
// type Point = {
//     x: number;
//     y: number;
// };
// // Exactly the same as the earlier example
// function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });
// type ID = number | string;


// ------------------------------------ Interfaces -------------------------------------

// //An interface declaration is another way to name an object type:

// interface Point {
//     x: number;
//     y: number;
// }

// function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });

// // Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
// // Almost all features of an interface are available in type, the key distinction is that a type cannot
// // be re-opened to add new properties vs an interface which is always extendable.

// interface Animal {
//     name: string;
// }

// interface Bear extends Animal {
//     honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;


// type Animal = {
//     name: string;
// }

// type Bear = Animal & {
//     honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;

//// literal types combined with non litral types
// interface Options {
//     width: number;
// }
// function configure(x: Options | "auto") {
//     // ...
// }
// configure({ width: 100 });
// configure("auto");
// configure("automatic");

// // Literal types combinations
// function printText(s: string, alignment: "left" | "right" | "center") {
//     // ...
// }
// printText("Hello, world", "left");
// printText("G'day, mate", "centre");


// function compare(a: string, b: string): -1 | 0 | 1 {
//     return a === b ? 0 : a > b ? 1 : -1;
// }

//------------------------------------------ null and undefined ----------------------
//// With strictNullChecks on, when a value is null or undefined, you will need to test for those values before using methods or properties on that value
// function doSomething(x: string | null) {
//     if (x === null) {
//         // do nothing
//     } else {
//         console.log("Hello, " + x.toUpperCase());
//     }
// }

//// TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined
// function liveDangerously(x?: number | null) {
//     // No error
//     console.log(x!.toFixed());
// }
// const value = liveDangerously(10);


// -------------------------------------------- Enums --------------------------------
// enum UserResponse {
//     No = 0,
//     Yes = 1,
// }

// function respond(recipient: string, message: UserResponse): void {
//     // ...
// }

// respond("Princess Caroline", UserResponse.Yes);

// ----------------------------- function as types -------------------------
// type func = (s: string) => void
// function printToConsole3(s: string): void {
//     console.log(s)
// }

// const myFunc: func = printToConsole3
// myFunc("Hello")

//--------------------------------------------------- Call Signatures --------------------------
//// I find it a bit magical and I prefer the next sample which is more clear
// type DescribableFunction = {
//     description: string;
//     (someArg: number): boolean;
// };
// function doSomething(fn: DescribableFunction) {
//     console.log(fn.description + " returned " + fn(6));
// }

// function myFunc(someArg: number) {
//     return someArg > 3;
// }
// myFunc.description = "default description";

// doSomething(myFunc);

// ----------------------------------------- Call signature using type ----------------------------

// type DescribableFunction = {
//     description: string,
//     myFunc: (someArg: number) => boolean
// };

// const myTypeValue: DescribableFunction = {
//     description: "Hello",
//     myFunc: (someArg: number) => someArg > 3
// };

// myTypeValue.description = "default description";
// console.log(myTypeValue.myFunc(5));

// ------------------------------------------ type predicates -------------
// // A predicate takes the form parameterName is Type, where parameterName must
// // be the name of a parameter from the current function signature.
// // Any time isFish is called with some variable, TypeScript will narrow
// // that variable to that specific type if the original type is compatible.
// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// function isFish(pet: Fish | Bird): pet is Fish {
//     return (pet as Fish).swim !== undefined;
// }

// function getPet(): Fish | Bird {
//     return { swim: () => { console.log("I am a fish") } };
//     // return { fly: () => { console.log("I am a bird") } };
// }

// let pet = getPet();

// if (isFish(pet)) {
//     pet.swim();
// } else {
//     pet.fly();
// }
