//query selector variables go here 👇
var a = document.getElementById('shrinkBtn');
var b = document.getElementById('growBtn');
var c = document.getElementById('resetBtn');

//global variables go here 👇

//event listeners go here 👇
shrinkBtn.addEventListener('click', shrinkButton);
growBtn.addEventListener('click', growButton);
resetBtn.addEventListener('click', resetButton);


//functions and event handlers go here 👇
function shrinkButton() {
  document.getElementById("box").style.height = "25px";
}

function growButton() {
  document.getElementById("box").style.height = "250px";
}

function resetButton() {
  document.getElementById("box").style.height = "150px";
}