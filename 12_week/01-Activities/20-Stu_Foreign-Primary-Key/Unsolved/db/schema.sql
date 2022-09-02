-- Write your Schema Here -- 
DROP DATABASE IF EXISTS restuarant_db;
CREATE DATABASE restuarant_db;

USE restuarant_db;

CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE customer_order (
  id INT NOT NULL AUTO_INCREMENT,
  customer_id VARCHAR(30) NOT NULL,
  order_details TEXT NOT NULL,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);