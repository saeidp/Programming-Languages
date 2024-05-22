export { }
// // --------------------------defining class--------------------
// // initializing a class definition
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// let greeter = new Greeter("world");
// console.log(greeter.greet());
// // -----------------------------------------Inheritance-------------------------
// class Animal {
//     move(distanceInMeters: number = 0) {
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Woof! Woof!");
//     }
// }

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

// // ---------------------------------------More classes-----------------
// class Hero {
//     name: string;
//     level: number;
//     constructor(name: string, level: number) {
//         this.name = name;
//         this.level = level;
//     }

//     // adding a method to the constructor
//     greet() {
//         return `${this.name} says hello.`;
//     }
// }

// const hero = new Hero("saeid", 5);
// console.log(hero.greet());

// // creating a new class from the parent
// class Mage extends Hero {
//     spell: string;
//     constructor(name: string, level: number, spell: string) {
//         // chain constructor with super
//         super(name, level);

//         // add a new property
//         this.spell = spell;
//     }
// }

//  ---------------------------------------------------- a class to extends another class and implement an interface --------------------
interface IMemoryData {
    get(id: string): string;
    set(id: string, value: string): void;
}

interface IPersistentData {
    save(): string;
    load(state: string): void;
}

class MemoryData implements IMemoryData {
    protected data: { [key: string]: string } = {};
    // or protected data: Record<string, string> = {};
    get(id: string): string {
        return this.data[id];
    }
    set(id: string, value: string): void {
        this.data[id] = value;
    }
}

class PersistentData extends MemoryData implements IPersistentData {
    save(): string {
        return JSON.stringify(this.data)
    }
    load(state: string): void {
        this.data = JSON.parse(state)
        // load data
    }
}

const persistentData = new PersistentData();

persistentData.set("name", "John");
console.log(persistentData.get("name"));

const savedString = persistentData.save();

persistentData.set("name", "Smith");
console.log(persistentData.get("name"));


const persistentData2 = new PersistentData();
persistentData2.load(savedString);
console.log(persistentData2.get("name"));
// or if the data is not protected
// console.log(persistentData2.data["name"]);

// Extra property to add
persistentData.set("age", "10");
console.log(persistentData.get("age"));
// output:
// {name: 'Smith', age: '10'}


