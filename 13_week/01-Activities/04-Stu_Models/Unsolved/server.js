const express = require('express');
const sequelize = require('./config/connection');

const Book = require('./models/Book');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// todo: As a developer, I want a MySQL table with the same name as the Sequelize model.
//section used  freezeTableName: true to prevent auto plurilization and match the model name in the Book.js file //section

// todo: As a developer, I want a more descriptive primary key name in the MySQL table.
//section created book_id in the Book.js with primary key = true
