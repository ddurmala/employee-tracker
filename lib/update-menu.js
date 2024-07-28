
const inquirer = require('inquirer');

const UpdateSubset = require('./MenuSystems/update-subset')

const updateMenu = [
    {
        name: 'Update Employee\'s Role',
        value: 'updateRole'
    },
    {
        name: 'Update Employee\'s Manager',
        value: 'updateManager'
    },
    {
        name: 'Go Back',
        value: 'goBack'
    }
];

async function handleUpdateOptions(init) {
    const answers = await inquirer.prompt({
        type: 'list',
        name: 'updateMenuChoice',
        message: 'Please choose and option to view: ',
        choices: updateMenu
    });
    switch (answers.viewMenuChoice) {
        case 'updateRole':
            await UpdateSubset.updateEmployeeRole();
            break;
        case 'updateManager':
            await UpdateSubset.updateEmployeeManager;
            break;
        case 'goBack':
            init();
            break;
    }
};

module.exports = handleUpdateOptions;
