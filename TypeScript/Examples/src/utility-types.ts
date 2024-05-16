export { }
interface MyUser {
    name: string;
    id: number;
    age?: number;
}

// ----------------------------- Partial ------------------------------
// Partial makes all the properties optional
type MyUserOptionals = Partial<MyUser>;
const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides,
    };
};

console.log(
    merge(
        {
            name: "Jack",
            id: 2,
            age: 10,
        },
        {
            age: 20,
        }
    )
);

// ----------------------------------------------------------- Required Pick Omit and record ------------------------
// all properties become required (no optional)
type RequiredMyUser = Required<MyUser>;

// Pick only certain properties  
type JustEmailAndName = Pick<MyUser, "age" | "name">;

// Omit only certain properties
type UserWithoutID = Omit<MyUser, "id">;

// Record with a key of id and value of UserWithoutID
// key of id is number here but it can be any type but in here it is Record<number, UserWithoutID>
const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
    return users.reduce((acc, value) => {
        const { id, ...other } = value;
        acc[id] = other
        return acc
        // you can use the following instead of the 2 lines above
        // return {
        //     ...a,
        //     [id]: other,
        // };
    }, {});
};

console.log(
    mapById([
        {
            id: 1,
            name: "Mr. Smith",
        },
        {
            id: 2,
            name: "Mrs. Black",
        },
    ])
);

console.log("keps the debugger alive")