//const { config } = require("yargs");

// Iteration 1: Names and Input
const hacker1 = "Ivan";
console.log(`The driver name is ${hacker1}`);
const hacker2 = "Alexis";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let hacker1Cap = "";
for (i = 0; i < hacker1.length; i++) {
  hacker1Cap += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Cap);

let hacker2Rev = "";

for (i = hacker2.length - 1; i >= 0; i--) {
  hacker2Rev += hacker2[i];
}
console.log(hacker2Rev);
