const readline = require("readline-sync")

// Write a guessing game where the user has to guess a secret number. After every guess the program tells 
// the user whether their number was too large or too small. At the end the number of tries needed should 
// be printed. It counts only as one try if they input the same number multiple times consecutively.
const number = Math.floor(Math.random() * 99)
let truth = false 
while (!truth) {
    let firstPrompt = readline.question('What do you guess? ');

if (firstPrompt < number) {
    console.log("to small")
} else if (firstPrompt > number) {
    console.log("to big")
} else {
    truth = true
}
}

// Your code here...

console.log('Correct! Number of tries was:' );

