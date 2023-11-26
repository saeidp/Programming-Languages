// --------------- Value to string-------------
// let s = String(true);
// // "true"
// console.log(s);
// s = String(40);
// // "40"
// console.log(s);

// // we can use n.toString() in a similar way. We can replace n with a variable:
// let blows = 400;
// console.log(blows.toString());

// ---------------------- value to number----------------
// let dalmatians = "101";
// let dalmatiansNumber = Number(dalmatians);
// console.log(dalmatiansNumber);

// Number(" "); // returns 0
// Number(""); // returns 0

// Number("twelve"); // returns NaN
// Number("20,000"); // returns NaN
// Number("2 3"); // returns NaN
// Number("11-11-11"); // returns NaN

// -----------------------value to boolean--------------------
// Boolean(0); // returns false
// Boolean(""); // returns false
// Boolean(undefined); // returns false
// Boolean(NaN); // returns false
// Boolean(null); // returns false

// Boolean(2000); // returns true
// Boolean(" "); // returns true
// Boolean("Maniacs"); // returns true
