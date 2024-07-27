
const inquirer = require('inquirer');

const pool = require('../db/connections');

const AddSubset = require('./MenuSystems/add-subset');



const addMenu = [
    {
        name: 'Add Departments',
        value: 'addDepartments'
    },
    {
        name: 'Add Roles',
        value: 'addRoles'
    },
    {
        name: 'Add Employees',
        value: 'addEmployees'
    },
    {
        name: 'Go Back',
        value: 'goBack'
    }
];

async function handleAddOptions(init) {
    const answers = await inquirer.prompt({
        type: 'list',
        name: 'addMenuChoice',
        choices: addMenu
    });

    switch (answers.addMenuChoice) {
        case 'addDepartments':
            await AddSubset.showAddDeptPrompt();
            init();
            break;
        case 'addRoles':
            console.log('Added Role');
            break;
        case 'addEmployees':
            console.log('Added employee');
            break;
        case 'goBack':
            init();
            break;
    }
};

module.exports = handleAddOptions;
