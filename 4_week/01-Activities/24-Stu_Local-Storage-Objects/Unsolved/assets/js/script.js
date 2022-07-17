var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submissio
  let user = {
    "firstName": firstNameInput.value,
    "lastName": lastNameInput.value,
    "Email": emailInput.value,
    "password": passwordInput.value,
  }
  
  console.log(user);

  // TODO: Set new submission to local storage 
  localStorage.setItem('user', JSON.stringify(user));

  localStorage.setItem('firstName', user.firstName);
  localStorage.setItem('lastName', user.lastName);
  localStorage.setItem('email', user.Email);
  localStorage.setItem('password', user.password);

  // localStorage.setItem('firstName2', JSON.stringify(user.firstName));
  
});
