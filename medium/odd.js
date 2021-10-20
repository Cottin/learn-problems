const readline = require("readline-sync")

// Write a function that returns the odd numbers in a list.
const firstPrompt = readline.question('Give me a list of numbers: '); // eg. 1,2,3

/*
const numbers = firstPrompt.split(',').map(function(num){
    return num % 2 == 1;
})
*/

const numbers = firstPrompt.split(',').map(x => parseInt(x));
// Your code here...
console.log("The odd numbers are: ");
for(var i = 0; i < numbers.length; i ++){
    if(numbers[i] % 2 == 1) {
        console.log(numbers[i])
    }
}

//Just testing
//const numbers2 = firstPrompt.split(',').map(x => x % 2 == 1 ? parseInt(x) : null);

//console.log(numbers2)
