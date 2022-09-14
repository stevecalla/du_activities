const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define: {
      freezeTableName: true
    } //section: added to prevent auto plurilization; can also add in the table (e.g. Book.js) so this is applied for a specific table not globally
  }
);

module.exports = sequelize;
