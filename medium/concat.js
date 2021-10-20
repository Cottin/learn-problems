const readline = require("readline-sync")

// Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]
const firstPrompt = readline.question('Give me a list: '); // eg. a,b,c
const firstList = firstPrompt.split(',');
const secondPrompt = readline.question('Give me another list: '); // eg. 1,2,3
const secondList = secondPrompt.split(',');

// Your code here...

console.log('The two lists concatenated are: ' + firstList.concat(secondList));

