const readline = require("readline-sync")
// Write a program that prints all prime numbers. (Note: if your programming language does not support 
// arbitrary size numbers, printing all primes up to the largest number you can easily represent is fine too.)

const upToNumber = readline.question('Give me a number you want a list of prime numbers up to: ')

const isPrimeNumber = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

const printNumbers = (n) => {
    let primeNumbersArray = [2]
    for (let i = 3; i < n; i+=2) {
        isPrimeNumber(i) && primeNumbersArray.push(i)
    }
    return primeNumbersArray
}

console.log(printNumbers(upToNumber))

