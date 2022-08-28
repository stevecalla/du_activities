const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  // Your code here
  res.send(`${req.method} request received (hello)`);
  // res.json(`${req.method} request received (hello)`);
});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req, res) => {
  // Your code here
  res.send(`${req.method} request received (hello)`);
  // res.json(`${req.method} request received (hello)`);
});

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  // Your code here

  const date = new Date().toString();
  res.send(`${req.method} request received ${date}`);
  // res.send(`${req.method} request received ${new Date().toString()}`);
  console.log(date);
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here
app.post('/api/upvotes', (req, res) => {
  // Your code here

  const date = new Date().toString();
  res.send(`${req.method} request received ${date}`);
  // res.send(`${req.method} request received ${new Date().toString()}`);
  console.log(date);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
