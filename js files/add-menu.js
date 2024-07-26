
const inquirer = require('inquirer');

const init = require('../index');

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

function handleAddOptions(init) {
    inquirer.prompt({
        type: 'list',
        name: 'addMenuChoice',
        choices: addMenu
    }).then((answers) => {
        switch (answers.addMenuChoice) {
            case 'addDepartments':
                console.log('Added Department');
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
    })
};

module.exports = handleAddOptions;
