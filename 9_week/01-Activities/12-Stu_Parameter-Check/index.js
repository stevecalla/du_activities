// returns an array of command line arguments
console.log(process.argv);

// arguments passed from the command line are accessed by index
// console.log(process.argv[2]);

function processArgv() {
  // let test = process.argv;
  let variableOne = process.argv[0];
  let variableTwo = process.argv[1];

  // let variableOne = test[0];
  // let variableTwo = test[1];

  console.log(variableOne);
  console.log(variableTwo);

  variableOne === variableTwo ? console.log('true') : console.log('false');

}

processArgv();

// It's done when I have created a file, index.js, in the working directory.

// It's done when I use process.argv to assign two arguments to variables.

// It's done when I compare those two variables to see whether they are the same or not.

// It's done if the program returns true when the values are the same and false if they are not.