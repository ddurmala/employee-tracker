const inquirer = require('inquirer');

// const pool = require('../../db/connections');

require('console.table');

const Query = require('./MenuSystems/Query');

class UpdateSubset {

    static async handleUpdateOptions(init) {

        const employees = await Query.getAllEmployees();

        const employeeChoices = employees.map(employee => (
            {
                name: `${employee.first_name} ${employee.last_name}`,
                value: employee.id
            }
        ));

        const { employeeId } = await inquirer.prompt(
            {
                type: 'list',
                name: 'employeeId',
                message: 'Please choose an employee to update: ',
                choices: employeeChoices
            }
        );

        const { updateOption } = await inquirer.prompt(
            {
                type: 'list',
                name: 'updateOption',
                message: 'What would you like to update?',
                choices: ['Update Role', 'Update Manager']
            }
        );

        if (updateOption === 'Update Role') {
            const roles = await Query.getAllRoles();

            const roleChoices = roles.map(role => (
                {
                    // check if this is correct name both "role and ".role_title
                    name: role.role_title,
                    value: role.id
                }
            ));

            const { roleId } = await inquirer.prompt(
                {
                    type: 'list',
                    name: 'roleId',
                    message: 'Choose a new role',
                    choices: roleChoices
                }
            );

            await Query.updateEmployeeRole(employeeId, roleId);

            console.log('Employee role updated successfully.');

        } else if (updateOption === 'Update Manager') {

            const managers = await Query.getAllManagers();

            const managerChoices = managers.map(manager => (
                {
                    name: `${manager.first_name} ${manager.last_name}`,
                    value: manager.id
                }
            ));

            const { managerId } = await inquirer.prompt(
                {
                    type: 'list',
                    name: 'managerId',
                    message: 'Please choose a new manager.',
                    choices: managerChoices
                }
            );

            await Query.updateEmployeeManager(employeeId, managerId);

            console.log('Employee manager updated successfully.')
        }

        const { continueOption } = await inquirer.prompt(
            {
                type: 'list',
                name: 'continueOption',
                message: 'What would you like to do next?',
                choices: ['Return to Main Menu', 'EXIT']
            }
        );

        if (continueOption === 'Return to Main Menu') {
            init();
        } else {
            process.exit(0);
        }

    }

};

module.exports = UpdateSubset;
