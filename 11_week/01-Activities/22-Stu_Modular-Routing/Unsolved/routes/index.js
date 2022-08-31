const express = require('express');

// Import custom middleware
// const { clog } = require('../middleware/clog');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tipsRouter');
const feedbackRouter = require('./feedbackRouter');

const app = express();

app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);

// Initialize custom middleware
// app.use(clog);

module.exports = app;