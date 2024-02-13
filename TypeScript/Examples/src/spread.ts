// ----------------------------------------- adding property to an object if the array is not empty ----------------------
// // This code snippet creates an object with a property called defaultProperty, which conditionally
// // includes an --extra-files property with a comma-separated list of file names from the extraFiles array, only
// // if the extraFiles array is not empty.

// const extraFiles : string[] = ["test1.py", "test2.py"];
// const value = {
//    defaultProerty : {
//     ...(extraFiles && { '--extra-files': extraFiles.join(',') })
//    } 
// }
// console.log(value.defaultProerty);