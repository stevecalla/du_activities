-- Write your schema here --
DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE products (
  id INT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL,
  price INT NOT NULL,
  in_stock BOOLEAN NOT NULL,
  date_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE categories (
  id INT NOT NULL,
  category_name VARCHAR(30) NOT NULL,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

SHOW DATABASES;
SHOW TABLES;
DESCRIBE products;
SELECT * FROM products;
DESCRIBE categories;
SELECT * FROM categories;