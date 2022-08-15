const inquirer = require('inquirer');  //original
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What languages do you now?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'preferredCommunication',
    },
  ])
  .then((response) => {
    let text = JSON.stringify([response.username, response.languages, response.preferredCommunication])
    console.log(text, JSON.parse(text), text[1])
    // fs.writeFile('message.txt', 'Hello Node', function (err) {
    fs.writeFile('message.txt', text, function (err) {
      if (err) throw err;
      console.log('It\'s saved!');
    })
  }
  )
  // .then((response) => 
  //   console.log(`Hello ${response.username}. You speak ${response.languages}. You prefer ${response.preferredCommunication}.`)
  // )
  // .then(() =>
  //   console.log(`Hello. You speak. You prefer.`)
  // );
