// ------------------------------------ basic generics ----------------------------
// const score: Array<number> = []
// const names: Array<string> = []

// function identityOne(val: boolean | number): boolean | number {
//     return val
// }

// function identityTwo(val: any): any {
//     return val
// }

// function identityThree<Type>(val: Type): Type {
//     return val
// }

// // identityThree(true)

// function identityFour<T>(val: T): T {
//     return val
// }

// interface Bootle {
//     brand: string,
//     type: number
// }

// // identityFour<Bootle>({})

// function getSearchProducts<T>(products: T[]): T {
//     // do some database operations
//     const myIndex = 3
//     return products[myIndex]
// }


// const getMoreSearchProducts = <T,>(products: T[]): T => {
//     //do some database operations
//     const myIndex = 4
//     return products[myIndex]
// }

// interface Database {
//     connection: string,
//     username: string,
//     password: string
// }

// function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
//     return {
//         valOne,
//         valTwo
//     }
// }

// // Argument of type '{}' is not assignable to parameter of type 'Database'.
// anotherFunction(3, {})

// const db: Database = {
//     connection: "qq",
//     username:"qq",
//     password: "qq"
// }
// anotherFunction(3, db)

// interface Quiz {
//     name: string,
//     type: string
// }

// interface Course {
//     name: string,
//     author: string,
//     subject: string
// }

// class Sellable<T>{
//     public cart: T[] = []

//     addToCart(product: T) {
//         this.cart.push(product)
//     }
// }

// ------------------------------------ Generic function -------------------------
// function getFirstElement<T>(arr: T[]): T | undefined {
//     return arr[0]
// }

// let numbers = [1, 2, 3];
// let firstNumber = getFirstElement(numbers); // inferred as number
// let strings = ["apple", "banana", "cherry"];
// let firstString = getFirstElement(strings); // inferred as string

// ----------------------------------------- Generic Interface -------------------
// interface Pair<k, V> {
//     key: k;
//     value: V;
// }

// let numberStringPair: Pair<number, string> = { key: 1, value: "one" };
// let stringNnumberPair: Pair<string, Date> = { key: "today", value: new Date() };

// -------------------------------------------- Generic Class --------------------------
// class Box<T> {
//     contents: T;
//     constructor(value: T) {
//         this.contents = value;
//     }
// }

// let numberBox = new Box(10); // Box<number>
// let stringBox = new Box("Hello World"); // Box<string>

// -------------------------------------------------- Constraints in Generics ---------------------
// // Resticting the type that can be used
// function mergerObject<T extends object, U extends object>(obj1: T, obj2: U): T & U {
//     return { ...obj1, ...obj2 };
// }

// let result = mergerObject({ name: "Alice" }, { age: 25 }); // {name: string, age: number}

// console.log(result); // {name: 'Alice', age: 25}

// --------------------------------------------------- Generic Utility Types --------------------
// // Using built-in generic utility types like Partial or Readonly.
// interface UserProfile {
//     name: string;
//     age: number;
// }

// // All properties of UserProfile will become optional
// let partialProfile: Partial<UserProfile> = { name: "Alice" };

// // All properties of UserProfile will become readonly
// let readonlyProfile: Readonly<UserProfile> = { name: "Bob", age: 30 };
// // readonlyProfile.name = "Charlie"; // Error: Cannot assign to 'name' because it is a read-only property
