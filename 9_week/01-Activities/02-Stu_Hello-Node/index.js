initialNodeFunction();

function initialNodeFunction() {
  // console.log(this);
  console.log('hello node');
  console.log('Hellooo, Node!');
  addSomeNumbers(5, 10);
  // console.log(window);
  // window.prompt('hello')
};

function addSomeNumbers(a, b) {
  console.log(a + b)
}

//READLINE PROMPT PACKAGE
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name ? ', function (name) {
  rl.question('Where do you live ? ', function (country) {
    console.log(`${name}, is a citizen of ${country}`);
    rl.close();
  });
});

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});

//INQUIRER PROMPT PACKAGE
// const { prompt } = require('inquirer');

// prompt('hello')

// import inquirer from 'inquirer';

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });