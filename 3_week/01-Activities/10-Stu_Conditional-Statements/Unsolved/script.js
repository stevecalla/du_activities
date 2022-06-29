// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25);
var expression2 = (x > 50);

// Write Your JavaScript Code Here
// TODO: It's done when the message "True ✅ True ✅" is logged when both expression1 and expression2 are true.
console.log(expression1, expression2);
if (!expression1 && !expression2) {
  console.log(`${!expression1} ✅ ${!expression2} ✅`);
}

// TODO: It's done when the message "True ✅ False ❌" is logged when expression1 is true.
if (!expression1) {
  console.log(`${!expression1} ✅ ${expression2} ❌`);
}

// TODO: It's done when the message "False ❌ True ✅" is logged when expression2 is true.
if (!expression2) {
  console.log(`${expression1} ❌ ${!expression2} ✅`);
}

// TODO: It's done when the message "False ❌ False ❌" is logged when both expression1 and expression2 are false.
if (expression1 === false && expression2 === false) {
  console.log(`${expression1} ❌ ${expression2} ❌`);
}