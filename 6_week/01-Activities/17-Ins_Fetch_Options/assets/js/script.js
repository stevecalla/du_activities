let requestURL = 'https://api.github.com/repos/nodejs/node/issues?per_page=5';
// let requestURL = 'https://www.google.com';
// let requestURL = 'https://stevecalla.github.io/bessie-the-dog/index.html';


fetch(requestURL, {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
  // credentials: 'same-origin',
  // mode: 'no-cors'
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
