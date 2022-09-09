INSERT INTO department (name)
VALUES ("Web Development"),
       ("Data Science"),
       ("Math"),
       ("Electives");

INSERT INTO course_names (name, department)
VALUES ("Intro to JavaScript", 1),
       ("Data Science", 2),
       ("Linear Algebra", 3),
       ("History of the Internet", 4),
       ("Machine Learning", 4),
       ("Game Design", 1 ),
       ("Cloud Development", 1);
       
SHOW tables;
DESCRIBE department;
DESCRIBE course_names;
SELECT * FROM departments;
SELECT * FROM course_names;
SOURCE query.sql;