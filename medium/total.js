const readline = require("readline-sync")

// Write a function that computes the running total of a list.
const firstPrompt = readline.question('Give me a list of numbers: '); // eg. 1,2,3
const numbers = firstPrompt.split(',').map(x => parseInt(x));

// Your code here...

console.log('The total of the list is:' + '...');

