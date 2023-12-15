// -------------------------------------- Read a json string and save the result -----------------------------------
import { writeFileSync } from 'fs';
import path = require('path');


// Assuming you have a JSON string like the following:
const jsonString = `[
    { "name": "Alice", "age": 30 },
    { "name": "Bob", "age": 25 }
]`;

// Save the JSON string to a file
writeFileSync(path.join(__dirname, '../output/writeJsonString-output.json'), jsonString);