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

if (hacker1.toLowerCase() > hacker2.toUpperCase()) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.toLowerCase() < hacker2.toUpperCase()) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum dignissim metus scelerisque porttitor. Aenean pharetra gravida turpis, ac vulputate urna interdum eu. Maecenas nec enim semper, venenatis purus interdum, volutpat odio. Phasellus mattis consequat ligula sit amet viverra. Phasellus nec lacus et orci vehicula commodo ac quis ipsum. Aliquam tincidunt dui quis purus maximus placerat. Etiam augue nibh, suscipit maximus massa vel, hendrerit convallis leo. Sed ut tellus ut lorem accumsan tempor. Pellentesque luctus orci sed dapibus porttitor. Sed semper, lacus tincidunt dictum iaculis, arcu magna mollis tellus, tempor pellentesque quam nulla eu risus. Sed in eleifend nulla. Etiam varius justo sed purus malesuada, ac ultrices magna accumsan. Fusce consectetur dui sit amet augue sodales, sit amet condimentum felis porttitor. Suspendisse ac purus posuere, rhoncus metus non, pellentesque tortor. Aliquam erat volutpat. Cras dapibus ligula iaculis, condimentum dui in, commodo turpis. Morbi consectetur finibus justo vel ultricies. Duis est odio, vulputate nec purus sit amet, feugiat tempor tortor. Duis pretium sollicitudin est vel dictum. Curabitur interdum sem nisl, a tristique magna ultrices quis. Aliquam non lacinia urna. Donec suscipit iaculis diam, ac feugiat libero tincidunt at. Fusce eu lectus at eros sodales tempor. Sed blandit massa nisi, id congue diam congue quis. Donec sodales massa nec sollicitudin vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus at tortor dapibus, lobortis ligula ac, mattis nibh. Integer sit amet nisi odio. Ut urna ante, fermentum a lacus ut, dapibus lacinia tortor. Vivamus volutpat, elit a condimentum fringilla, enim ex convallis leo, quis maximus nulla neque id turpis. Donec erat tellus, scelerisque quis nisl id, euismod suscipit diam. Praesent ut massa in metus pretium luctus id et velit. Aenean sodales lectus eget mi congue scelerisque. Curabitur aliquam mi eget accumsan varius. Mauris vel imperdiet libero. Maecenas sagittis euismod faucibus. Nullam luctus sed lectus at placerat. Nulla facilisi. Sed ac quam sed ligula condimentum fringilla. Duis imperdiet tempor tincidunt. Integer erat nisl, congue a interdum id, dignissim id ligula. In semper euismod ligula, sed cursus ligula hendrerit in. Suspendisse euismod ligula nisi. Aliquam volutpat velit quis leo placerat sodales. Aliquam et euismod nisl, sit amet fringilla urna. Phasellus tincidunt euismod turpis eget molestie. Sed fermentum erat ut massa tincidunt, eget vestibulum purus eleifend.";

const words = longText.split(" ");

console.log(`There's ${words.length} words in these 3 paragraphs.`);

let etCount = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "et") {
    etCount++;
  }
}
console.log(`There's ${etCount} "et" in these 3 paragraphs`);

let phraseToCheck = `No 'x' "Nixon"`;
let cleanPhrase = "";
let phraseReversed = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i].toLowerCase() !== phraseToCheck[i].toUpperCase()) {
    cleanPhrase += phraseToCheck[i];
  }
}

for (let i = cleanPhrase.length - 1; i >= 0; i--) {
  phraseReversed += cleanPhrase[i];
}

console.log(cleanPhrase, phraseReversed);

if (phraseReversed.toUpperCase() === cleanPhrase.toUpperCase()) {
  console.log("This is a palindrome");
} else {
  console.log("This is not a palindrome sorry");
}
