const readline = require("readline-sync");

// Given an array of numbers, and a number n, split the array into slices of lenght n
// eg. [1, 2, 3, 4, 5, 6, 7], 2 -> [1, 2], [3, 4], [5, 6], [7]
const firstPrompt = readline.question("Give me a list of numbers: "); // eg. 1,3,4,5
const firstList = firstPrompt.split(",").map((x) => parseInt(x));
const secondPrompt = readline.question("How long, each slice: "); // eg. 2
const len = parseInt(secondPrompt);

// Your code here...
const sliceArr = [];
while (firstList.length) {
  sliceArr.push(firstList.splice(0, len));
}

console.log("The splitted up list looks like this:");
console.log(sliceArr);
