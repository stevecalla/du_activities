const router = require('express').Router();
const { User} = require('../models')

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    const dbUsersData = await User.findAll();

    const users = dbUsersData.map((user) =>
      user.get({ plain: true })
    )
    .sort((a, b) => 
      {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
    });

    res.render('homepage', { users });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  // res.render('homepage');
});

module.exports = router;
