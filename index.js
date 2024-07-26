const inquirer = require('inquirer');

const fs = require('fs');

const client = require('./db/connections');

const handleViewOptions = require('./lib/view-menu');
const handleAddOptions = require('./lib/add-menu');
const handleUpdateOptions = require('./lib/update-menu');

// const { default: Choices } = require('inquirer/lib/objects/choices');

async function init() {

    await client.connect();

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

