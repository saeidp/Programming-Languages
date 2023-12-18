export { }
type Person = {
    name: string;
    age: number;
}

const person: Person = {
    name: "Alice",
    age: 30
}

const jsonString = JSON.stringify(person);

console.log(jsonString)
