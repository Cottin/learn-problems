const readline = require("readline-sync")

// Write a function that combines two lists by alternatingly taking elements,
// e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
const firstPrompt = readline.question('Give me a list: '); // eg. a,b,c
const firstList = firstPrompt.split(',');
const secondPrompt = readline.question('Give me another list: '); // eg. 1,2,3
const secondList = secondPrompt.split(',');

// Your code here...
const combineArrays = (arr1, arr2) => {
    let length = arr1.length > arr2.length ? arr1.length : arr2.length
    let combinedArr = []

    for (let i = 0; i < length; i++) {
        if (i < arr1.length) {
            combinedArr.push(arr1[i])
        }
        if ( i < arr2.length) {
            combinedArr.push(arr2[i])
        }
    }
    return combinedArr
}

console.log(combineArrays(firstList, secondList));

