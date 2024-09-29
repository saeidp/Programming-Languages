export { }

// -------------------------------------------- Creating Tuples -------------------------------
// // Defining a tuple
// let person: [string, number];

// // Initializing the tuple
// person = ["Alice", 25]; // OK

// // Accessing tuple elements
// console.log(person[0]); // Output: Alice
// console.log(person[1]); // Output: 25

// // Trying to assign values of incorrect types will cause an error
// // person = [25, "Alice"]; // Error: Type 'number' is not assignable to type 'string'

// -----------------------------------------Tuple Types ---------------------------------------
// let tuple: [string, number, boolean];
// tuple = ["Hello", 42, true]; // OK
// // tuple = ["Hello", "World", true]; // Error: Type 'string' is not assignable to type 'number'

// ------------------------------------------using tuples ---------------------------
// // Function returning a tuple
// function getPerson(): [string, number] {
//     return ["Alice", 25];
// }

// let person = getPerson();
// console.log(person); // Output: ["Alice", 25]

// // Function with tuple parameters
// function printPerson(person: [string, number]) {
//     console.log(`Name: ${person[0]}, Age: ${person[1]}`);
// }

// printPerson(["Bob", 30]); // Output: Name: Bob, Age: 30

// -------------------------------------------------- Tuple Operations -------------------------------
// let tuple: [string, number] = ["Alice", 25];

// // Destructuring tuples
// let [name, age] = tuple;
// console.log(name); // Output: Alice
// console.log(age); // Output: 25

// // Pushing new elements (but not recommended as it breaks the fixed size nature)
// tuple.push(30);
// console.log(tuple); // Output: ["Alice", 25, 30]

// // Using tuples with spread operator
// let anotherTuple: [boolean, ...typeof tuple] = [true, ...tuple];
// console.log(anotherTuple); // Output: [true, "Alice", 25, 30]

// -------------------------------- Optional Tuple Elements ----------------------------
// let tuple: [string, number, boolean?];
// tuple = ["Alice", 25]; // OK
// tuple = ["Bob", 30, true]; // OK

// ----------------------------------------- Rest Elements in Tuples ----------------------
// type StringNumberBooleans = [string, number, ...boolean[]];

// let example1: StringNumberBooleans = ["Alice", 25];
// let example2: StringNumberBooleans = ["Bob", 30, true, false, true];

// console.log(example1); // Output: ["Alice", 25]
// console.log(example2); // Output: ["Bob", 30, true, false, true]


// ---------------------------------------------------------- Tuples ------------------------------------
// // Tuples are defined as arrays with a fixed number of elements
// type Coordinate = [x: number, y: number];

// function add3DCoordinate(
//     c1: Coordinate,
//     c2: Coordinate
// ): Coordinate {
//     return [c1[0] + c2[0], c1[1] + c2[1]];
// }

// console.log(add3DCoordinate([0, 1], [10, 2]));

// function state(
//     value: string
// ): [() => string, (u: string) => void] {
//     let str: string = value;
//     return [
//         () => str,
//         (u: string) => {
//             str = u;
//         },
//     ];
// }

// const [getter1, setter1] = state("hello");
// const [getter2, setter2] = state("world");
// console.log(getter1());
// console.log(getter2());
// setter1("adios");
// console.log(getter1());
// console.log(getter2());