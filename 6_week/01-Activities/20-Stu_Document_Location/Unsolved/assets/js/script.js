var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl)
  .then(function (response) {
  // Use a conditional to check the response status.
  if (response.status === 404) {
    console.log('bad')
    // document.location.href = "./404.html"
    document.location.href = redirectUrl;
  }
  // If that status equals the conditional, then redirect to the 404 page.
});
