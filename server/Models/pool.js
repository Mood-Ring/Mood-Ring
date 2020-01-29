const { Pool } = require('pg');

const PG_URI = "postgres://dhiptjdt:q2Z8a6eiLtGcN5C2Vwy6fsl5ZxZjniPH@rajje.db.elephantsql.com:5432/dhiptjdt";

//Create New Instance of Pool
const pool = new Pool({
    connectionString: PG_URI
});



/**
 * Have to make database usernames unique
 * Change the new table to be a date
 * 
 * our update functionality 
 * 
 * " UPDATE customer_moods SET mood='excited' WHERE user_id=91 AND created_date='2020-01-29' ";
 * 
 * insert new mood/row into table
 * 
 *  "INSERT INTO customer_moods (user_id, mood) VALUES (91, 'frustrated')";
 * 
 * should get values from the front end
 * 
 * /mood/:userId
 * 
 */



module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};