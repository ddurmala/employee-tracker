const inquirer = require('inquirer');
const client = require('../../db/connections');

require('console.table');


class viewSubset {
    static async viewAllDepartments() {
        const sql = `SELECT * FROM departments;`;

        const data = await client.query(sql);

        console.table(data.rows);
    }

    static async viewAllRoles() {
        const sql = `SELECT role_title FROM roles;`;
        // have to fix so we only see the role names

        const data = await client.query(sql);

        console.table(data.rows);
    }

    static async viewAllEmployees() {
        const sql = `SELECT
    CONCAT(employees.first_name, ' ', employees.last_name) AS full_name FROM employees;`;

        const data = await client.query(sql);

        console.table(data.rows);
    }

}

module.exports = viewSubset;