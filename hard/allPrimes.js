// Write a program that prints all prime numbers. (Note: if your programming language does not support
// arbitrary size numbers, printing all primes up to the largest number you can easily represent is fine too.)

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

let primes = []

for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    primes.push(i)
  }
}

console.log('All prime numbers: ', primes)
