// // -------------for loop----------------------
// // for (initialization; condition; final expression) {
// //     // code to be executed
// // }

// // Initialize a for statement with 5 iterations
// for (let i = 0; i < 4; i++) {
//   // Print each iteration to the console
//   console.log(i);
// }

// // Declare variable outside the loop
// let i = 0;

// // Initialize the loop
// for (; i < 4; i++) {
//   console.log(i);
// }

// // Declare variable outside the loop
// let i = 0;

// // Omit all statements
// for (;;) {
//   if (i > 3) {
//     break;
//   }
//   console.log(i);
//   i++;
// }
// // -------------Modifying an Array----------------------
// // Initialize empty array
// let arrayExample = [];

// // Initialize loop to run 3 times
// for (let i = 0; i < 3; i++) {
//   // Update array with variable value
//   arrayExample.push(i);
// } // [ 0, 1, 2 ]
// console.log(arrayExample);

// // Declare array with 3 items
// let fish = ["flounder", "salmon", "pike"];

// // -------------Length of an Array----------------------
// // Initalize for loop to run for the total length of an array
// for (let i = 0; i < fish.length; i++) {
//   // Print each item to the console
//   console.log(fish[i]);
// }
// // flounder
// // salmon
// // pike

// // -------------For…In Loop----------------------
// const shark = {
//   species: "great white",
//   color: "white",
//   numberOfTeeth: Infinity
// };
// // Print property names of object
// for (attribute in shark) {
//   console.log(attribute);
// }

// // Print names and values of object properties
// for (attribute in shark) {
//     console.log(`${attribute}`.toUpperCase() + `: ${shark[attribute]}`);
// }
// // SPECIES: great white
// // COLOR: white
// // NUMBEROFTEETH: Infinity

// // -------------For…Of Loop----------------------
// // Initialize array of shark species
// let sharks = ["great white", "tiger", "hammerhead"];

// // Print out each type of shark
// for (let shark of sharks) {
//   console.log(shark);
// }

// // Assign string to a variable
// let sharkString = "sharks";

// // Iterate through each index in the string
// for (let shark of sharkString) {
//   console.log(shark);
// }

