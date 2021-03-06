var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
  let email = localStorage.getItem('email');
  let password = localStorage.getItem('password');

  userEmailSpan.textContent = email ? email : 'hello@gmail.com';
  userPasswordSpan.textContent = password ? password : 'password placeholder'
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // TODO: Save email and password to localStorage and render the last registered user
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  let user = {
    'email': email, 
    'password': password
  }

  // localStorage.setItem('user', {'email': email, 'password': password});

  // Put the object into storage
  localStorage.setItem('user', JSON.stringify(user));

  // Retrieve the object from storage
  var user2 = localStorage.getItem('user');
  var user3 = JSON.parse(user2);

  console.log('user2: ', JSON.parse(user2), user3, user3.email, user3.password, {user3});
  console.log({user2})

  renderLastRegistered();
  }
});

// As a developer, I want to save the user's email and password to client-side storage and render the last submission to the page.

// Acceptance Criteria
// It's done when Last Registered User displays the last email and password saved using localStorage, if it exists.

// It's done when, once the signUpButton is clicked, the email and password entered into the text boxes is saved using localStorage.

// It's done when the information under Last Registered User is updated to reflect the data stored using localStorage.
