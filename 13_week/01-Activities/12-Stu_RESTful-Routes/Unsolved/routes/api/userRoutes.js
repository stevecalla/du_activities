const router = require('express').Router();
const User = require('../../models/User');

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    // console.log('user = ', userData);

    //alternative with ternary
    // res.status(user ? 200 : 404).json(userData ? userData : {"message": "No user with this id!"});

    if (userData) {
      res.status(200).json(userData)
    } else if (!userData) {
      res.status(404).json({"message": "No user with this id!"})
    }

  } catch (e) {
    console.log(e)
    res.status(500).json({"message": "Internal server error"});
  }
  res.end();
});

// UPDATE a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      }
    });

    if (userData) {
      const updatedUser = await User.findOne({ where: { id: req.params.id } });
      return res.status(200).json({ user: updatedUser });
    } else {
      res.status(400).json("message: No user with this id!");
    }
  } catch (error) {
    console.log('error')
    res.status(500).json("message: Internal server error");
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      }
    },
    // res.json(userData)
    res.status(200).json(userData)
    );
  } catch (error) {
    res.status(500).json('error', error);
  }
});

module.exports = router;
