const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
  //section joins Reader w/ LibraryCard model/table using a one to one relationship such that one reader has one library card and creating the reader_id as a foreign key in the Library Card model / table joined to the reader primary key id
  onDelete: 'CASCADE',
  //section onDelete will ensure that if a reader is deleted the associated library card will also be deleted
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
module.exports = { Reader, LibraryCard };
//section exports the Reader and Library card models (likely to the router file?)
