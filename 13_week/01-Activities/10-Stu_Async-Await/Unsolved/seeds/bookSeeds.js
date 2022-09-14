const sequelize = require('../config/connection');

const Book = require('../models/Book');
const Library = require('../models/Library');

const bookSeedData = require('./bookSeedData.json');
const librarySeedData = require('./librarySeedData.json');

// TODO Use async / await to Refactor the seedDatabase function below
// const seedDatabase = () => {
const seedDatabase = async () => {
  // return sequelize.sync({ 
  //   force: true 
  // })
  // .then(() => {
  //   Book.bulkCreate(bookSeedData)
  //   .then(() => {
  //     Library.bulkCreate(librarySeedData)
  //     .then(() => {
  //       console.log('All Seeds Planted'); 
  //     });
  //   });
  // });

  await sequelize.sync({ force: true });
  // const books = await Book.bulkCreate(bookSeedData);
  //section: nothing being passed; don't need to assign variable
  await Book.bulkCreate(bookSeedData);
  // const libraries = await Library.bulkCreate(librarySeedData);
  //section: nothing being passed; don't need to assign variable
  await Library.bulkCreate(librarySeedData);

  console.log('All Seeds Planted'); 
  process.exit(0);
};

seedDatabase();
