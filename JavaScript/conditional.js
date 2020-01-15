// -------------Else if Statement---------------
// Set the current grade of the student
let grade = 87;

// Check if grade is an A, B, C, D, or F
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else {
  console.log("F");
} // output B

// -------------Ternary Operator---------------
// Set age of user
let age = 20;

// Place result of ternary operation in a variable
const oldEnough = age >= 21 ? "You may enter." : "You may not enter.";

// Print output
oldEnough; // 'You may not enter.'
