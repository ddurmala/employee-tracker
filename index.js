const inquirer = require('inquirer');

const pool = require('./db/connections');


const handleViewOptions = require('./lib/view-menu');
const handleAddOptions = require('./lib/add-menu');
const UpdateSubset = require('./lib/update-menu');


// const { default: Choices } = require('inquirer/lib/objects/choices');

async function init() {

    await pool.connect();

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
            name: 'UPDATE',
            value: 'update'
        },
        {
            name: 'EXIT',
            value: 'exit'
        }
    ];

    const answers = await inquirer.prompt({
        type: 'list',
        name: 'mainMenuChoice',
        message: 'Please choose an action: ',
        choices: mainMenu
    });
    switch (answers.mainMenuChoice) {
        case 'view':
            await handleViewOptions(init);
            break;
        case 'add':
            await handleAddOptions(init);
            break;
        case 'update':
            await UpdateSubset.handleUpdateOptions(init);
            break;
        case 'exit':
            process.exit(0);
            break;
    }
    await pool.end();
};

init();

// module.exports = init;






// inquirer.prompt([
//     {
//         type: 'input',
//         message: 'Enter README file title: ',
//         name: 'title'
//     },
// ]).then((answers) => {

//     fs.writeFile('./')
// })

