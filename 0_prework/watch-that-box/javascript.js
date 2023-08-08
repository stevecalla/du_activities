//query selector variables go here 👇
var growBtn = document.getElementById('button1');
var blueBtn = document.getElementById('button2');
var fadeBtn = document.getElementById('button3');
var circleBtn = document.getElementById('button4');
var resetBtn = document.getElementById('button5');
var box_container = document.getElementById("box");

var box_height = document.getElementById("box").style.height;
var box_width = document.getElementById("box").style.width;
// document.getElementById("box").style.opacity = '1'; //need to console log opacity during testing
var box_opacity = document.getElementById("box").style.opacity;
var box_borderRadius = document.getElementById("box").style.borderRadius;

//global variables go here 👇

//event listeners go here 👇
growBtn.addEventListener('click', growButton);
blueBtn.addEventListener('click', blueButton);
fadeBtn.addEventListener('click', fadeButton);
circleBtn.addEventListener('click', circleButton);
resetBtn.addEventListener('click', resetButton);

//functions and event handlers go here 👇

function growButton() {
  // original code to grow to fixed height/width
  // document.getElementById("box").style.height = "25px";
  // box_container.style.height = "200px";
  // box_container.style.width = "200px";


  // revised code to continuously grow box

  // use parseInt to convert px to a number, add 25px then convert back to px unit
  box_height = parseInt(box_height, 10) + parseInt('25px', 10) + 'px';
  box_width = parseInt(box_width, 10) + parseInt('25px', 10) + 'px';

  box_container.style.height = box_height;
  box_container.style.width = box_width;
}

function blueButton() {
  // original code fixed change to blue
  // document.getElementById("box").style.backgroundColor = "blue";
  // box_container.style.backgroundColor = "blue";
  // box_container.style.opacity = box_opacity;

  // revised code allows user to flip back and forth b/ blue and orange
  if (blueBtn.textContent === 'Blue') {
    box_container.style.backgroundColor = "blue";
    box_container.style.opacity = box_opacity;
    blueBtn.textContent = "Orange";
  } else {
    box_container.style.backgroundColor = "Orange";
    box_container.style.opacity = box_opacity;
    blueBtn.textContent = "Blue";
  }
}

function fadeButton() {
  // original code to fixed opacity
  // document.getElementById("box").style.opacity = "0.50";
  // box_container.style.opacity = "0.50";

  // revised code to gradually fade the opacity
  if (box_opacity < 0.2) {
    box_opacity = 1;
    box_container.style.opacity = box_opacity;
  } else {
    console.log(box_opacity);
    box_opacity -= 0.1;
    box_container.style.opacity = box_opacity;
    console.log(box_opacity);
  }
}

function circleButton() {
  // original code had a fixed function to change to a circle
  // document.getElementById("box").style.borderRadius = "50%";

  // revised code changes to a circle and button text to a square so user can change back to a square
  if (circleBtn.textContent === 'Circle') {
    box_container.style.borderRadius = "50%";
    circleBtn.textContent = "Square";
  } else {
    box_container.style.borderRadius = "0";
    circleBtn.textContent = "Circle";
  }
}

function resetButton() {
  //Original code for fixed values
  // document.getElementById("box").style.height = "150px";
  // document.getElementById("box").style.backgroundColor = "orange";
  // document.getElementById("box").style.opacity = "1";
  // document.getElementById("box").style.borderRadius = "0%";

  // revised code to align variable values for height, width, opacity
  box_height = "150px";
  box_width = "150px";
  box_opacity = "1"

  box_container.style.height = box_height;
  box_container.style.width = box_width;
  box_container.style.backgroundColor = "orange";
  box_container.style.opacity = box_opacity;
  box_container.style.borderRadius = "0%";

  growBtn.textContent = "Grow";
  blueBtn.textContent = "Blue";
  fadeBtn.textContent = "Fade";
  circleBtn.textContent = "Circle";

}

// HELPING ANOTHER STUDENT
// Need to add quotes, change background-color to backgroundColor, result = only changes back to orange
// document.getElementById("button5").addEventListener("click", function() {
//   document.getElementById("box").style.backgroundColor = "orange";height:"150px"; width:"150px";});

// document.getElementById("resetBtn").addEventListener("click", function(){
//   document.getElementById("box").style.backgroundColor = "yellow";});
//   document.getElementById("resetBtn").addEventListener("click", function(){
//   document.getElementById("box").style="height: 150px; width:150px";
// });

// this works
// document.getElementById("button5").addEventListener("click", function() {
//   document.getElementById("box").style.backgroundColor = "orange";
//   document.getElementById("box").style.height = "150px";
//   document.getElementById("box").style.width = "150px";
// });

// Resources
// Click Event: https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
// link above also shows how to change button text content
// ParseInt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// CSS Transitions: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
// StackOverflow: Combining getElementby with style 
// - https://stackoverflow.com/questions/29017379/how-to-make-fadeout-effect-with-pure-javascript
// StackOverflow: Using parseInt to add to px values
// - https://stackoverflow.com/questions/9333036/add-javascript-pixel-values