fetch('https://api.github.com/gists/public?since=2020-06-01&per_page=100')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // for (let i = 0; i < data.length; i++) {
    //   data[i].description !== "" ? console.log(data[i].description) : console.log('whatever')
    // }

    // data.filter(element => element.description)
    data.filter(element => !element.description)
      .forEach((element,index) => {
        console.log(`${index}) ${element.description}`)})
  });
