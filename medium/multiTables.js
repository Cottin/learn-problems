const printMultiplicationTable = () => {
  for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${j} * ${i} = ${i * j}`)
    }
    console.log('---------------------------------')
  }
}

printMultiplicationTable()


