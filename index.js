const inquirer = require('inquirer');

const fs = require('fs');

const handleViewOptions = require('./js files/view-menu');
const handleAddOptions = require('./js files/add-menu');
const handleUpdateOptions = require('./js files/update-menu');

const { default: Choices } = require('inquirer/lib/objects/choices');

function init() {
    console.log(`
        ---------------------------
        Welcome to Employee Tracker
        ---------------------------
        `);

    const mainMenu = [
        {
            name: 'VIEW',
            value: 'view'
        },
        {
            name: 'ADD',
            value: 'add'
        },
        {
            name: 'UPDATE an employee\'s role',
            value: 'update'
        },
        {
            name: 'EXIT',
            value: 'exit'
        }
    ];

    inquirer.prompt({
        type: 'list',
        name: 'mainMenuChoice',
        message: 'Please choose an action: ',
        choices: mainMenu
    }).then((answers) => {
        switch (answers.mainMenuChoice) {
            case 'view':
                handleViewOptions(init);
                break;
            case 'add':
                handleAddOptions(init);
                break;
            case 'update':
                handleUpdateOptions(init);
                break;
            case 'exit':
                console.log('exit');
                break;
        }
    })
};

init();

module.exports = init;






// inquirer.prompt([
//     {
//         type: 'input',
//         message: 'Enter README file title: ',
//         name: 'title'
//     },
// ]).then((answers) => {

//     fs.writeFile('./')
// })