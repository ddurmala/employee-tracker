
const inquirer = require('inquirer');

const init = require('../index');

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

function handleUpdateOptions(init) {
    inquirer.prompt({
        type: 'list',
        name: 'updateMenuChoice',
        message: 'Please choose and option to view: ',
        choices: updateMenu
    }).then((answers) => {
        switch (answers.viewMenuChoice) {
            case 'updateRole':
                console.log('Updated Role');
                break;
            case 'updateManager':
                console.log('Manager Updated');
                break;
            case 'goBack':
                init();
                break;
        }
    })
};

module.exports = handleUpdateOptions;
