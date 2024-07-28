
const inquirer = require('inquirer');

const viewSubset = require('./MenuSystems/view-subset');

require('console.table');


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

async function handleViewOptions(init) {
    const answers = await inquirer.prompt({
        type: 'list',
        name: 'viewMenuChoice',
        message: 'Please choose and option to view: ',
        choices: viewMenu
    })
    switch (answers.viewMenuChoice) {
        case 'viewAllDepartments':
            viewSubset.viewAllDepartments(handleViewOptions, init);
            break;
        case 'viewAllRoles':
            viewSubset.viewAllRoles(handleViewOptions, init);
            break;
        case 'viewAllEmployees':
            viewSubset.viewAllEmployees(handleViewOptions, init);
            break;
        case 'goBack':
            init();
            break;
    }
};

module.exports = handleViewOptions;
