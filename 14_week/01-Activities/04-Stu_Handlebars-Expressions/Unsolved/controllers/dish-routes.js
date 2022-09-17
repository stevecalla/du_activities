const router = require('express').Router();

// We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const dishes = [
  {
    dish_name: 'French Bread with Brie Cheese',
    description: 'French baguette with warm brie',
  },
  {
    dish_name: 'Cheese Plate with Spanish Chorizo',
    description:
      'Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo',
  },
  {
    dish_name: 'Fish Tacos',
    description:
      'Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion',
  },
  {
    dish_name: 'Tropical Fruit Salad',
    description: 'Guava, papaya, pineapple, mango, and star fruit',
  },
  {
    dish_name: 'Pork Gyoza',
    description:
      'Homemade japanese dumplings stuffed with a pork and green onion filling',
  },
  {
    dish_name: 'Yebeg Tibs with Injera Bread',
    description:
      'Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere',
  },
  {
    dish_name: 'Cape Malay Curry',
    description: 'Chicken and vegitable curry dish with basmati rice',
  },
];

// Get all dishes
router.get('/', async (req, res) => {
  res.render('all');
});

// TODO: Add a route called `/dish/:num` below
// section
router.get('/dish/:num', async (req, res) => {

  console.log(dishes);

  let num = parseInt(req.params.num);
  num < 0 || num > dishes.length ? num = 0 : num = num;

  let name = dishes[num].dish_name;
  let desc = `Description: ${dishes[num].description}`;
  let test = dishes.map(element => element.dish_name);
  // let test2 = dishes.map(element => ({dish: element.dish_name}));

  console.log(test);
  // console.log(test2);

  res.render('dish', {dishes: test, dish_name: name, description: desc});

});

module.exports = router;
