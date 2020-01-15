// const poem = "The Wide Ocean";
// const author = "Pablo Neruda";

// const favePoem = `My favorite poem is ${poem} by ${author}.`;

// console.log(favePoem);

// console.log("We're safely using an apostrophe in single quotes.");
// console.log('Then he said, "Hello, World!"');
// console.log("We're safely using an apostrophe in single quotes.");
// console.log(
//   `We're safely using apostrophes and "quotes" in a template literal.`
// );

// const threeLines =
//   "This is a string\n" + "that spans across\n" + "three lines.";

//-------------------typeof-----------------
// Initializing a new string primitive
const stringPrimitive = "A new string.";
// Initializing a new String object
const stringObject = new String("A new string.");
console.log(typeof stringPrimitive);
console.log(typeof stringObject);

//-------------------accessing characters-----------------
"How are you?"[5]; // r
"How are you?".charAt(5); // r
"How are you?".indexOf("o"); // 1
"How are you?".lastIndexOf("o"); // 9
"How are you?".indexOf("are"); // 4
"How are you?".slice(8, 11); // you (11 is not counted)
"How are you?".slice(8); // you?
"How are you?".toUpperCase(); // HOW ARE YOU?
"How are you?".toLowerCase(); // how are you?

// //-------------------splitting strings-----------------
// const originalString = "How are you?";
// // Split string by whitespace character
// const splitString = originalString.split(" ");
// console.log(splitString); // [ 'How', 'are', 'you?' ]
// splitString[1]; // are

// //-------------------trimming whitespace-----------------
// const tooMuchWhitespace = "     How are you?     ";
// const trimmed = tooMuchWhitespace.trim();
// console.log(trimmed); // 'How are you?'

// //-------------------finding and replacing-----------------
// const originalString = "How are you?";
// // Replace the first instance of "How" with "Where"
// const newString = originalString.replace("How", "Where");
// console.log(newString); // Where are you?

const originalString =
  "Javascript is a programming language. I'm learning javascript.";
// Search string for "javascript" and replace with "JavaScript"
const newString = originalString.replace(/javascript/gi, "JavaScript");
console.log(newString); // JavaScript is a programming language. I'm learning JavaScript.


