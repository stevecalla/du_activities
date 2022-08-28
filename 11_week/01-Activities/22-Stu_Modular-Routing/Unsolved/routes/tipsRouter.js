const express = require('express')
const tipsRouter = express.Router();

// Helper method for generating unique ids
const uuid = require('../helpers/uuid');

const { readFromFile, readAndAppend } = require('../helpers/fsUtils'); //section

// middleware that is specific to this router
tipsRouter.use((req, res, next) => {
  console.log('Time: ', new Date().toString())
  next()
})

// GET Route for retrieving all the tips
tipsRouter.get('/', (req, res) => {
  console.info(`${req.method} request received for tips`);
  readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route forclear a new UX/UI tip
tipsRouter.post('/', (req, res) => {

  console.info(`${req.method} request received to add a tip`);
  console.log('2 =', req.body); //section

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

module.exports = tipsRouter;