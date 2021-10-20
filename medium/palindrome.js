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

function palindromeCheck(){

    var len = firstPrompt.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (firstPrompt[i] !== firstPrompt[len - 1 - i]) {
            console.log('The string ' + firstPrompt + ' is (not) a palindrome.')
            return false;
        }
    }
    console.log('The string ' + firstPrompt + ' is  a palindrome.');
    return true;
}
//it works
palindromeCheck()




