// // ------------delete property---------------------
// const gimli = {
//   name: "Gimli",
//   race: "dwarf",
//   weapon: "axe",
//   greet: function() {
//     return `Hi, my name is ${this.name}!`;
//   }
// };
// console.log(gimli);
// delete gimli.weapon;
// console.log(gimli);

//
// // ------------------------------Create--------------------
// // the Object.create() method is used to create a new object and link it to the prototype of an existing object.
// // initialize an object with properties and methods
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

// // use Object.create to pass properties
// const barista = Object.create(job);

// barista.position = "barista";
// barista.showDetails();

// // -------------------------------object.keys--------------------------
// // initialize an object
// const employees = {
//   boss: "Michael",
//   secretary: "Pam",
//   sales: "Jim",
//   accountant: "Oscar"
// };
// // get the keys of the object
// const keys = Object.keys(employees);
// console.log(keys); // ["boss", "secretary", "sales", "accountant"]

// // iterate through the keys
// object.keys(employees).forEach(key => {
//   let value = employees[key];

//   console.log(`${key}: ${value}`);
// });

// // ------------------------------object.values------------------------
// // initialize an object
// const session = {
//   id: 1,
//   time: `26-July-2018`,
//   device: "mobile",
//   browser: "Chrome"
// };
// // get all values of the object
// const values = Object.values(session);
// console.log(values); // [1, "26-July-2018", "mobile", "Chrome"]

// // ------------------------------onject.entities-------------------
// // creates a nested array of the key/value pairs of an object.
// // initialize an object
// const operatingSystem = {
//   name: "Ubuntu",
//   version: 18.04,
//   license: "Open Source"
// };
// // get the object key/value pairs
// const entries = Object.entries(operatingSystem);
// console.log(entries);
// // [
// //   ["name", "Ubuntu"]
// //   ["version", 18.04]
// //   ["license", "Open Source"]
// // ]

// // Loop through the results
// entries.forEach(entry => {
//   let key = entry[0];
//   let value = entry[1];

//   console.log(`${key}: ${value}`);
// });
// // name: Ubuntu
// // version: 18.04
// // license: Open Source

// -----------------------------------object.assign-----------------
// object.assign() is used to copy values from one object to another.
// initialize an object
// const name = {
//   firstName: "Philip",
//   lastName: "Fry"
// };

// // initialize another object
// const details = {
//   job: "Delivery Boy",
//   employer: "Planet Express"
// };

// // merge the objects
// const character = Object.assign(name, details);

// console.log(character); //{firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}

// initialize an object
const name = {
  firstName: "Philip",
  lastName: "Fry"
};

// initialize another object
const details = {
  job: "Delivery Boy",
  employer: "Planet Express"
};

// merge the object with the spread operator
const character = { ...name, ...details };

console.log(character); // {firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}

// // -----------------------------------object.freez()------------------------
// // object.freeze() prevents modification to properties and values of an object,
// // and prevents properties from being added or removed from an object.
// // initialize an object
// const user = {
//   username: "AzureDiamond",
//   password: "hunter2"
// };

// // freeze the object
// const newUser = Object.freeze(user);

// newUser.password = "*******";
// newUser.active = true;

// console.log(newUser); //{username: "AzureDiamond", password: "hunter2"}
// //Object.isFrozen() is available to determine whether an object has been frozen or not, and returns a Boolean.
// ------------------------------------object.seal()----------------------
// object.seal() prevents new properties from being added to an object, but allows the modification of existing properties.
// initialize an object
const user = {
  username: "AzureDiamond",
  password: "hunter2"
};

// seal the object
const newUser = Object.seal(user);
newUser.password = "*******";
newUser.active = true;
console.log(newUser); // {username: "AzureDiamond", password: "*******"}

// -----------------------------object.getPrtotypeOf()-------------------
// object.getPrototypeOf() is used to get the internal hidden [[Prototype]]
// of an object, also accessible through the __proto__ property.
const employees = ["Ron", "April", "Andy", "Leslie"];
Object.getPrototypeOf(employees); // [constructor: ƒ, concat: ƒ, find: ƒ, findIndex: ƒ, pop: ƒ, …]
// we can see in the output that the prototype of the employees array has access to pop, find, and other Array prototype methods
Object.getPrototypeOf(employees) === Array.prototype; // true
