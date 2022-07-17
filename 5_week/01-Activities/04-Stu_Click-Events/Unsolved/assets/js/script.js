// var passwordBtnEl = $('.password-btn'); //section:original
var passwordBtnEl = $('#password-btn'); //section:changed to an idea; original on line#!
var passwordDisplayEl = $('#password-display');

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

// passwordBtnEl.on('dblclick', function () { //section:original
passwordBtnEl.on('click', function () { //section:adjusted to click from dblclick
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});

//section:put dblclick on the same as the click
passwordBtnEl.on('dblclick', function () { //section:adjusted to click from dblclick
  passwordDisplayEl.text("doubled");
});

//section:use both click and double click to execute the same function
function useBothClickAndDoubleClick() { //section:adjusted to click from dblclick
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
};

passwordBtnEl.on('dblclick', useBothClickAndDoubleClick);


passwordBtnEl.on('click', useBothClickAndDoubleClick);
