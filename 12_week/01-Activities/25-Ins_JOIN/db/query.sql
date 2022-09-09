SELECT *
FROM course_names
JOIN department ON course_names.department = department.id;

SELECT c.id as course_id, c.name AS course_name, d.name AS dept_name
FROM course_names AS c
JOIN department AS d ON c.department = d.id;
