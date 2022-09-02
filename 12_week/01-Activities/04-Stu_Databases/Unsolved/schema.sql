-- Write code here or enter directly in MySQL shell --

-- //todo It's done when sample_db is dropped and longer appears on the list of all databases.

-- Delete sample_db --
CREATE DATABASE sample_db;
SHOW DATABASES;
DROP DATABASE IF EXISTS sample_db;
SHOW DATABASES;

-- //todo It's done when a new books_db database is created and selected for use.

-- Create two books_db databases --
DROP DATABASE IF EXISTS inventory_db;
SHOW DATABASES;
CREATE DATABASE books_db;
SHOW DATABASES;

-- Use inventory_db --
USE books_db;

-- See database in use --
SELECT DATABASE();


