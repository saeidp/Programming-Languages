export { }
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
// Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers
type T0 = Exclude<"a" | "b" | "c", "a">; // type T0 = "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; //type T1 = "c"
type T2 = Exclude<string | number | (() => void), Function>; //type T2 = string | number

type Shape =
    { kind: "circle"; radius: number }
    | { kind: "square"; x: number }
    | { kind: "triangle"; x: number; y: number };

type T3 = Exclude<Shape, { kind: "Circle" }> // kind Circle will be removed from the Shape
// type T3 = {
//     kind: "square";
//     x: number;
// } | {
//     kind: "triangle";
//     x: number;
//     y: number;
// }

const t: T3 = {
    kind: "square",
    x: 100
}

console.log(t) // {kind: 'square', x: 100}
