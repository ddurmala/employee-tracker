SELECT
    employees.id,
    employees.first_name,
    employees.last_name,
    roles.role_title,
    roles.salary,
    CONCAT (employees.first_name, ' ', employees.last_name) AS manager_name,
    departments.dept_name AS department_name
FROM
    employees
LEFT JOIN roles ON employees.role_id = roles.id
LEFT JOIN employees AS manager ON employees.manager_id = manager.id
LEFT JOIN departments ON roles.department_id = departments.id
ORDER BY employees.id;
