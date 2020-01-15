// // Initialize greeting function
// function greet() {
//   console.log("Hello, World!");
// }
// // Invoke the function
// greet();

// ----------------Function Parameters------------
// Initialize custom greeting function
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("saeid");

// ----------------Returning Values------------
// Initialize add function
function add(x, y) {
  return x + y;
}
// Invoke function to find the sum
let results = add(9, 7); // 16
console.log(results);

// ----------------Function Expressions------------
// Assign add function to sum constant
const sum = function(x, y) {
  return x + y;
};

// Invoke function to find the sum
sum(20, 5); // 25

// ----------------Arrow Functions------------
// Define multiply function
const multiply = (x, y) => {
  return x * y;
};

// Invoke function to find product
multiply(30, 4); // 120

// Define square function
const square = x => x * x;

// Invoke function to find product
square(10); // 100

