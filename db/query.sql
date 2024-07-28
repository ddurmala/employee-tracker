
SELECT
    CONCAT(employees.first_name, ' ', employees.last_name) AS full_name FROM employees WHERE is_manager = true;

