const pool = require('../../db/connections');
const handleAddOptions = require('../add-menu');
const UpdateSubset = require('../update-menu');

const viewSubset = require('./view-subset');

class Query {
    static async addDepartment(answerObj, handleAddOptions, init) {

        const sql = `INSERT INTO departments (dept_name) VALUES ($1);`;

        await pool.query(sql, [answerObj.dept_name]);

        console.log('Department successfully added!\n');

        viewSubset.viewAllDepartments(handleAddOptions, init);

    }

    static async addRole(answerObj, handleAddOptions, init) {

        const sql = `INSERT INTO roles (role_title, salary, department_id) VALUES ($1, $2, $3);`;

        await pool.query(sql, [answerObj.role_title, answerObj.salary, answerObj.department_id]);

        console.log('Role successfully added!\n');

        viewSubset.viewAllRoles(handleAddOptions, init)

    }

    static async addEmployee(answerObj, handleAddOptions, init) {

        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4);`;

        await pool.query(sql, [answerObj.first_name, answerObj.last_name, answerObj.role_id, answerObj.manager_id]);

        console.log('Role successfully added!\n');

        viewSubset.viewAllEmployees(handleAddOptions, init);

        // console.log(answerObj.role_title);

    }

    static async getAllEmployees() {

        await pool.connect();

        const sql = 'SELECT * FROM employees';

        const result = await pool.query(sql);

        return result.rows;

    }

    static async getAllRoles() {

        await pool.connect();

        const sql = 'SELECT * FROM roles';

        const result = await pool.query(sql);

        return result.rows;
    }

    static async getAllManagers() {

        await pool.connect();

        const sql = 'SELECT * FROM employees WHERE is_manager = true';

        const result = await pool.query(sql);

        return result.rows;
    }

    static async updateEmployeeRole(employeeId, newRoleId) {

        await pool.connect();

        const sql = 'UPDATE employees SET role_id = $1 WHERE id = $2';

        const values = [newRoleId, employeeId];

        const result = await pool.query(sql, values);

        return result.rows;

    }

    static async updateEmployeeManager(employeeId, newManagerId) {

        await pool.connect();

        const sql = 'UPDATE employees SET manager_id = $1 WHERE id = $2';

        const values = [newManagerId, employeeId];

        const result = await pool.query(sql, values);

        return result.rows;
    }
}

module.exports = Query;