console.log('hello\n\n')
// TODO: Import `maths.js`
const mathCalc = require('./maths.js');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
let operation = process.argv[2];
let numOne = parseInt(process.argv[3]);
let numTwo = parseInt(process.argv[4]);
// console.log(process.argv)
console.log(operation, numOne, numTwo);

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

switch (operation) {
  case 'sum':
    console.log(`${numOne} + ${numTwo} = ${mathCalc.sum(numOne, numTwo)}.`);
    break;
  case 'difference':
    console.log(`${numOne} - ${numTwo} = ${mathCalc.difference(numOne, numTwo)}.`);
    break;
  case 'product':
    console.log(`${numOne} * ${numTwo} = ${mathCalc.product(numOne, numTwo)}.`);
    break;
  case 'quotient':
    console.log(`${numOne} / ${numTwo} = ${mathCalc.quotient(numOne, numTwo)}.`);
    break;
  default:
    console.log(`Sorry ${operation} is not available.`);
}

// console.log(mathCalc.sum(numOne, numTwo));
// console.log(mathCalc.difference(numOne, numTwo));
// console.log(mathCalc.product(numOne, numTwo));
// console.log(mathCalc.quotient(numOne, numTwo));