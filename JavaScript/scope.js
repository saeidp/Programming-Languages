// // // -----------------Variable Scope----------------
// // // Initialize a global variable
// // var species = "human";
// // function transform() {
// //   // Initialize a local, function-scoped variable
// //   var species = "werewolf";
// //   console.log(species);
// // }
// // // Log the global and local variable
// // console.log(species);
// // transform();
// // console.log(species);

// var fullMoon = true;
// // Initialize a global variable
// let species = "human";
// if (fullMoon) {
//   // Initialize a block-scoped variable
//   let species = "werewolf";
//   console.log(`It is a full moon. Lupin is currently a ${species}.`);
// }
// console.log(`It is not a full moon. Lupin is currently a ${species}.`);

// //It is a full moon. Lupin is currently a werewolf.
// // It is not a full moon. Lupin is currently a human.

// // Use var to initialize a variable
// var species = "human";
// if (fullMoon) {
//   // Attempt to create a new variable in a block
//   var species = "werewolf";
//   console.log(`It is a full moon. Lupin is currently a ${species}.`);
// }
// console.log(`It is not a full moon. Lupin is currently a ${species}.`);
// // It is a full moon. Lupin is currently a werewolf.
// // It is not a full moon. Lupin is currently a werewolf.

// // -----------------constants----------------
// // Create a CAR object with two properties
// // properties of a const object can be altered
// const CAR = {
//   color: "blue",
//   price: 15000
// };

// // Modify a property of CAR
// CAR.price = 20000;

// console.log(CAR); // { color: 'blue', price: 20000 }

//-----------------scope var vs let ---------------
// if variable is defined by var, in both global
// and inside block, then it gets overwritten.

// const num declared as 20 and stays 20 global,
// but changes to 10 in the block,
// without getting overwritten.

//var num declared as 10, gets overwritten inside
// block to 5 and remains 5 in global.

//Exception function is the scope for var.
// block is the scope for let & const
const num = 20;

function print() {
  var varNum = 10;

  for (let i = 1; i < 3; i++) {
    const num = 10;
    var varNum = 5;
  }
  console.log(varNum);
  console.log(num);
}

print();
