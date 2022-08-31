const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
// const { readFromFile, readAndAppend } = require('./helpers/fsUtils'); //section
// const tipsRouter = require("./routes/tipsRouter"); //section
// const feedbackRouter = require("./routes/feedbackRouter"); //section
const api = require("./routes/index"); //section

// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api); //section

app.use(express.static('public'));

// GET Route for homepage //section leave this section b/c it's the homepage
//section do we need this get b/c express static handles it?
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// GET Route for feedback page //section leave this section b/c it's the homepage for feedback
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

//section moved tips to tipsRouter.js
//section moved feedback to feedbackRouter.js

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
