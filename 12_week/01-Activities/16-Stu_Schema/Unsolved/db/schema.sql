-- SOURCE schema.sql

-- Write your schema here --
DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL,
  price INT NOT NULL,
  in_stock BOOLEAN NOT NULL,
  date_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE categories (
  id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(30) NOT NULL,
  date_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);


SHOW DATABASES;
SHOW TABLES;
DESCRIBE products;
SELECT * FROM products;
DESCRIBE categories;
SELECT * FROM categories;