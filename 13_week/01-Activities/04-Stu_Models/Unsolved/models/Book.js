const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    book_id: { //section: added this field to override the auto id, added primary key below
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    isbn: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    edition: {
      type: DataTypes.INTEGER
    },
    is_paperback: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'book'
    // freezeTableName: true //section: added to prevent auto plurilization; can also add in the connection.js so this is applied globally for all tables
  }
);

module.exports = Book;
