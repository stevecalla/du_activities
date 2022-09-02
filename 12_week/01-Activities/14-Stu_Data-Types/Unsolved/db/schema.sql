DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

USE customer_db;

CREATE TABLE customers (
  id,
  first_name,
  last_name,
  value_card_member,


  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  value_card_member BOOLEAN NOT NULL, 
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL

);
