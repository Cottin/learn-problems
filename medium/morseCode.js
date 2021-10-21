const readline = require('readline-sync')

const morseAlphabet = {
  ' ': ' ',
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..',
  '!': '-.-.--',
  '-': '-....-',
  '/': '-..-.',
  '@': '.--.-.',
  '(': '-.--.',
  ')': '-.--.-'
}

// Write a program that automatically converts English text to Morse code
const firstPrompt = readline.question('Give me a sentence: ') // eg. The quick brown fox

function textToMorse(firstPrompt) {
  let text = firstPrompt

  for (const char of firstPrompt) {
    text = text.replace(char, morseAlphabet[char])
  }

  return text
}

console.log('The morse equivalent is: ' + textToMorse(firstPrompt))
