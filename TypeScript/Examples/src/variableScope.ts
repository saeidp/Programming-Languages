// //----------------- local variable is different than global
// // Initialize a global variable
// var species = "human";

// function transform() {
//   // Initialize a local, function-scoped variable
//   var species = "werewolf";
//   console.log(species);
// }

// // Log the global and local variable
// console.log(species); // human
// transform(); //werewolf
// console.log(species);// human

// -----------------------------
// the new keywords let and const, however, are block-scoped.
// this means that a new, local scope is created from any kind of block,
// including function blocks, if statements, and for and while loops.
// var fullMoon = true;
// // initialize a global variable
// let species = "human";

// if (fullMoon) {
//   // initialize a block-scoped variable
//   let species = "werewolf";
//   console.log(`It is a full moon. Lupin is currently a ${species}.`); //warewolf
// }

// console.log(`It is not a full moon. Lupin is currently a ${species}.`); //human
// // in above var will overwrite the global if uou use the var instead of let
