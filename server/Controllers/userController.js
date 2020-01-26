const db = require('../Modals/pool');

const userController = {};

userController.createUser = (req,res, next) => {
    const createString = 'INSERT INTO customer (username, password, todaysmood, yesterdaysmood) VALUES ($1, $2, $3, $4)';
    const values = [`${req.body.username}`, `${req.body.password}`, `${req.body.todaysmood}`, `${req.body.yesterdaysmood}`];
    console.log("in first console", values);
    db.query(createString, values, (err, response) => {
        if(err) {console.log('in if', err.stack)}
        else {console.log('in else', response.rows[0])
       res.locals.user = response.rows[0];
       console.log('res.locals.user', res.locals.user)
    }
})
next();
};

userController.login = (req, res, next) => {
    const user = req.body.username;
    const checkString = `SELECT * FROM customer WHERE username='${user}'`;
    console.log('checking string', user)
    db.query(checkString, [])
        .then((response) => {
        if(!response.rows[0]){
            res.send("User does not exist")
            
        } else {
        res.locals.user = response.rows[0].username;
        console.log('rows', response.rows[0])
        console.log('response', response)
        next();
        }
        })
}


//We need to finish this because we need to send back a response from the mood.
userController.mood = (req, res, next) => {
    console.log('in mood', req.body);
    next();
};

module.exports = userController;