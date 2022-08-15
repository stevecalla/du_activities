// TODO: Fix the declarations so that the function works properly.
const addGreetingMessage = (name) => {
  var message = 'How are you?';

  if (name.length > 0) {
    // var message = 'Hello ' + name; //section: reassigns message; this line 7 and 14 log Hello Tammy
    let message = 'Hello ' + name; //section: using let ensures message will log hello tammy inside if statemennt and how are you outisde the statement at line 14
    console.log(message);
  }

  console.log(message);
};

addGreetingMessage('Tammy');

// TODO: Fix the declarations so that the function works properly.
const calloutCounter = () => {
  const callout = 'Outside of the loop';
  let counter = 5; //section changed from var to let

  while (counter > 0) {
    // var callout = 'Inside the loop';
    let callout = 'Inside the loop'; //section: changed var to let to address scope issue
    console.log(counter, callout);
    counter--;
  }

  console.log(callout);
};

calloutCounter();

// TODO: Fix the declarations so that the function works properly.
const countMatrix = (matrix) => {
  // for (var i = 0; i < matrix.length; i++) {
  for (let i = 0; i < matrix.length; i++) { //section: changed var to let
    // var line = matrix[i];
    let line = matrix[i]; //section changed var to let
    // for (var i = 0; i < line.length; i++) {
    for (let i = 0; i < line.length; i++) {//section changed var to let
      // var element = line[i]; 
      let element = line[i]; //section changed var to let
      console.log(element);
    }
  }
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);
