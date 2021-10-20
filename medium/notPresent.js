const readline = require("readline-sync")

// Given two arrays, 1,2,3,4,5 and 2,3,1,0,5 find which number is not present in the second array.
const firstPrompt = readline.question('Give me a list of numbers: '); // eg. 1,3,4,5
const firstList = firstPrompt.split(',').map(x => parseInt(x));
const secondPrompt = readline.question('Give me another list of numbers: '); // eg. 1,2,3
const secondList = secondPrompt.split(',').map(x => parseInt(x));

notPresent = firstList.filter(function (sum){
    return secondList.indexOf(sum) < 0
})


console.log('The two lists merged and sorted, the ones not present in the first list: ' + notPresent);