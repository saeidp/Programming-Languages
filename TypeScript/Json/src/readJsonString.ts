const jsonString = `[
    { "name": "Alice", "age": 30 },
    { "name": "Bob", "age": 25 }
]`;

// Parse the JSON string into an object
const people = JSON.parse(jsonString);

// Now `people` is an array of objects
console.log(people);