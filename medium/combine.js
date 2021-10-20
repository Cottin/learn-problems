const readline = require("readline-sync")

// Write a function that combines two lists by alternatingly taking elements,
// e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
const firstPrompt = readline.question('Give me a list: '); // eg. a,b,c
const firstList = firstPrompt.split(',');
const secondPrompt = readline.question('Give me another list: '); // eg. 1,2,3
const secondList = secondPrompt.split(',');

const thirdList = firstList + "," + secondList

console.log('The two lists combined alternatingly are: ' + thirdList);