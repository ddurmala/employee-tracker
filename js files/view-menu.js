
const inquirer = require('inquirer');

const init = require('../index');

const viewMenu = [
    {
        name: 'View All Departments',
        value: 'viewAllDepartments'
    },
    {
        name: 'View All Roles',
        value: 'viewAllRoles'
    },
    {
        name: 'View All Employees',
        value: 'viewAllEmployees'
    },
    {
        name: 'Go Back',
        value: 'goBack'
    }
];

function handleViewOptions(init) {
    inquirer.prompt({
        type: 'list',
        name: 'viewMenuChoice',
        message: 'Please choose and option to view: ',
        choices: viewMenu
    }).then((answers) => {
        switch (answers.viewMenuChoice) {
            case 'viewAllDepartments':
                console.log('View all Departments');
                break;
            case 'viewAllRoles':
                console.log('View all Roles');
                break;
            case 'viewAllEmployees':
                console.log('view all employees');
                break;
            case 'goBack':
                init();
                break;
        }
    })
};

module.exports = handleViewOptions;
