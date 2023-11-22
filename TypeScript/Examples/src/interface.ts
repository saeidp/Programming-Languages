// // By redefining User we can add properties to the User interface.
// // By extending User we can create another interface that has all the User properties
// interface User {
//     readonly dbId: number
//     email: string,
//     userId: number,
//     googleId?: string
//     // startTrail: () => string
//     startTrail(): string
//     getCoupon(couponname: string, value: number): number
// }

// interface User {
//     githubToken: string
// }

// interface Admin extends User {
//     role: "admin" | "ta" | "learner"
// }

// const hitesh: Admin = {
//     dbId: 22, email: "h@h.com", userId: 2211,
//     role: "admin",
//     githubToken: "github",
//     startTrail: () => {
//         return "trail started"
//     },
//     getCoupon: (name: "hitesh10", off: 10) => {
//         return off
//     }
// }
// hitesh.email = "h@hc.com"
// // hitesh.dbId = 33

// console.log(hitesh)
// console.log(hitesh.getCoupon("tv", 20))