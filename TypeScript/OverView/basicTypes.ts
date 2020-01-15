export {};
// basic types

// boolean
const isLoading: boolean = false;

// number
const decimal: number = 8;
const binary: number = 0b110;

//string
const fruit: string="orange";

//Array
// Most common
let firstFivePrimes: number[] = [2, 3, 5, 7, 11];
// Less common. Uses generic types (more on that later)
let firstFivePrimes2: Array<number> = [2, 3, 5, 7, 11];

// Tuples
let contact: [string, number] = ["john", 95]
//contact = ['Ana', 842903, 'extra argument']  /* Error! 
//Type '[string, number, string]' is not assignable to type '[string, number]'. */

//Any
// any is compatible with any and all types in the type system, 
// meaning that anything can be assigned to it and it can be 
// assigned to anything. It gives you the power to opt-out of type checking.
let variable: any = 'a string';
variable = 5;
variable = false;
variable.someRandomMethod(); /* Okay, 
someRandomMethod might exist at runtime. */

// Void
// void is the absence of having any type at all. It is commonly used as 
// the return type of a function that do not return a value.

function sayMyName(name: string): void {
    console.log(name);
  }
  sayMyName('Heisenberg');


// Never
// The never type represents the type of values that never occur.
// For instance, never is the return type of a function which will
// always throw an exception or not reach its end point.

// throws an exception
function error(message: string): never {
    throw new Error(message);
  }
  // unreachable end point
  function continuousProcess(): never {
    while (true) {
        // ...
    }
  }
  

// Null and Undefined
// Both undefined and null actually have their own types named
// undefinedand null, respectively. Much like void, they’re not
// extremely useful on their own but they become useful when used
// within union types (more on that in a bit)
type someProp = string | null | undefined;

// Unknown
// TypeScript 3.0 introduces the unknown type which is the
// type-safe counterpart of any. Anything is assignable to unknown,
// but unknown isn’t assignable to anything but itself and any.
// No operations are permitted on an unknown without first asserting
// or narrowing to a more specific type.
type I1 = unknown & null;    // null
type I2 = unknown & string;  // string
type U1 = unknown | null;    // unknown
type U2 = unknown | string;  // unknown


// Type Alias
// Type alias provides names for type annotations allowing you to
// use it in several places. They are created using the following syntax:
type Login = string;


// Union Type
// TypeScript allows us to use more than one data type for a property.
// This is called union type.
type Password = string | number;

// Intersection Type
// Intersection types are types that combine properties of all of the member types.
interface Person {
    name: string;
    age: number;
  }
  interface Worker {
    companyId: string;
  }
  type Employee = Person & Worker;
  const bestOfTheMonth: Employee = {
    name: 'Peter',
    age: 39,
    companyId: '123456'
  }

// Inteface
// Interfaces are like a contract between you and the compiler in which you
// specify in a single named annotation exactly what properties to expect with
// its respective type annotations.
// Side-note: Interfaces have zero runtime JS impact, it is used solely for type
// checking.
// • You may declare optional properties marking those with an ?, 
//meaning that objects of the interface may or may not define these properties.
// • You may declare read only properties, meaning that once a property is
// assigned a value, it cannot be changed.
interface ICircle {
    readonly id: string;
    center: {
      x: number,
      y: number
    };
    radius: number;
    color?: string;  // Optional property
  }
    
  const circle1: ICircle = {
    id: '001',
    center: { x: 0 },
    radius: 8,
  };  /* Error! Property 'y' is missing in type '{ x: number; }' 
  but required in type '{ x: number; y: number; }'. */
  
  const circle2: ICircle = {
    id: '002',
    center: { x: 0, y: 0 },
    radius: 8,
  }  // Okay
  circle2.color = '#666';  // Okay
  circle2.id = '003';  /* Error! 
  Cannot assign to 'id' because it is a read-only property. */
  
  // Extending Interfaces
  // Interfaces can extend one or more interfaces. This makes writing
  // interfaces flexible and reusable.
  interface ICircleWithArea extends ICircle {
    getArea: () => number;
  }
  const circle3: ICircleWithArea = {
    id: '003',
    center: { x: 0, y: 0 },
    radius: 6,
    color: '#fff',
    getArea: function () {
      return (this.radius ** 2) * Math.PI;
    },
  };

// Implementing Interface
// A class implementing an interface needs to strictly conform to the
// structure of the interface.
interface IClock {
    currentTime: Date;
    setTime(d: Date): void;
  }
  class Clock implements IClock {
    currentTime: Date = new Date();
    setTime(d: Date) {
      this.currentTime = d;
    }
    constructor(h: number, m: number) { }
  }
  
// Enums
// An enum (or enumeration) is a way to organise a collection of related
// values that can be numeric or string values.
enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
  }
  let card = CardSuit.Clubs;
  card = "not a card suit"; /* Error! Type '"not a card suit"' 
  is not assignable to type 'CardSuit'. */

// generated javascript code
// var CardSuit;
// (function (CardSuit) {
//   CardSuit[CardSuit["Clubs"] = 0] = "Clubs";
//   CardSuit[CardSuit["Diamonds"] = 1] = "Diamonds";
//   CardSuit[CardSuit["Hearts"] = 2] = "Hearts";
//   CardSuit[CardSuit["Spades"] = 3] = "Spades";
// })(CardSuit || (CardSuit = {}));
/**
 * Which results in the following object:
 * {
 *   0: "Clubs",
 *   1: "Diamonds",
 *   2: "Hearts",
 *   3: "Spades",
 *   Clubs: 0,
 *   Diamonds: 1,
 *   Hearts: 2,
 *   Spades: 3
 * }
 */
// initializing with string
enum SocialMedia {
   Facebook = 'FACEBOOK',
   Twitter = 'TWITTER',
   Instagram = 'INSTAGRAM',
   LinkedIn = 'LINKEDIN'
 }

 // Reverse Mapping
const clubsAsNumber: number = CardSuit.Clubs; // 0
const clubsAsString: string = CardSuit[0];    // 'Clubs'


// Functions
function add(x: number, y: number): number {
    return x + y;
  }

  
// Function Overloads
// TypeScript allows you to declare function overloads. Basically, you
// can have multiple functions with the same name but different parameter
// types and return type. Consider the following example:
function padding(a: number, b?: number, c?: number, d?: any) {
    if (b === undefined && c === undefined && d === undefined) {
      b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
      c = a;
      d = b;
    }
    return {
      top: a,
      right: b,
      bottom: c,
      left: d
    };
  }
// The meaning of each parameter changes based on how many parameters are
// passed into the function. Moreover, this function only expects one, two
// or four parameters. To create a function overload, you just declare the
// function header multiple times. The last function header is the one that
// is actually active within the function body but is not available to the
// outside world.
function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);
function padding(a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  }
  else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  };
}
padding(1);       // Okay
padding(1,1);     // Okay
padding(1,1,1,1); // Okay
padding(1,1,1);   /* Error! No overload expects 3 arguments, but
overloads do exist that expect either 2 or 4 arguments. */


// Classes
// You can add types to properties and method’s arguments
class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet(name: string) {
      return `Hi ${name}, ${this.greeting}`;
    }
  }

// Access Modifiers
//Typescript supports public, private, protected modifiers, which determine
// the accessibility of a class member.
//• A public member works the same as plain JavaScript members and is
// the default modifier.
//• A private member cannot be accessed from outside of its containing class.
//• A protected member differ from a private as it can also be accessed
// within deriving classes.

//| Accessible on  | public | protected | private |
//| :------------- | :----: | :-------: | :-----: |
//| class          |   yes  |    yes    |   yes   |
//| class children |   yes  |    yes    |    no   |
//| class instance |   yes  |     no    |    no   |

// Readonly modifier
// A readonly property must be initialised at their declaration or in 
// the constructor.
class Spider {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
      this.name = theName;
    }
  }
  
// Parameters Properties
// Parameter properties lets you create and initialise a member in 
// one place. They are declared by prefixing a constructor parameter 
// with a modifier.

class Spider {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}  

// Abstract
// The abstract keyword can be used both for classes and for abstract
// class methods.
// • Abstract classes cannot be directly instantiated. They are mainly
// for inheritance where the class which extends the abstract class
// must define all the abstract methods.
// • Abstract members do not contain an implementation, thus cannot be
// directly accessed. These members must be implemented in child classes
// (kinda like an interface)


// Type Assertation
// TypeScript allows you to override its inferred types in any way you
// want to. This is used when you have a better understanding of a 
// variable type than the compiler on its own.
const friend = {};
friend.name = 'John';  // Error! Property 'name' does not exist on type '{}'
interface Person {
  name: string;
  age: number;
}
const person = {} as Person;
person.name = 'John';  // Okay
// Type assertion are usually used when migrating code from JavaScript and
// you may know a more accurate type of the variable than what is currently
// assigned. But assertion can be considered harmful.
// Let’s take a look at our Person interface from the previous example. 
// Did you notice something wrong? If you noticed the missing property age,
// congratulations! The compiler might help you providing autocomplete for
// properties of Person but it will not complain if you miss any properties.


// Type Interface
// TypeScript infers types of variables when there is no explicit information
// available in the form of type annotations.
/**
 * Variable definitinon
 */
let a = "some string";
let b = 1;
a = b;  // Error! Type 'number' is not assignable to type 'string'.
// In case of complex objects, TypeScript looks for the most common type
// to infer the type of the object.
const arr = [0, 1, false, true];  // (number | boolean)[]
/**
 * Function return types
 */
function sum(x: number, y: number) {
  return x + y;  // infer to return a number
}


// Type compatibility
// Type compatibility is based on structural typing, which relates
// types based solely on their members.
// The basic rule for structural type is that x is compatible with y
// if y has at least the same members as x.
interface Person {
    name: string;
  }
  let x: Person;  // Okay, despite not being an implementation of the Person interface
  let y = { name: 'John', age: 20 };  // type { name: string; age: number }
  x = y;
  // Please note that x is still of type Person. 
  // In the following example, the compiler will show an error message as it does not
  // expect the property age in Person but the result will be as expected:
  console.log(x.age); // 20
  // As y has a member name: string, it matched the required properties for
  // the Person interface, meaning that x is a subtype of y. Thus, the 
  //assignment is allowed.


  // Functions
// Number of arguments In a function call you need to pass in at least enough
// arguments, meaning that extra arguments will not cause any errors.
function consoleName(person: Person) {
    console.log(person.name);
  }
  consoleName({ name: 'John' });           // Okay
  consoleName({ name: 'John', age: 20 });  // Extra argument still Okay
  // Return type
  // The return type must contain at least enough data.
  let x = () => ({name: 'John'});
  let y = () => ({name: 'John', age: 20 });
  x = y;  // OK
  y = x;  /* Error! Property 'age' is missing in type '{ name: string; }'
  but required in type '{ name: string; age: number; }' */
  

// Type Guard
// Type Guards allow you to narrow down the type of an object within
// a conditional block.
// typeof
// Using typeof in a conditional block, the compiler will know the type
// of a variable to be different. In the following example TypeScript
// understand that outside the conditional block, x might be a boolean
// and the function toFixed cannot be called on it.
function example(x: number | boolean) {
  if (typeof x === 'number') {
    return x.toFixed(2);
  }
  return x.toFixed(2); // Error! Property 'toFixed' does not exist on type 'boolean'.
}



// instanceof
class MyResponse {
    header = 'header example';
    result = 'result example';
    // ...
  }
  class MyError {
    header = 'header example';
    message = 'message example';
    // ...
  }
  function example(x: MyResponse | MyError) {
    if (x instanceof MyResponse) {
      console.log(x.message); // Error! Property 'message' does not exist on type 'MyResponse'.
      console.log(x.result);  // Okay
    } else {
      // TypeScript knows this must be MyError
  console.log(x.message); // Okay
      console.log(x.result);  // Error! Property 'result' does not exist on type 'MyError'.
    }
  }

  
// in
// The in operator checks for the existence of a property on an object.
interface Person {
    name: string;
    age: number;
  }
  const person: Person = {
    name: 'John',
    age: 28,
  };
  const checkForName = 'name' in person; // true

  

// Literal Types
// Literals are exact values that are JavaScript primitives. They can be
// combined in a type union to create useful abstractions.
type Orientation = 'landscape' | 'portrait';
function changeOrientation(x: Orientation) {
  // ...
}
changeOrientation('portrait'); // Okay
changeOrientation('vertical'); /* Error! Argument of type '"vertical"' is not 
assignable to parameter of type 'Orientation'. */



// Conditional Types
// A conditional type describes a type relationship test and selects one
// of two possible types, depending on the outcome of that test.
type X = A extends B ? C : D;
// This means that if type A is assignable to type B, then X is the same
// type as C. Otherwise X is the same as type D;



// Generic Types
// Generic type is a type that must include or reference another type in 
// order to be complete. It enforce meaningful constraints between 
// various variables.
// In the following example a function returns an array of whatever type you
// pass in.
function reverse<T>(items: T[]): T[] {
    return items.reverse();
  }
  reverse([1, 2, 3]); // number[]
  reverse([0, true]); // (number | boolean)[]
  


// keyof
// The keyof operator queries the set of keys for a given type.
interface Person {
    name: string;
    age: number;
  }
  type PersonKeys = keyof Person; // 'name' | 'age'




// Partial
type Partial<T> = {
    [P in keyof T]?: T[P];
  }
//  • The generic Partial type is defined with a single type parameter T.
//  • keyof T represents the union of all property names of T as string
// literal types.
//  • [P in keyof T]?: T[P] denotes that the type of each property P of
// type Tshould be optional and transformed to T[P].
//  • T[P] represents the type of the property P of the type T.


// Readonly
// As we have covered in the Interface section, TypeScript allows you to
// create readonly properties. There is a Readonly type that takes a
// type T and sets all of its properties as readonly.
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };



// Exclude
// Exclude allows you to remove certain types from another type.
// Excludefrom Tanything that is assignable to T.
/**
 * type Exclude<T, U> = T extends U ? never : T;
 */
type User = {
    _id: number;
    name: string;
    email: string;
    created: number;
  };
  type UserNoMeta = Exclude<keyof User, '_id' | 'created'>
  



// Pick
// Pick allows you to pick certain types from another type.
// Pick from Tanything that is assignable to T.
/**
 * type Pick<T, K extends keyof T> = {
 *   [P in K]: T[P];
 *  };
 */
type UserNoMeta = Pick<User, 'name' | 'email'>




// infer
// You can use the infer keyword to infer a type variable within
// the extendsclause of a conditional type. Such inferred type
// variable can only be used in the true branch of the conditional type.

// Return Type
// Gets the return type of a function.
/**
 * Original TypeScript's ReturnType
 * type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
 */
type MyReturnType<T> = T extends (...args: any) => infer R ? R : any;
type TypeFromInfer = MyReturnType<() => number>;  // number
type TypeFromFallback = MyReturnType<string>;     // any

// Let’s break down MyReturnType:
// • The return type of T is …
// • First of all, is T a function?
// • If so, then the type resolves to the inferred return type R.
// • Otherwise the type resolves to any.

  