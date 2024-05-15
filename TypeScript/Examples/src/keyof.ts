// --------------------------------------------------- Keyof ------------------------------------
// keyof makes sure that the key exists in the object
function hold<DataType, KeyType extends keyof DataType>(
    items: DataType[],
    key: KeyType
): DataType[KeyType][] {
    return items.map((item) => item[key]);
}

const persons = [
    { name: "John", age: 10 },
    { name: "Smith", age: 20 },
];

console.log(hold(persons, "age"));
console.log(hold(persons, "name"));
// output:
// [10, 20]
// ['John', 'Smith']
