// adding export makes it a module and prevent main.ts from creating exception
// file should be module not a script with global scope
export { };
let message = "Welcome back";
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = "codevolution";

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "vishaws";

let sentence: string = `my name is ${name} I am a beginner in TypeScript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuple
let person1: [string, number] = ["chris", 22];

// all start with 0 but if assign 5 then next will be added 1
enum Color {
  Red = 5,
  Green,
  Blue
}
let c: Color = Color.Green;
console.log(c); // 6

// If unsure use any then no safty check
let randomValue: any = 10;
randomValue = true;
randomValue = "Vishaws";

let myVariable: any = 10;
//console.log(myVariable.name);
//myVariable();
//myVariable.toUpperCase();

// check if object has property name
function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

// Unknown then you can not assign anything to that unless use type check
let myVariable1: unknown = 10;
if (hasName(myVariable1)) {
  console.log(myVariable1.name);
}
//(myVariable1 as string).toLowerCase(); //it works if it is string

// type inference
let a;
a = 10;
a = true;

// infered from b
let b = 20;
// error
//b=true

// Union Type
let multiType: number | boolean;
multiType = 20;
multiType = true;

// Functions
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(5, 10);
//add(5,'10'); // error

// Optional parameters and required ones
function add1(num1: number, num2?: number): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }

  return num1 + num2;
}
add1(5); // Optionals should be the last parameters

// Default parameters
function add2(num1: number, num2: number = 10): number {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }

  return num1 + num2;
}

add2(5); //15 will be back

// Interfaces
// The old way limited flexibility suppose if we have 100 of properties
function fullName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
  firstName: "Bruce",
  lastName: "Wayne"
};

fullName(p);

// Solution is to use interface
interface Person {
  firstName: string;
  lastName: string;
  //lastName?:string // it is optional
}

function fullName1(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}
let p1 = {
  firstName: "Bruce",
  lastName: "Wayne"
};

// Classes
class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let employee1 = new Employee("Vishwas");
console.log(employee1.employeeName);
employee1.greet();

//inheritance

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log("Manager delegateing tasks");
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//Access Modifiers
// by default each properties are public
class Employee2 {
  //public employeeName: string;
  private employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

class Manager2 extends Employee2 {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log("Manager delegateing tasks");
  }
}

let emp2 = new Employee2("saeid");
//console.log(emp2.employee); if employeeNmae is private the you can not accesss it

// Derive class can use protected
class Employee3 {
  //public employeeName: string;
  protected employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

class Manager3 extends Employee3 {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    // derive class can still sees the base class protected properties
    console.log(`Manager delegateing tasks  ${this.employeeName}`);
  }
}
