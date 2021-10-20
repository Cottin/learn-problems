const readline = require("readline-sync")

// Write a method which will remove any given character from a String
const firstPrompt = readline.question('Give me a sentence: '); // eg. The quick brown fox
const secondPrompt = readline.question('Character to remove: '); // eg. o

// Your code here...
let newSentence = ''
for (let i = 0; i < firstPrompt.length; i++) {
  if (firstPrompt[i] !== secondPrompt) {
    newSentence += firstPrompt[i]
  }
}

console.log('The sentence without your character: ' + newSentence)

