var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      userContainer.textContent = "";
      data.forEach((user, index) => {
        let listItem = document.createElement('li');
        userContainer.append(listItem);
        listItem.textContent = `User: ${user.login}, URL: ${user.url}`;
        console.log(user.login, user.url);
      })
    });
}
fetchButton.addEventListener('click', getApi);
