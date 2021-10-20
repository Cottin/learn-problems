const readline = require("readline-sync")

// Write function that reverses a list of numbers
const firstPrompt = readline.question('Give me a list of numbers: '); // eg. 1,2,3
const reversed = firstPrompt.split('').reverse().join('')

console.log('The reverse list is: ' + reversed);