-- Add your code below and execute file in MySQL Shell --
SELECT * FROM book_prices;
SELECT * FROM favorite_books;

SELECT 
  * 
FROM book_prices AS p
JOIN favorite_books AS b 
ON p.id = b.id;