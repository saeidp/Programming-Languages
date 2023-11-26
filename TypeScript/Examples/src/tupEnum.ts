// ------------------------------------------- tuples ----------------------------------
//// This is a normal array that says you can only push number or string
// const user: (string | number)[] = [1, "hc"]
// user.push("hello")

// // This is a tuple
// let tUser: [string, number, boolean]

// tUser = ["hc", 131, true]

// let rgb: [number, number, number] = [255, 123, 112]

// type User = [number, string]

// const newUser: User = [112, "example@google.com"]

// newUser[1] = "hc.com"


// console.log(newUser)


// // Type 'string' is not assignable to type 'number'
// newUser[0] = ""

// // Argument of type 'boolean' is not assignable to parameter of type 'string | number
// newUser.push(true)