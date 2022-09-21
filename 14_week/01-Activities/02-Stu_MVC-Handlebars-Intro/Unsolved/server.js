// Dependencies
const express = require('express');
const exphbs = require('express-handlebars'); //section load handlebars
const path = require('path');
const hbs = exphbs.create({}); //section create a new instance of handlebars express engine


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Describe what the following two lines of code are doing.
//section it is setting up express to use the handlebars engine for files with the extension "handlebars"
app.engine('handlebars', hbs.engine); //section telling express about handlebars engine
app.set('view engine', 'handlebars'); //section overwrite the express view engine with handlebars


app.use(express.static(path.join(__dirname, 'public'))); //section root director
app.use(require('./controllers/dish-routes')); //section define controllers

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
