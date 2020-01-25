const db = require('../Modals/pool');

const userController = {};

userController.createUser = (req,res,next) => {
    const createString = 'INSERT INTO customer (username, password, todaysmood, yesterdaysmood) VALUES ($1, $2, $3, $4)';
    const values = ['Josh', 'pwd123', 'dapper', 'basura'];
    db.query(createString, values, (err, response) => {
        if(err) {console.log(err.stack)}
        else {console.log(response.rows[0])
       res.locals.user = response.rows[0];
        next();
        }
    })
}

module.exports = userController;