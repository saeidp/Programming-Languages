// // Assign the five oceans
// let oceans = ["Pacific", "Atlantic", "Indian", "Arctic", "Antarctic"];
// // Print out the first item of the oceans array
// console.log(oceans[0]);

// // ----------------Creating an Array----------------
// // Initialize array of shark species with array literal
// let sharks = ["Hammerhead", "Great White", "Tiger"];
// // Initialize array of shark species with array constructor
// let sharks = new Array("Hammerhead", "Great White", "Tiger");

// // ----------------Indexing Arrays----------------
// let seaCreatures = ["octopus", "squid", "shark", "seahorse", "starfish"];
// seaCreatures.length; // 5
// seaCreatures.indexOf("seahorse"); // 3
// seaCreatures.indexOf("cuttlefish"); // -1

// // ----------------Accessing Items in an Array----------------
// let nestedArray = [["salmon", "halibut"], ["coral", "reef"]];

// nestedArray[1][0]; // coral

// // ----------------Adding an Item to an Array----------------
// let seaCreatures = ["octopus", "squid", "shark", "seahorse", "starfish"];
// seaCreatures[5] = "whale";
// console.log(seaCreatures);

// // Append lobster to the end of the seaCreatures array
// seaCreatures.push("lobster");
// seaCreatures; // end of array

// Append dragonfish to the beginning of the seaCreatures array
// seaCreatures.unshift("dragonfish");
// seaCreatures; // start of array

// // ----------------Removing an Item from an Array----------------
// // splice 1st parameter = index, 2nd is number of elements to remove
// let seaCreatures = [
//   "dragonfish",
//   "octopus",
//   "squid",
//   "shark",
//   "seahorse",
//   "starfish",
//   "whale",
//   ,
//   "pufferfish",
//   "lobster"
// ];
// seaCreatures.splice(7, 1); // removes [7]
// console.log(seaCreatures);

//The pop() method will remove the last item in an array.
// Remove the last item from the seaCreatures array
// seaCreatures.pop();

// seaCreatures;

// // ---------------Looping Through an Array------------
// // Create an array of shellfish species
// let shellfish = ["oyster", "shrimp", "clam", "mussel"];
// // Loop through the length of the array
// // for (let i = 0; i < shellfish.length; i++) {
// //   console.log(i, shellfish[i]);
// // }
// for (let a of shellfish) {
//   console.log(a);
// }
// // ----------------forEach()------------
// let fish = [ "piranha", "barracuda", "cod", "eel" ];
// // Print out each item in the array
// fish.forEach(individualFish => {
//   console.log(individualFish);
// })

// // --------------isArray()---------------
// let fish = ["piranha", "barracuda", "koi", "eel"];

// // Test if fish variable is an array
// Array.isArray(fish); // true

// --------------reverse()---------------
// let fish = ["piranha", "barracuda", "koi", "eel"];
// [ 'eel', 'koi', 'barracuda', 'piranha' ]

// --------------fill()---------------
// let fish = ["piranha", "barracuda", "koi", "eel"];
// // Replace all values in the array with "shark"
// fish.fill("shark");

// fish; // [ 'shark', 'shark', 'shark', 'shark' ]
// fish.fill("shark", 1); // > [ 'piranha', 'shark', 'shark', 'shark' ]
// fish.fill("shark", 1, 3); // > [ 'piranha', 'shark', 'shark', 'eel' ]

// // --------------sort()--------------
// // The sort() method sorts the elements in an array based on the first character
// let fish = ["piranha", "barracuda", "koi", "eel"];

// // Sort items in array
// fish.sort();

// fish; // [ 'barracuda', 'eel', 'koi', 'piranha' ]

// sort() will not sort an array of numbers by size by default. Instead, it will only check the first character in the number.
// let numbers = [42, 23, 16, 15, 4, 8];

// numbers.sort(); // [ 15, 16, 23, 4, 42, 8 ]

// // Function to sort numbers by size
// const sortNumerically = (a, b) => {
//   return a - b;
// };

// numbers.sort(sortNumerically); // [ 4, 8, 15, 16, 23, 42 ]

// //  --------------concat()-------------
// // The concat() method merges two or more arrays together to form a new array.
// // Create arrays of monovalves and bivalves
// let monovalves = ["abalone", "conch"];
// let bivalves = ["oyster", "mussel", "clam"];

// // Concatenate them together into shellfish variable
// let shellfish = monovalves.concat(bivalves);
// //[ 'abalone', 'conch', 'oyster', 'mussel', 'clam' ]

// //  --------------join()-------------
// let fish = ["piranha", "barracuda", "koi", "eel"];
// // Join the elements of an array into a string
// let fishString = fish.join();
// fishString; // 'piranha,barracuda,koi,eel'

// // Join the elements of an array into a string
// let fishString = fish.join(", ");
// fishString; //'piranha, barracuda, koi, eel'

// //  --------------slice()-------------
// let fish = ["piranha", "barracuda", "koi", "eel"];
// // Slice a new array from 2 to 5
// let fishWithShortNames = fish.slice(2, 4);
// fishWithShortNames; // [ 'koi', 'eel' ]

// // Slice a new array from 2 to the end of the array
// let fishWithShortNames = fish.slice(2);
// fishWithShortNames; // [ 'koi', 'eel' ]

// //  --------------indexOf()-------------
// let fish = ["piranha", "barracuda", "koi", "barracuda"];
// // Find the first instance of an element
// fish.indexOf("barracuda"); // 1

// //  --------------lastIndexOf()-------------
// let fish = ["piranha", "barracuda", "koi", "barracuda"];

// // Find the last instance of an element
// fish.lastIndexOf("barracuda"); // 3

// //  --------------map()-------------
// // The map() method creates a new array with the results of a function call on each element in the array.
// let fish = ["piranha", "barracuda", "cod", "eel"];

// // Print out each item in the array
// let printFish = fish.map(individualFish => {
//   console.log(individualFish);
// });

// printFish;
// // Pluralize all items in the fish array
// let pluralFish = fish.map(individualFish => {
//   return `${individualFish}s`;
// });

// pluralFish; // ["piranhas", "barracudas", "cods", "eels"];

// //  --------------filter()-------------
// // The filter() method creates a new array with the elements that pass the result of a given test.

// let seaCreatures = ["shark", "whale", "squid", "starfish", "narwhal"];

// // Filter all creatures that start with "s" into a new list
// let filteredList = seaCreatures.filter(creature => {
//   return creature[0] === "s";
// });

// filteredList; // [ 'shark', 'squid', 'starfish' ]

// //  --------------reduce()-------------
// // The reduce() method will reduce an array to a single value.
// let numbers = [42, 23, 16, 15, 4, 8];

// // Get the sum of all numerical values
// let sum = numbers.reduce((a, b) => {
//   return a + b;
// });

// console.log(sum); // 108

// //  --------------find()-------------
// // The find() method returns the first value in an array that passes a given test.
// let seaCreatures = ["whale", "octopus", "shark", "cuttlefish", "flounder"];
// // Check if a given value is a cephalopod
// const isCephalopod = cephalopod => {
//   return ["cuttlefish", "octopus"].includes(cephalopod);
// };
// seaCreatures.find(isCephalopod); // octopus

// // simplified version:
// let seaCreatures = ["whale", "octopus", "shark", "cuttlefish", "flounder"];
// let result = seaCreatures.find(seaCreature => {
//   return seaCreature.includes("flounder") || seaCreature.includes("cuttlefish");
// });
// console.log(result);

// --------------findIndex()---------------
let seaCreatures = ["whale", "octopus", "shark", "cuttlefish", "flounder"];
// Check if a given value is a cephalopod
const isCephalopod = cephalopod => {
  return ["cuttlefish", "octopus"].includes(cephalopod);
};
seaCreatures.findIndex(isCephalopod); // 1

const isThereAnEel = eel => {
  return ["eel"].includes(eel);
};
seaCreatures.findIndex; // -1
