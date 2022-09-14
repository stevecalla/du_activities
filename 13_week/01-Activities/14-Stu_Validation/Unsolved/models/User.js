const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

// TODO: Add validations to the User model

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      //todo It's done when it prevents null values from being entered for the username, email, and password fields.
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      //todo: it's done when it prevents the username from having any characters other than letters and numbers.
      validate: {
        isAlphanumeric: true
      }
    },
    email: {
      type: DataTypes.STRING,
      //todo It's done when it prevents null values from being entered for the username, email, and password fields.
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      //todo It's done when it prevents null values from being entered for the username, email, and password fields.
      allowNull: false,
      // todo: It's done when it prevents the password from being shorter than eight characters.
      validate: {
        len: [8],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
