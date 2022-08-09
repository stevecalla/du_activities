fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  cache: "reload"
  // cache: "default"
  // cache: "no-cache"
})
  .then(function (response) {
    console.log(response)
    console.log(response.headers.get('etag'))
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
