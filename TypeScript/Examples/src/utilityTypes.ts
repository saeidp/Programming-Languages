export { }
// ------------------------------------------ partial ------------------------------------
// interface MyUser {
//     name: string;
//     id: number;
//     age?: number;
// }

// // Partial makes all the properties optional
// type MyUserOptionals = Partial<MyUser>;
// const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
//     return {
//         ...user,
//         ...overrides,
//     };
// };

// console.log(
//     merge(
//         {
//             name: "Jack",
//             id: 2,
//             age: 10,
//         },
//         {
//             age: 20,
//         }
//     )
// );




// ------------------------------------------------- Partial<Type> -----------------------------------
// // Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type
// interface Todo {
//     title: string;
//     description: string;
// }

// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//     return { ...todo, ...fieldsToUpdate };
// }

// const todo1 = {
//     title: "organize desk",
//     description: "clear clutter",
// };

// const todo2 = updateTodo(todo1, {
//     description: "throw out trash",
// });

// console.log(todo2) // {title: 'organize desk', description: 'throw out trash'}

// ----------------------------------------------------------- Required Pick Omit and record ------------------------
// // all properties become required (no optional)
// interface MyUser {
//     name: string;
//     id: number;
//     age?: number;
// }

// type RequiredMyUser = Required<MyUser>;

// // Pick only certain properties
// type JustEmailAndName = Pick<MyUser, "age" | "name">;

// // Omit only certain properties
// type UserWithoutID = Omit<MyUser, "id">;

// // Record with a key of id and value of UserWithoutID
// // key of id is number here but it can be any type but in here it is Record<number, UserWithoutID>
// const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
//     return users.reduce((acc, value) => {
//         const { id, ...other } = value;
//         acc[id] = other
//         return acc
//         // you can use the following instead of the 2 lines above
//         // return {
//         //     ...a,
//         //     [id]: other,
//         // };
//     }, {});
// };

// console.log(
//     mapById([
//         {
//             id: 1,
//             name: "Mr. Smith",
//         },
//         {
//             id: 2,
//             name: "Mrs. Black",
//         },
//     ])
// );

// console.log("keps the debugger alive")


// --------------------------------------------- Required<Type> -------------------------------------------------
// // Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
// interface Props {
//     a?: number;
//     b?: string;
// }

// const obj: Props = { a: 5 };
// const obj2: Required<Props> = { a: 5 }; // Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'

// --------------------------------------------- Readonly<Type> ------------------------------------------------
// // Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
// interface Todo {
//     title: string;
// }
// const todo: Readonly<Todo> = {
//     title: "Delete inactive users",
// };
// todo.title = "Hello"; // Cannot assign to 'title' because it is a read-only property.

// ------------------------------------------ Record<key, Type> -------------------------------------
// // Constructs an object type whose property keys are Keys and whose property values are Type.
// // This utility can be used to map the properties of a type to another type.
// interface CatInfo {
//     age: number;
//     breed: string;
// }

// type CatName = "miffy" | "boris" | "mordred";

// const cats: Record<CatName, CatInfo> = {
//     miffy: { age: 10, breed: "Persian" },
//     boris: { age: 5, breed: "Maine Coon" },
//     mordred: { age: 16, breed: "British Shorthair" },
// };

// const boris = cats.boris;
// console.log(boris)

// --------------------------------------- Pick<Type, Keys> ---------------------------------------
// // Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false,
// };

// console.log(todo); // {title: 'Clean room', completed: false}

// ----------------------------------------------- Omit<Type, Keys> ----------------------------------
// // Constructs a type by picking all properties from Type and then removing Keys (string literal or
// // union of string literals). The opposite of Pick.
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
//     createdAt: number;
// }

// type TodoPreview = Omit<Todo, "description">;

// const todo: TodoPreview = {
//     title: "Clean room",
//     completed: false,
//     createdAt: 1615544252770,
// };

// console.log(todo); // {title: 'Clean room', completed: false, createdAt: 1615544252770}

// type TodoInfo = Omit<Todo, "completed" | "createdAt">;

// const todoInfo: TodoInfo = {
//     title: "Pick up kids",
//     description: "Kindergarten closes at 5pm",
// };

// console.log(todoInfo); // {title: 'Pick up kids', description: 'Kindergarten closes at 5pm'}

// ----------------------------------------------- Exclude<UnionType, ExcludeMembers> -----------------------------
// // Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers
// type T0 = Exclude<"a" | "b" | "c", "a">; // type T0 = "b" | "c"
// type T1 = Exclude<"a" | "b" | "c", "a" | "b">; //type T1 = "c"
// type T2 = Exclude<string | number | (() => void), Function>; //type T2 = string | number

// type Shape =
//     { kind: "circle"; radius: number }
//     | { kind: "square"; x: number }
//     | { kind: "triangle"; x: number; y: number };

// type T3 = Exclude<Shape, { kind: "Circle" }> // kind Circle will be removed from the Shape
// // type T3 = {
// //     kind: "square";
// //     x: number;
// // } | {
// //     kind: "triangle";
// //     x: number;
// //     y: number;
// // }

// const t: T3 = {
//     kind: "square",
//     x: 100
// }

// console.log(t) // {kind: 'square', x: 100}


//------------------------------------------------------- Parameters<T> and ReturnType<T> ----------------------------------------------
// type PersonName = { first: string; last: string };

// function addFullName(name: PersonName): PersonName & { fullName: string } {
//     return {
//         ...name,
//         fullName: `${name.first} ${name.last}`,
//     };
// }

// function createRecord<T extends (...args: any[]) => any>(
//     func: T,
//     data: Parameters<T>[0][]
// ): ReturnType<T>[] {
//     return data.map((data: Parameters<T>[0]) => func(data));
// }

// const records = createRecord(addFullName, [
//     { first: "Mike", last: "Blackburn" },
//     { first: "Andrew", last: "Cruise" },
// ]);

// console.log(records);
// console.log(records[0].fullName);

// // output:
// // 0:{ first: 'Mike', last: 'Blackburn', fullName: 'Mike Blackburn' }
// // 1:{ first: 'Andrew', last: 'Cruise', fullName: 'Andrew Cruise' }

// // Mike Blackburn

// ------------------------------------------------------ ConstructorParameters<T> and ReturnType<T> ------------------------------------------------
// function createObjects<T extends new (...args: any[]) => any>(
//     ObjectType: T,
//     data: ConstructorParameters<T>[0][] // [0] means first parameter (Person)
// ): InstanceType<T>[] {
//     return data.map((data: ConstructorParameters<T>[0]) => new ObjectType(data));
// }
// class Person {
//     constructor(public name: { first: string; last: string }) { }
//     get fullName() {
//         return `${this.name.first} ${this.name.last}`;
//     }
// }
// const people = createObjects(Person, [
//     { first: "Mike", last: "Blackburn" },
//     { first: "Andrew", last: "Cruise" },
// ]);

// console.log(people.map((obj) => obj.fullName));

// // output:
// // ['Mike Blackburn', 'Andrew Cruise']


