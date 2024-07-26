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
        const sql = `SELECT * FROM roles;`;
        // have to fix so we only see the role names

        const data = await client.query(sql);

        console.table(data.rows);
    }

    static async viewAllEmployees() {
        const sql = `SELECT * FROM employees;`;

        const data = await client.query(sql);

        console.table(data.rows);
    }
}

module.exports = viewSubset;