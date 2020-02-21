// // the Date object is a built-in object in JavaScript that stores the date and time.
// // it provides a number of built-in methods for formatting and managing that data.
// // set variable to current date and time
// const now = new Date();
// // view the output
// now; // wed Oct 18 2017 12:41:34 GMT+0000 (UTC)
// // ------------------------------timestamp-----------------------
// // javaScript, however, understands the date based on a timestamp
// // derived from Unix time, which is a value consisting of the number
// // of milliseconds that have passed since midnight on January 1st, 1970.
// // get the current timestamp
// now.getTime(); // 1508330494000
// // ----------------------------epoch time----------------------
// // assign the timestamp 0 to a new variable
// const epochTime = new Date(0); // 01 January, 1970 00:00:00 Universal Time (UTC)
// // -------------------------------Formats to create date----------------------
// // we’ll create new Date objects that will represent July 4th, 1776 at 12:30pm GMT
// // in three different ways
// // timestamp method
// new Date(-6106015800000); // anything before 1970 is negative
// // date string method
// new Date("January 31 1980 12:30");
// // date and time method
// new Date(1776, 6, 4, 12, 30, 0, 0);
// // -------------------------------get---------------------------
// // initialize a new birthday instance
// const birthday = new Date(1980, 6, 31);
// birthday.getFullYear(); // 1980
// birthday.getMonth(); // 6
// birthday.getDate(); // 31
// birthday.getDay(); // 4
// birthday.getHours(); // 0
// birthday.getMinutes(); // 0
// birthday.getSeconds(); // 0
// birthday.getMilliseconds(); // 0
// birthday.getTime(); // 333849600000 (for GMT)
// // Get today's date
// const today = new Date();
// // Compare today with October 3rd
// if (today.getDate() === 3 && today.getMonth() === 9) {
//   console.log("It's October 3rd.");
// } else {
//   console.log("It's not October 3rd.");
// }
// -----------------------------set------------------------------------
var birthday = new Date(1980, 6, 31);
birthday.setFullYear(1997); // thu Jul 31 1997 00:00:00 GMT+0000 (UTC)
// // ---------------------------utc-----------------------
// // assign current time to a variable
// const now = new Date();
// // print local and UTC timezones
// console.log(now.getHours());
// console.log(now.getUTCHours());
var epochTime = new Date(0);
console.log(epochTime.getMilliseconds());
