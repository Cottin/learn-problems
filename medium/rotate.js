const readline = require("readline-sync")

// Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
const firstPrompt = readline.question('Give me a list: '); // eg. 1,2,3,4
const firstList = firstPrompt.split(',').map(x => parseInt(x));
const secondPrompt = readline.question('By how many should we rotate? '); // eg. 2

// Your code here...
let sliceMoveToEnd = firstList.slice(0, +secondPrompt)
let sliceMoveToBeginning = firstList.slice(+secondPrompt)
let rotatedArr = sliceMoveToBeginning.concat(sliceMoveToEnd)

console.log('The list rotated by ' + secondPrompt + ' looks like:' + rotatedArr)

console.log('The list rotated by ' + secondPrompt + ' looks like:' + rotatedArr)

