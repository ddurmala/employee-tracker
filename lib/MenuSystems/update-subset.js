const inquirer = require('inquirer');

const pool = require('../../db/connections');

require('console.table');

const Query = require('./Query');

class UpdateSubset {
    static async viewAllEmployees() {

        await pool.connect();

        const sql = `SELECT * FROM employees`;

        const data = await client.query(sql);

        console.table(data.rows);
    }

    static async updateEmployeeRole() {

        await pool.connect();

        const employees = await Query.getAllEmployees();
        const answerObj = await inquirer.prompt([
            {
                type: 'list',
                name: 'selectedEmployee',
                message: 'choose an employee to update:',
                choices: employees.map(employee => (
                    {
                        name: `${employee.first_name} ${employee.last_name}`,
                        value: employee.id
                    }
                ))
            }
        ]);

        const selectedEmployeeId = answerObj.selectedEmployee;

        const updatedRole = await inquirer.prompt([
            {
                type: 'input',
                name: 'newRole',
                message: 'Enter new role:'
            }
        ]);

        const sql = 'UPDATE employees SET role = $1 WHERE id = $2';

        await pool.query(sql, [updatedRole.newRole, selectedEmployeeId]);

        console.log('Employee role updated.')
    }

    static async updateEmployeeManager() {

        await pool.connect();

        const employees = await Query.getAllEmployees();
        const answerObj = await inquirer.prompt([
            {
                type: 'list',
                name: 'selectedEmployee',
                message: 'choose an employee to update:',
                choices: employees.map(employee => (
                    {
                        name: `${employee.first_name} ${employee.last_name}`,
                        value: employee.id
                    }
                ))
            }
        ]);

        const selectedEmployeeId = answerObj.selectedEmployee;

        const updatedManger = await inquirer.prompt([
            {
                type: 'input',
                name: 'newManager',
                message: 'Enter new manager:'
            }
        ]);

        const sql = 'UPDATE employees SET manager = $1 WHERE id = $2';

        await pool.query(sql, [updatedManger.newManager, selectedEmployeeId]);

        console.log('Employee\'s manager updated.')
    }

}

module.exports = UpdateSubset;
