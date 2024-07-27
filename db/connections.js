const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    password: 'pass',
    database: 'employee_tracker_db',
});

module.exports = pool;