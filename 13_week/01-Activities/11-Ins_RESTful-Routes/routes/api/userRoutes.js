const router = require('express').Router();
const User = require('../../models/User');

// This route uses async/await with '.catch()' for errors
// and no HTTP status codes
router.get('/', async (req, res) => {
  const userData = await User.findAll().catch((err) => {
    res.json(err);
  });
  res.json(userData);
});

// This route uses async/await with try/catch for errors
// along with HTTP status codes
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    // 200 status code means the request is successful
    console.log('hello', req.body)
    res.status(200).json(userData);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(500).json('error', err);
  }
});

module.exports = router;
