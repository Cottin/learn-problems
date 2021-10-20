const readline = require("readline-sync")

// Write a function that combines two lists by alternatingly taking elements,
// e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
const firstPrompt = readline.question('Give me a list: '); // eg. a,b,c
const firstList = firstPrompt.split(',');
const secondPrompt = readline.question('Give me another list: '); // eg. 1,2,3
const secondList = secondPrompt.split(',');

// Your code here...

function combine(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let result = [];
        result += arr1[i]
        
    }
}

combine(['a', 'b', 'c'], )

console.log('The two lists combined alternatingly are:' + '...');

