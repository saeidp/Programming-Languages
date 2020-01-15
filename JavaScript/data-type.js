//-------------------converting values to strings-----------------
String(true); // "true"
String(49); // "49"
let odyssey = 2001;
console.log(typeof odyssey); // number
let blows = 400;
blows.toString(); // "400"

//-------------------Converting Values to Numbers-----------------
Number("1984"); // 1984
Number(" "); // returns 0
Number(""); // returns 0
Number("twelve"); // returns NaN
Number("20,000"); // returns NaN
Number("2 3"); // returns NaN
Number("11-11-11"); // returns NaN
Number(false); // returns 0
Number(true); // returns 1

//-------------------Converting Values to Booleans-----------------
Boolean(0); // returns false
Boolean(""); // returns false
Boolean(undefined); // returns false
Boolean(NaN); // returns false
Boolean(null); // returns false
Boolean(2000); // returns true
Boolean(" "); // returns true
Boolean("Maniacs"); // returns true
Boolean("0"); // returns true
