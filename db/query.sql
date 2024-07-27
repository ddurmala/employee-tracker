
SELECT
    CONCAT(employees.first_name, ' ', employees.last_name) AS full_name FROM employees;

INSERT INTO departments (dept_name) VALUES ($1)