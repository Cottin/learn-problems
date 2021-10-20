const readline = require("readline-sync")

// Write a function that tests whether a string is a palindrome.
const firstPrompt = readline.question('Give me a string: '); // eg. racecar

// Your code here...

const palindrome = firstPrompt.split("").reverse().join("");

if(palindrome == firstPrompt){
    console.log('The string ' + firstPrompt + ' is a palindrome.');
}
else{ //if(palindrome !== firstPrompt){
console.log('The string ' + firstPrompt + ' is NOT a palindrome.');
}

