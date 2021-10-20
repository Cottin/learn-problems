const readline = require("readline-sync");

// Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5] → [1,2,3,4,5,6].
const firstPrompt = readline.question("Give me a list: "); // eg. a,b,c
const firstList = firstPrompt.split(",").map((x) => parseInt(x));
const secondPrompt = readline.question("Give me another list: "); // eg. 1,2,3
const secondList = secondPrompt.split(",").map((x) => parseInt(x));

// Your code here...

const newList = [...firstList, ...secondList];
console.log(
  "The two lists merged and sorted are:" + ` ${newList.sort((a, b) => a - b)}`
);
