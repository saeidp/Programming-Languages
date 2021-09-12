// --------------------------function expression--------------------
// assign add function to sum constant
const sum = function add(x: number, y: number): number {
  return x + y;
};
// invoke function to find the sum
sum(20, 5);

// ----------------------------Arrow function------------------------
// arrow functions are always anonymous functions and a type of function expression
// define multiply function
const multiply = (x: number, y: number): number => {
  return x * y;
};

// invoke function to find product
multiply(30, 4);
