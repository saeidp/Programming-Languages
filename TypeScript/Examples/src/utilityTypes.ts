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