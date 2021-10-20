const readline = require("readline-sync")

// Write a function that takes a number and returns a list of its digits.
// So for 2342 it should print [2,3,4,2].
const firstPrompt = readline.question('Give me a number: '); // eg. 2342
const number = parseInt(firstPrompt);


const digits = ("" + number).split("");


console.log('The list rotated by ' + '...' + ' looks like:' + '...' + digits);

