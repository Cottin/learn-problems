const readline = require("readline-sync")

// Write a function that computes the running total of a list.
const firstPrompt = readline.question('Give me a list of numbers: '); // eg. 1,2,3
const numbers = firstPrompt.split(',').map(x => parseInt(x));

// Your code here...
for(let i = 1 ; i < numbers.length ; i++) {
    numbers[i] = numbers[i] + numbers[i-1];
  }

console.log('The total of the list is:' + numbers)

