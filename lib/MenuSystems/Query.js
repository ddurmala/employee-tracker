const pool = require('../../db/connections');

class Query {
    static async addDepartment(answerObj) {

        const sql = `INSERT INTO departments (dept_name) VALUES ($1);`;

        await pool.query(sql, [answerObj.dept_name]);

        console.log('Department successfully added!\n');

        console.log(answerObj.dept_name);

    }

    static async addRole(answerObj) {

        const sql = `INSERT INTO roles (role_title, salary, department_id) VALUES ($1, $2, $3);`;

        await pool.query(sql, [answerObj.role_title, answerObj.salary, answerObj.department_id]);

        console.log('Role successfully added!\n');

        // console.log(answerObj.role_title);

    }

    static async addEmployee(answerObj) {

        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4);`;

        await pool.query(sql, [answerObj.first_name, answerObj.last_name, answerObj.role_id, answerObj.manager_id]);

        console.log('Role successfully added!\n');

        // console.log(answerObj.role_title);

    }

    static async getAllEmployees() {

        await pool.connect();

        const sql = 'SELECT * FROM employees';

        const result = await pool.query(sql);

        return result.rows;

    }

    // static async getAllRoles() {

    //     await pool.connect();

    //     const sql = 'SELECT * FROM roles';

    //     const result = await pool.query(sql);

    //     return result.rows;
    // }

    // static async getAllManagers() {

    //     await pool.connect();

    //     const sql = 'SELECT * FROM roles';

    //     const result = await pool.query(sql);

    //     return result.rows;
    // }
}

module.exports = Query;