// returns an array of command line arguments
console.log(process.argv);

// arguments passed from the command line are accessed by index
// console.log(process.argv[2]);

//section not using a function
let variableOne = process.argv[2];
let variableTwo = process.argv[3];

const isSame = variableOne === variableTwo ? true : false;

console.log(variableOne, variableTwo, variableOne === variableTwo);
console.log(isSame);

//section using a function
function compareInput() {
  const variableOne = process.argv[2];
  const variableTwo = process.argv[3];

  const isSame = variableOne === variableTwo ? true : false;
  
  // console.log(variableOne, variableTwo, variableOne === variableTwo);
  // console.log(isSame);
  return isSame;
}

// compareInput();
// can also pass the values into the function
console.log(compareInput());

// It's done when I have created a file, index.js, in the working directory.

// It's done when I use process.argv to assign two arguments to variables.

// It's done when I compare those two variables to see whether they are the same or not.

// It's done if the program returns true when the values are the same and false if they are not.