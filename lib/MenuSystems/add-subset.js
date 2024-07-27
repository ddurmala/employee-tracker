const inquirer = require('inquirer');

const Query = require('./Query');



class AddSubset {
    static async showAddDeptPrompt() {

        const answerObj = await inquirer.prompt([
            {
                name: 'dept_name',
                message: 'Enter new department name: '
            }
        ]);

        await Query.addDepartment(answerObj.dept_name);
    }

}

module.exports = AddSubset;