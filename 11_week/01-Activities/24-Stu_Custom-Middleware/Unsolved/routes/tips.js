const tips = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

//section
const middleware = (req, res, next) => {
  // ANSI escape code that instructs the terminal to print in yellow
  const yellow = '\x1b[33m%s\x1b[0m';

  // Log out the request type and resource
  console.log(yellow, `\n${req.method} request to ${req.path} hello`);

  // Built-in express method to call the next middleware in the stack.
  next();
};

tips.use(middleware);

//section

// GET Route for retrieving all the tips
tips.get('/', (req, res) => {
  readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
tips.post('/', (req, res) => {
  const { username, topic, tip } = req.body;

  if (req.body) {
    const newTip = {
      username,
      tip,
      topic,
      tip_id: uuid(),
    };

    readAndAppend(newTip, './db/tips.json');
    res.json(`Tip added successfully 🚀`);
  } else {
    res.error('Error in adding tip');
  }
});

module.exports = tips;
