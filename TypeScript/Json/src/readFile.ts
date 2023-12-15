import { readFileSync } from 'fs';
import path = require('path');

// Define a type for the data structure
type Person = {
    name: string;
    age: number;
};

// Read the JSON file
const data = readFileSync(path.join(__dirname, '../src/readFile.json'), 'utf8');
// const data = readFileSync('path/to/yourfile.json', 'utf-8');

// Parse the JSON data
const people: Person[] = JSON.parse(data);

// Iterate over each person and log their details
people.forEach(person => {
    console.log(`${person.name} is ${person.age} years old.`);
});

