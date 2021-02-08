const { Pool } = require("pg");

const pool = new Pool({
    user: 'iainol',
    host: '10.50.10.29',
    database: 'chillanviejo',
    password: 'RE4343.fdsoj#',
    port: 5432
});

const connecting = async () => {
    const client = await pool.connect();
    return client;
};

exports.connecting = connecting;