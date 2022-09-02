DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
USE books_db;

-- Add biography table --
USE books_db;

CREATE TABLE biography (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);

SHOW TABLES;
DESCRIBE biography;




