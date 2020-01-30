const { Pool } = require('pg');

const userTable = require('./userModel');
const calendarTable = require('./calendarModel');

const PG_URI = 'postgres://zhfxpulu:K9N3Umc9sWTSTb1OgM15Obm_TE9WT5bs@rajje.db.elephantsql.com:5432/zhfxpulu';

// Create New Instance of Pool
const pool = new Pool({
  connectionString: PG_URI,
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

// running our create table(s) queries
pool.query(userTable, (err) => {
  if (err) console.log(err);
});

pool.query(calendarTable, (err) => {
  if (err) console.log(err);
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
