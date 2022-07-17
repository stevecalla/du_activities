// function keydownAction(event) {
//   // TODO: Complete keydown function
// }

// function keyupAction() {
//   document.querySelector("#status").innerHTML = "KEYUP Event";
// }

// document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event



// As a developer, I want to display the value and code of a pressed key.
// Acceptance Criteria

// It's done when, if a key is pressed down, the value of the key and the key's code is displayed. KEYDOWN Event should also be displayed to indicate the type of event.

// It's done when, if the key is released, KEYUP Event is displayed. See line 39; uses the same function

//section:query selector variables go here 👇
let keyValue = document.getElementById('key');
let keyCode = document.getElementById('code');
let eventType = document.getElementById('status');

//section:global variables go here 👇

//section:event listeners go here 👇
document.addEventListener('keydown', keyInformation);
document.addEventListener('keyup', keyInformation);
// document.addEventListener('keypress', keyInformation);

//section:functions and event handlers go here 👇
function keyInformation(event) {
  console.log(event)
  console.log(event.key, event.code, event.keyCode, event.type);
  keyValue.innerText = event.key.toUpperCase();
  keyCode.innerText = event.keyCode;
  eventType.innerText = event.type;
}