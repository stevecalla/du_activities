// TODO: Import express
const express = require('express'); //section
// const path = require('path'); //section
const terms = require('./terms.json') //section

// TODO: Import 'terms.json' file
const app = express(); //section
const PORT = 5001;

app.get('/', function (req, res) {
  res.send('Hello World')
}) //section
// TODO: Initialize app variable
// app.use(express.static('Unsolved')); //section

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/a', (req, res) =>
res.send('hello')
); //section

// app.get('/terms', (req, res) =>
//   res.sendFile(path.join(__dirname, 'terms.json'))
// ); //section

app.get('/api/terms', (req, res) =>
  res.json(terms)
); //section

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
