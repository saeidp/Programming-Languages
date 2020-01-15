// // ---------------Creating an Object-----------------
// // Initialize object literal with curly brackets
// const objectLiteral = {};
// // Initialize object constructor with new Object
// const objectConstructor = new Object();

// // Initialize gimli object
// const gimli = {
//   name: "Gimli",
//   race: "dwarf",
//   weapon: "axe",
//   greet: function() {
//     return `Hi, my name is ${this.name}!`;
//   }
// };

// ---------------Properties and Methods-----------------
// Objects can have properties and methods.

// // ---------------Accessing Object Properties-----------------
// // Dot notation: .
// // Bracket notation: []

// const gimli = {
//   name: "Gimli",
//   race: "dwarf",
//   weapon: "axe",
//   greet: function() {
//     return `Hi, my name is ${this.name}!`;
//   }
// };
// // Retrieve the value of the weapon property
// gimli.weapon; // "axe"
// gimli["weapon"]; // "axe"

// // ---------------Adding and Modifying Object Properties-----------------
// // Add new age property to gimli
// gimli.age = 139;
// gimli.age; // 139

// // Add new fight method to gimli
// gimli.fight = function() {
//   return `Gimli attacks with an ${this.weapon}.`;
// };
// gimli.fight(); // "Gimli attacks with an axe."
// // ---------------Removing Object Properties-----------------
// // Remove weapon from gimli
// delete gimli.weapon;

// // ---------------Looping Through Object Properties-----------------
// const gimli = {
//   name: "Gimli",
//   race: "dwarf",
//   weapon: "battle axe"
// };

// // Iterate through properties of gimli
// for (let key in gimli) {
//   console.log(gimli[key]);
// }

// // Initialize method on gimli object to return property keys
// const arr = Object.keys(gimli);
// console.log(arr);

// // --------------object-create------------------
// // The Object.create() method is used to create
// // a new object and link it to the prototype of an existing
// // object.
// // Initialize an object with properties and methods
// const job = {
//   position: "cashier",
//   type: "hourly",
//   isAvailable: true,
//   showDetails() {
//     const accepting = this.isAvailable
//       ? "is accepting applications"
//       : "is not currently accepting applications";

//     console.log(
//       `The ${this.position} position is ${this.type} and ${accepting}.`
//     );
//   }
// };

// // Use Object.create to pass properties
// const barista = Object.create(job);

// barista.position = "barista";
// barista.showDetails();

// // ---------------Object.keys()----------------
// // Object.keys() creates an array containing the keys of an object.
// // Initialize an object
// const employees = {
//   boss: "Michael",
//   secretary: "Pam",
//   sales: "Jim",
//   accountant: "Oscar"
// };

// // Get the keys of the object
// const keys = Object.keys(employees);

// console.log(keys);
// // ["boss", "secretary", "sales", "accountant"]
// // Iterate through the keys
// Object.keys(employees).forEach(key => {
//   let value = employees[key];

//   console.log(`${key}: ${value}`);
// });
// // output:
// // boss: Michael
// // secretary: Pam
// // sales: Jim
// // accountant: Oscar

// // Get the length of the keys
// const length = Object.keys(employees).length;

// console.log(length); // 4

// //--------------Object.values()------------------
// // Initialize an object
// const session = {
//   id: 1,
//   time: `26-July-2018`,
//   device: "mobile",
//   browser: "Chrome"
// };

// // Get all values of the object
// const values = Object.values(session);

// console.log(values); // [1, "26-July-2018", "mobile", "Chrome"]
// // Object.keys() and Object.values() allow you to return the data from an object.

// // --------------Object.entries()--------------
// // Initialize an object
// const operatingSystem = {
//   name: "Ubuntu",
//   version: 18.04,
//   license: "Open Source"
// };

// // Get the object key/value pairs
// const entries = Object.entries(operatingSystem);

// console.log(entries);
// [["name", "Ubuntu"][("version", 18.04)][("license", "Open Source")]];

// // Loop through the results
// entries.forEach(entry => {
//   let key = entry[0];
//   let value = entry[1];

//   console.log(`${key}: ${value}`);
// });
// // name: Ubuntu
// // version: 18.04
// // license: Open Source

// //--------------Object.assign()---------------
// // We can create two objects, and merge them with Object.assign().
// // Initialize an object
// const name = {
//   firstName: "Philip",
//   lastName: "Fry"
// };

// // Initialize another object
// const details = {
//   job: "Delivery Boy",
//   employer: "Planet Express"
// };

// // Merge the objects
// const character = Object.assign(name, details);

// console.log(character);
// // {firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}

// //---------------...spread-operator-----------------
// // Initialize an object
// const name = {
//   firstName: "Philip",
//   lastName: "Fry"
// };

// // Initialize another object
// const details = {
//   job: "Delivery Boy",
//   employer: "Planet Express"
// };

// // Merge the object with the spread operator
// const character = { ...name, ...details };

// console.log(character);

// --------------Object.freeze()-----------------
//Object.freeze() prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.
// Initialize an object
const user = {
  username: "AzureDiamond",
  password: "hunter2"
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = "*******";
newUser.active = true;

console.log(newUser);
//{username: "AzureDiamond", password: "hunter2"}

// ----------Object.seal()-------------------
// Initialize an object
const user = {
  username: "AzureDiamond",
  password: "hunter2"
};

// Seal the object
const newUser = Object.seal(user);

newUser.password = "*******";
newUser.active = true;

console.log(newUser);
//{username: "AzureDiamond", password: "*******"}
