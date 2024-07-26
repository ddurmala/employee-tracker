const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    password: 'pass',
    database: 'employee_tracker_db'
});

module.exports = client;