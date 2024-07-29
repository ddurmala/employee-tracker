const inquirer = require('inquirer');
const client = require('../../db/connections');

require('console.table');


class viewSubset {

    static async viewAllDepartments(init) {

        const sql = `SELECT * FROM departments;`;

        const data = await client.query(sql);

        console.table(data.rows);

        await init();

    }

    static async viewAllRoles(init) {

        const sql = `SELECT 
    roles.id,
    roles.role_title,
    roles.salary,
    departments.dept_name
FROM
    roles
LEFT JOIN departments ON roles.department_id = departments.id
ORDER BY roles.id`;

        // have to fix so we only see the role names

        const data = await client.query(sql);

        console.table(data.rows);

        await init();
    }

    static async viewAllEmployees(init) {

        const sql = `SELECT
    employees.id,
    employees.first_name,
    employees.last_name,
    roles.role_title,
    roles.salary,
    CONCAT (manager.first_name, ' ', manager.last_name) AS manager_name,
    departments.dept_name AS department_name
FROM
    employees
LEFT JOIN roles ON employees.role_id = roles.id
LEFT JOIN employees AS manager ON employees.manager_id = manager.id
LEFT JOIN departments ON roles.department_id = departments.id
ORDER BY employees.id
`;

        const data = await client.query(sql);

        console.table(data.rows);

        await init();
    }

}

module.exports = viewSubset;