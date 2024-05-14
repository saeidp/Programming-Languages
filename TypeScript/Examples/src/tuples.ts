
// ---------------------------------------------------------- Tuples ------------------------------------
// // Tuples are defined as arrays with a fixed number of elements
// export { }
// type Coordinate = [x: number, y: number];

// function add3DCoordinate(
//     c1: Coordinate,
//     c2: Coordinate
// ): Coordinate {
//     return [c1[0] + c2[0], c1[1] + c2[1]];
// }

// console.log(add3DCoordinate([0, 1], [10, 2]));

// function state(
//     value: string
// ): [() => string, (u: string) => void] {
//     let str: string = value;
//     return [
//         () => str,
//         (u: string) => {
//             str = u;
//         },
//     ];
// }

// const [getter1, setter1] = state("hello");
// const [getter2, setter2] = state("world");
// console.log(getter1());
// console.log(getter2());
// setter1("adios");
// console.log(getter1());
// console.log(getter2());