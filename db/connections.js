const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'pass',
    host: 'localhost',
    database: 'employee_tracker_db'
});

module.exports = pool;