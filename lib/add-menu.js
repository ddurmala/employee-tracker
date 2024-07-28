
const inquirer = require('inquirer');

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
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'addMenuChoice',
        choices: addMenu
    });

    switch (answer.addMenuChoice) {
        case 'addDepartments':
            await AddSubset.showAddDeptPrompt(handleAddOptions, init);
            break;
        case 'addRoles':
            await AddSubset.showAddRolePrompt(handleAddOptions, init);
            break;
        case 'addEmployees':
            await AddSubset.showAddEmployeePrompt(handleAddOptions, init);
            break;
        case 'goBack':
            init();
            break;
    }
};

module.exports = handleAddOptions;
