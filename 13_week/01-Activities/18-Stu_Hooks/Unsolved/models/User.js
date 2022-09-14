const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    // TODO: Add hooks here
    // When adding hooks via the init() method, they go below
    // todo: It's done when User.init() includes Hooks to hash the user's password before it is created.
    hooks: {
      // Use the beforeCreate hook to work with data before a new instance is created
      beforeCreate: async (newUserData) => {

        newUser.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // todo: It's done when User.init() includes Hooks to hash the user's password before it is updated, only if a password is provided in the payload.
      beforeUpdate: async (updatedUserData, options) => {
        if (options.fields.includes("password")) {
          updatedUserData.password = await bcrypt.hash(
            updatedUserData.password, 
            10
          );
        }
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
