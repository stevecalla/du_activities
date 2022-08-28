const fb = require('express').Router();
const app = require('.');
const { readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

//section
// const middleware = (req, res, next) => {
//   // ANSI escape code that instructs the terminal to print in yellow
//   const yellow = '\x1b[33m%s\x1b[0m';

//   // Log out the request type and resource
//   console.log(yellow, `${req.method} request to ${req.path} ${req.body}`);

//   // Built-in express method to call the next middleware in the stack.
//   next();
// };

// fb.use(middleware);
//section

// GET Route for retrieving all the feedback
fb.get('/', (req, res) =>
  readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
fb.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { email, feedbackType, feedback } = req.body;

  // If all the required properties are present
  if (email && feedbackType && feedback) {
    // Variable for the object we will save
    const newFeedback = {
      email,
      feedbackType,
      feedback,
      feedback_id: uuid(),
    };

    readAndAppend(newFeedback, './db/feedback.json');

    const response = {
      status: 'success',
      body: newFeedback,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});

module.exports = fb;
