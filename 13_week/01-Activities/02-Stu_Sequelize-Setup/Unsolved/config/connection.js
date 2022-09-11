const Sequelize = require('sequelize');
// require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PW,
  {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
  }
);

// const sequelize = new Sequelize(
//   'library_db',
//   'root',
//   'denverdenver',
//   {
//     dialect: 'mysql',
//     host: 'localhost',
//     port: 3306
//   }
// );

module.exports = sequelize;
