// // Basic array
// const superHeros: string[] = []
// // const heroPower: number[] = []
// const heroPower: Array<number> = []

// type User = {
//     name: string
//     isActive: boolean
// }

// const allUsers: User[] = []

// const MLModels: number[][] = [
//     [255, 255, 255],
//     []
// ]


// superHeros.push("spiderman")
// heroPower.push(2)

// allUsers.push({ name: "first", isActive: true })
// allUsers.push({ name: "second", isActive: false })
// console.log(allUsers)

// allUsers.forEach((item) => {
//     console.log(item)
// })


// // if we add an item and accidentally skip an index, it will create an undefined item in the array.
// let seaCreatures = ["octopus", "squid", "shark", "seahorse", "starfish"];
// seaCreatures[5] = "whale";
// seaCreatures[7] = "pufferfish";
// console.log(seaCreatures);

// -----------------------push()-----------------------
// // append lobster to the end of the seaCreatures array
// seaCreatures.push("lobster");
// console.log(seaCreatures);

// // -----------unShift()--------------
// // append dragonfish to the beginning of the seaCreatures array
// seaCreatures.unshift("dragonfish");
// console.log(seaCreatures);

// //------------------ pop()------------
// remove the last item
// seaCreatures.pop();

// // shift remove the first item
// seaCreatures.shift();

// // --------------------------loop through array----------------------------
// // create an array of aquatic mammals
// let mammals = ["dolphin", "whale", "manatee"];

// // loop through each mammal
// for (let mammal of mammals) {
//   console.log(mammal);
// }

// ------------------------ isArray()----------------
// let fish = ["piranha", "barracuda", "koi", "eel"];
// test if fish variable is an array
// console.log(Array.isArray(fish));

// -----------------------------Splice()-------------------------
// splice(index number, number of items to remove, items to add)
// let fish = ["piranha", "barracuda", "koi", "eel"];
// adding: splice a new item number into index position 1
// fish.splice(1, 0, "manta ray"); // 0 means delete nothing (number of items)
// console.log(fish);
// let fish = ["piranha", "barracuda", "koi", "eel"];
// removing items at index 1 and remove 2
// fish.splice(1, 2);
// console.log(fish);

// adding and removing
// let fish = ["piranha", "barracuda", "koi", "eel"];
// fish.splice(1, 2, "manta ray"); // at index 1 remove 2 and add the new name
// console.log(fish);

// // -------------------------slice()---------------------------
// //The slice() method copies a portion of an array to a new array.
// let fish = ["piranha", "barracuda", "koi", "eel"];
// let newArray = fish.slice(0, 3); // it means from index 0 to index 2 not included 3
// console.log(newArray); // [ 'piranha', 'barracuda', 'koi' ]

// let fish = [ "piranha", "barracuda", "koi", "eel" ];
// let fishWithShortNames = fish.slice(2, 4);
// console.log(fishWithShortNames);//[ 'koi', 'eel' ]

// // -----------------------------------------Reverse--------------
// let fish = ["piranha", "barracuda", "koi", "eel"];
// // reverse the fish array
// fish.reverse();
// console.log(fish);

// // --------------fill()-------------------------
// // the fill() method replaces all the elements in an array with a static value.
// let fish = ["piranha", "barracuda", "koi", "eel"];
// // replace all values in the array with "shark"
// fish.fill("shark");
// console.log(fish); //[ 'shark', 'shark', 'shark', 'shark' ]
// fish.fill("shark", 1) // > [ 'piranha', 'shark', 'shark', 'shark' ]
// fish.fill("shark", 1, 3); // > [ 'piranha', 'shark', 'shark', 'eel' ] (1 start, 3 end)

// // ---------------------------sort()-----------------
// // the sort() method sorts the elements in an array based on the first character in the element
// let fish = ["piranha", "barracuda", "koi", "eel"];
// // sort items in array
// fish.sort();
// console.log(fish);

// //sort() will not sort an array of numbers by size by default.
// //Instead, it will only check the first character in the number.
// let numbers = [42, 23, 16, 15, 4, 8];
// numbers.sort(); //[ 15, 16, 23, 4, 42, 8 ]
// // in order to sort numbers
// // Function to sort numbers by size
// const sortNumerically = (a: number, b: number) => {
//     return a - b; // should return -, 0 or + and it means less than or equal or larger
// }
// numbers.sort(sortNumerically);

// // ------------------------concat()----------------------
// // the concat() method merges two or more arrays together to form a new array.
// // create arrays of monovalves and bivalves
// let monovalves = ["abalone", "conch"];
// let bivalves = ["oyster", "mussel", "clam"];
// // concatenate them together into shellfish variable
// let shellfish = monovalves.concat(bivalves);
// console.log(shellfish);

// // ------------------------------join()-----------------------
// // the join() method converts all the elements of an array into a new string.
// let fish = ["piranha", "barracuda", "koi", "eel"];
// let fishString = fish.join();
// console.log(fishString); // 'piranha,barracuda,koi,eel'

// let fishString2 = fish.join(", ");
// console.log(fishString2); //'piranha, barracuda, koi, eel'

// // ----------------------indexOf()-------------------------------
// // the indexOf() method returns the index number of the first instance of an element.
// let fish = ["piranha", "barracuda", "koi", "barracuda"];
// // find the first instance of an element
// console.log(fish.indexOf("barracuda")); // 1

// fish.indexOf("shark"); // -1

// // ---------------------------lastIndexOf()-----------------------
// // the lastIndexOf() method returns the index number of the last instance of an element
// let fish = ["piranha", "barracuda", "koi", "barracuda"];
// // find the last instance of an element
// fish.lastIndexOf("barracuda"); // 3

// // ---------------------- Arrow function---------------------------
// var example = function() {
//   // code to execute
// };
// var example = () => {
//   // code to execute
// };

// var example1 = (parameter1: any): void => {
//   // code to execute
// };

// var sum = function(x: number, y: number): number {
//   return x + y;
// };

// var sum = (x: number, y: number): number => {
//   return x + y;
// }

// // -----------------foreach()----------------------------------
// let fish = ["piranha", "barracuda", "cod", "eel"];
// // print out each item in the array
// fish.forEach(individualFish => {
//   console.log(individualFish);
// });

// // loop through the length of the array
// for (let i = 0; i < fish.length; i++) {
//   console.log(fish[i]);
// }

// // ---------------------map()-----------------------------
// // the map() method creates a new array with the results of a function call on each element in the array.
// let fish = ["piranha", "barracuda", "cod", "eel"];

// // print out each item in the array
// let printFish = fish.map(individualFish => {
//   console.log(individualFish);
// });

// // --------------------------filter()-----------------------
// // the filter() method creates a new array with the elements that pass the result of a given test
// let seaCreatures = ["shark", "whale", "squid", "starfish", "narwhal"];

// // filter all creatures that start with "s" into a new list
// let filteredList = seaCreatures.filter(creature => {
//   return creature[0] === "s";
// });
// console.log(filteredList);

// // -----------------------reduce()--------------------
// // the reduce() method will reduce an array to a single value.
// let numbers = [42, 23, 16, 15, 4, 8];

// // get the sum of all numerical values
// let sum = numbers.reduce((a, b) => {
//   return a + b;
// });
// console.log(sum);

// // -------------------find()-------------------
// // the find() method returns the first value in an array that passes a given test.
// let seaCreatures = ["whale", "octopus", "shark", "cuttlefish", "flounder"];

// let arr = seaCreatures.find(x => {
//   return x.includes("w");
// });
// console.log(arr);
// var data = [20, 18, 15, 10, 9];

// var found = data.find(element => {
//   return element < 12;
// });

// console.log(found);

// // -----------------------------------findIndex---------------------------
// // the findIndex() method returns the first index in an array that passes a given test.
// let seaCreatures = ["whale", "octopus", "shark", "cuttlefish", "flounder"];
// // check if a given value is a cephalopod

// let index = seaCreatures.findIndex(x => {
//   return x.includes("octopus");
// });
// console.log(index);
