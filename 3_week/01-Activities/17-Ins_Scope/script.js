// A variable declared in global scope is available to all functions
var hello = "Hello"; 

function sayHello() {
  console.log(hello);
  return;
}

var sayHelloAgain = function () {
  console.log(hello);
  return;
};

sayHello();
sayHelloAgain();

//A variable declared in local scope is only available to that function
function sayGoodbye() { 
  var goodbye = "Goodbye";
  console.log(goodbye);
  return;
}

//This will throw an error
var sayGoodbyeAgain = function () { 
  console.log('goodbye not available');
  console.log(goodbye);
  return;
};

sayGoodbye();
// sayGoodbyeAgain();

// Shadowing happens when the same variable is used in the local and global scope
// bad programming practice; rather reassign the variable or create a differently named variable

var shadow = "Hello";
 console.log(shadow);

// Logs "Hello"
function sayWhat() {
  console.log(shadow);
  return;
}

//Logs "Goodbye"
var sayWhatAgain = function () {
  var shadow = "Goodbye";
  console.log(shadow);   
};

sayWhat();
sayWhatAgain();
