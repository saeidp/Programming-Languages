// // initializing a new string primitive
// const stringPrimitive = "A new string.";
// console.log(typeof stringPrimitive);
// // ----------------------------------------
// // you?
// let str = "How are you?".slice(8, 11);
// console.log(str);

// // 4
// let number = "How are you?".indexOf("are");
// console.log(number);

// // you?
// str = "How are you?".slice(8);
// console.log(str);

// str = "How are you?".toUpperCase();
// console.log(str);

// // ----------------------------------------
// let originalString = "How are you?";
// // split string by whitespace character
// const splitString = originalString.split(" ");
// // [ 'How', 'are', 'you?' ]
// console.log(splitString);

// // ----------------------------------------------
// const tooMuchWhitespace = "     How are you?     ";
// const trimmed = tooMuchWhitespace.trim();
// // how are you?
// console.log(trimmed);

// ----------------------------------------------
// const originalString = "How are you?";
// // replace the first instance of "How" with "Where"
// const newString = originalString.replace("How", "Where");
// // where are you?
// console.log(newString);

// // --------------------------Regular Expression----------------
// // replace all javascript (using g) and ignore case (using i)
// const originalString =
//   "Javascript is a programming language. I'm learning javascript.";
// // search string for "javascript" and replace with "JavaScript"
// const newString = originalString.replace(/javascript/gi, "JavaScript");
// console.log(newString);
