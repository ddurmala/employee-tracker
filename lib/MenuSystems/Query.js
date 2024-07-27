const client = require('../../db/connections');

class Query {
    static async addDepartment(answerObj) {

        const sql = `INSERT INTO departments (dept_name) VALUES ($1);`;

        await client.query(sql, [answerObj.dept_name]);

        console.log('Department successfully added!\n');

    }
}

module.exports = Query;