// Set population limit of aquarium to 10
const popLimit = 10;

// Start off with 0 fish
let fish = 0;

// Initiate while loop to run until fish reaches population limit
while (fish < popLimit) {
  // add one fish for each iteration
  fish++;
  console.log("There's room for " + (popLimit - fish) + " more fish.");
}

// Set variable to 0
let x = 0;

do {
  // Increment variable by 1
  x++;
  console.log(x);
} while (false); // 1
