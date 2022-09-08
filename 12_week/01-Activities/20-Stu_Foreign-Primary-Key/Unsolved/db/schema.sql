-- Write your Schema Here -- 
DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE customers (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE customer_order (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  customer_id INT,
  order_details TEXT,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);

SHOW DATABASE;
SHOW TABLES;
DESCRIBE customers;
DESCRIBE customer_order;
