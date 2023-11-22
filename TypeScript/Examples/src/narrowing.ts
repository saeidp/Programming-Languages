// --------------------------------- Narroqing ------------------------------------------
//// It’s fairly popular to leverage this behavior, especially for guarding against values like null or undefined.As an example, let’s try using it for our printAll function.

// function printAll(strs: string | string[] | null) {
//     if (strs && typeof strs === "object") {
//         for (const s of strs) {
//             console.log(s);
//         }
//     } else if (typeof strs === "string") {
//         console.log(strs);
//     }
// }

// printAll("Hello");
// printAll(["Hello", "World"]);
// printAll(null);


// function printAll(strs: string | string[] | null) {
//     if (strs !== null) {
//         if (typeof strs === "object") {
//             for (const s of strs) {
//                 console.log(s);
//             }
//         } else if (typeof strs === "string") {
//             console.log(strs);
//         }
//     }
// }


// // if value is not null it is also checked for undefined using == or !=
// interface Container {
//     value: number | null | undefined;
// }

// function multiplyValue(container: Container, factor: number) {
//     // Remove both 'null' and 'undefined' from the type.
//     if (container.value != null) {
//         console.log(container.value);
//         // Now we can safely multiply 'container.value'.
//         container.value *= factor;
//     }
// }


// ------------------------------------ The in operator narrowing -----------------------------------
// type Fish = { swim: () => void };
// type Bird = { fly: () => void };

// function move(animal: Fish | Bird) {
//     if ("swim" in animal) {
//         return animal.swim();
//     }

//     return animal.fly();
// }

// const f = move({
//     swim() {
//         console.log("Hello Swim")
//     }
// })


//------------------------------------- Instanceof narrowing ----------------------
// function logValue(x: Date | string) {
//     if (x instanceof Date) {
//         console.log(x.toUTCString());
//     } else {
//         console.log(x.toUpperCase());
//     }
// }


// --------------------------------------- Control flow analysis --------------------------

// function example() {
//     let x: string | number | boolean;

//     x = Math.random() < 0.5;

//     console.log(x); // let x: boolean

//     if (Math.random() < 0.5) {
//         x = "hello";
//         console.log(x); //  let x: string
//     } else {
//         x = 100;
//         console.log(x); // let x: number
//     }
//     return x;  // let x: string | number
// }

// -------------------------------- type predicates ---------------------------------------
//// o define a user-defined type guard, we simply need to define a function whose return type is a type predicate:
//// pet is Fish is our type predicate in this example. A predicate takes the form parameterName is Type, where parameterName must be the name of a parameter from the current function signature.
// type Fish = { swim: () => void };
// type Bird = { fly: () => void };

// function isFish(pet: Fish | Bird): pet is Fish {
//     return (pet as Fish).swim !== undefined;
// }

// const flag = isFish({
//     swim() {
//     }
// })

// console.log(flag); // true

// function getSmallPet(kind: string) {
//     if (kind === "fish") {
//         const pet: Fish = { swim() { console.log("swim") } };
//         return pet

//     }
//     else {
//         const pet: Bird = { fly() { console.log("fly") } };
//         return pet;
//     }
// }

// const pet = getSmallPet("fly");
// if (isFish(pet)) {
//     pet.swim()
// }
// else {
//     pet.fly()
// }

// ---------------------------------------- Discriminated union --------------------------
// interface Shape {
//     kind: "circle" | "square";
//     radius?: number;
//     sideLength?: number;
// }

// function handleShape(shape: Shape) {
//     // oops!
//     if (shape.kind === "rect") {
//     // This comparison appears to be unintentional because the types '"circle" | "square"' and '"rect"' have no overlap.
//     // ...
//   }
// }

//// wrong way
// function getArea(shape: Shape) {
//     return Math.PI * shape.radius ** 2;
//     // 'shape.radius' is possibly 'undefined'. if you pass ashape of square
// }

//// corect way. ! means radius exists otherwise it does not know if radius is null or not. It is not ideal though
// function getArea(shape: Shape) {
//     if (shape.kind === "circle") {
//         return Math.PI * shape.radius! ** 2;
//     }
// }


//// better way
// interface Circle {
//     kind: "circle";
//     radius: number;
// }

// interface Square {
//     kind: "square";
//     sideLength: number;
// }

// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//     return Math.PI * shape.radius ** 2;
//     // Property 'radius' does not exist on type 'Shape'.
//     // Property 'radius' does not exist on type 'Square'.
// }

//// this one says shape maybe circle or square then in this case it accepts that it can have radius
// function getArea(shape: Shape) {
//     if (shape.kind === "circle") {
//         return Math.PI * shape.radius ** 2;

//         //(parameter) shape: Circle
//     }
// }

//// and switch
// function getArea(shape: Shape) {
//     switch (shape.kind) {
//         case "circle":
//             return Math.PI * shape.radius ** 2;

//             // (parameter) shape: Circle
//         case "square":
//             return shape.sideLength ** 2;

//             // (parameter) shape: Square
//     }
// }

//// Exhaustive checking.  assign the shape to never will not raise an error when every possible case has been handled.

// function getArea(shape: Shape) {
//     switch (shape.kind) {
//         case "circle":
//             return Math.PI * shape.radius ** 2;
//         case "square":
//             return shape.sideLength ** 2;
//         default:
//             const _exhaustiveCheck: never = shape;
//             return _exhaustiveCheck;
//     }
// }