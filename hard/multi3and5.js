// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Your code here...
let multiplesof3or5 = []
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) multiplesof3or5.push(i)
}

let summedArr = multiplesof3or5.reduce((a, b) => a + b)

console.log('The sum is: ' + summedArr)

