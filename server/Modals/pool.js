const { Pool } = require('pg');

const PG_URI = "postgres://dhiptjdt:q2Z8a6eiLtGcN5C2Vwy6fsl5ZxZjniPH@rajje.db.elephantsql.com:5432/dhiptjdt";

//Create New Instance of Pool
const pool = new Pool({
    connectionString: PG_URI
  });


module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
    return pool.query(text, params, callback);  
    }
};