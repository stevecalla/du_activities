// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions
const shout = 'Shout'; // declared shout

function justShout() {
  console.log(shout + ", " + shout);
  return;
}

function shoutItAllOut() {
  console.log(shout + " it all out! ");
  return;
}

justShout();
shoutItAllOut();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function

function sayLions() {
  var animal = "Lions"; 
  console.log(animal);
  return;
}

function sayTigers() {
  const animal = 'Tigers'; // declared animal in sayTigers function
  console.log("and " + animal + " and "); 
  return;
}

sayLions();
sayTigers();

// TODO: The variable 'bears' should only declared once and 'sayBears' should return "Bears! OH MY!". 

function sayBears() {
  // var bears = "Pandas";
  var bears = "Bears"; // moved var bears from the global scope into the sayBears function; i guess I could have also kept in in the global scope and deleted var bears = "Pandas"
  console.log(bears + "! OH MY!");
  return;
}

sayBears();

// TODO: The variable 'sing' should be declared once in the local scope.

function singAlong() {
  var sing = "Sing"; // moved from global scope to the local scope
  // console.log(sing + ","); // commented out this console.log
  var singASong = function () {
    console.log(sing + " a Song.");
  };
  singASong();
}

singAlong();
