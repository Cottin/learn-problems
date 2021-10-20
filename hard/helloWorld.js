const readline = require("readline-sync")

// Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. 
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

const firstPrompt = readline.question('Give me a list of strings: ') // eg. Hello,World,in,a,frame
const strings = firstPrompt.split(',')

const printStringsInSquare = strings => {
  let maxLength = 0

  strings.forEach(string => {
    if (string.length > maxLength) {
      maxLength = string.length
    }
  })

  let starLine = []
  for (let i = 0; i < maxLength + 4; i++) {
    starLine.push('*')
  }

  console.log(starLine.join(''))

  strings.forEach(string => {
    let wordLine = ['* ' + string + ' ']

    for (let i = string.length; i < maxLength; i++) {
      wordLine.push(' ')
    }
    wordLine.push('*')
    console.log(wordLine.join(''))
  })

  console.log(starLine.join(''))
}

printStringsInSquare(strings)
