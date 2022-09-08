-- SOURCE schema.sql

DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE products(
  -- id INT NOT NULL,
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

SHOW DATABASES;
SHOW TABLES;
DESCRIBE products;
SELECT * FROM products;
