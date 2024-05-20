// ---------------------------------------------------------- readonly interface tuple array -----------------------------
interface Person {
    name: string;
    age: number;
}

function makePerson(name: string, age: number): Readonly<Person> {
    return {
        name,
        age,
    };
}

const person = makePerson("John", 20);
// person.name = "Scott";

function make2DCoordinate(
    x: number,
    y: number

): readonly [number, number] {
    return [x, y];
}

const c1 = make2DCoordinate(5, 10);
// readonly tuple can not be modified
// c1[0] = 50;

const readonlyArray = [1, 2, 3] as const;

// readonly array can not be modified
// readonlyArray[0] = 50;