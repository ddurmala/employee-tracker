const inquirer = require('inquirer');

const pool = require('../../db/connections');

const Query = require('./Query');


class AddSubset {
    static async showAddDeptPrompt(init) {

        const answerObj = await inquirer.prompt([
            {
                type: 'input',
                name: 'dept_name',
                message: 'Enter new department name: '
            }
        ]);

        await Query.addDepartment(answerObj);

        await init();

    }

    static async showAddRolePrompt(init) {
        const { rows: departments } = await pool.query('SELECT * FROM departments');

        const answerObj = await inquirer.prompt([
            {
                type: 'input',
                name: 'role_title',
                message: 'Enter new role title: '
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter new role title\'s salary: '
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'Choose from the following departments:  ',
                choices: departments.map(deptObj => {
                    return {
                        name: deptObj.dept_name,
                        value: deptObj.id
                    }
                })
            }

        ]);

        await Query.addRole(answerObj);

        await init();
    }
    static async showAddEmployeePrompt(init) {
        const { rows: roles } = await pool.query('SELECT id, role_title FROM roles');
        const { rows: managers } = await pool.query('SELECT id, CONCAT(first_name, \' \', last_name) AS full_name FROM employees WHERE is_manager = true');

        const managersChoices = managers.map(managerObj => {
            return {
                name: managerObj.full_name,
                value: managerObj.id
            }
        });
        managersChoices.unshift({ name: 'None', value: null });

        const answerObj = await inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'Enter employee\'s first name: '
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Enter employee\'s last name: '
            },
            {
                type: 'list',
                name: 'role_id',
                message: 'Choose from the following roles:  ',
                choices: roles.map(rolesObj => {
                    return {
                        name: rolesObj.role_title,
                        value: rolesObj.id
                    }
                })
            },
            {
                type: 'confirm',
                name: 'is_manager',
                message: 'Is this employee a manager?',
                default: false
            },
            {
                type: 'list',
                name: 'manager_id',
                message: 'Choose from the following managers:  ',
                choices: managersChoices
            }

        ]);

        await Query.addEmployee(answerObj);

        await init();

    }

}

module.exports = AddSubset;