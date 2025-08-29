//@ts-check
// This will be our first javascript file
console.log("Hello World From Javascript");

// This is a string (text) variable
// Strings are surrounded by double quotes "" , single quotes '', or backticks ``
let username = "Nokime3";
// This variable name is camelCased
let favSong = "Steve's Going to London";

console.log(username, favSong);

// Reassign the value
favSong = "Worlds Smallest Violin"
console.log(username, favSong);

// We concatenate and change numbers to strings magically
let whatHappens = username + favSong + 1000;

console.log(whatHappens);

// Numbers are kinda of for math stuff

let likes = 1000000;
let subscribers = 10;

//@ts-ignore I know what I am doing!
whatHappens = likes / subscribers;
console.log(whatHappens);

// Booleans are true false

let noCap = true;
let cap = false;
let is2greaterThan3 = 2 > 3;

console.log(noCap, cap, is2greaterThan3);

// Define a constant
const DO_NOT_CHANGE_ME = "NOT ALLOWED!!!";

