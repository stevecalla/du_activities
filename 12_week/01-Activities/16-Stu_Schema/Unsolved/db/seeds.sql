-- SOURCE seeds.sql
USE grocery_db;

INSERT INTO categories (category_name)
VALUES ("abc"),
       ("def");

SELECT * FROM categories;

INSERT INTO products (product_name, category_name, price, in_stock)
VALUES ("xyx", "abc", 9, true),
       ("XYZ", "def", 9, false);

SELECT * FROM products;