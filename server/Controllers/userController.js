const db = require('../Models/pool');
const bcrypt = require('bcrypt');
//salt rounds are how many times password will run through hash function
// increased from 3 to 10
const saltRounds = 10;

const userController = {};

userController.createUser = (req, res, next) => {
    // will use bcrypt hash to create a hashed password

    // using object destructuring from req.body
    const { username, password, todaysmood, yesterdaysmood } = req.body;

    // Query to insert information into customer table
    const createUserString = 'INSERT INTO customer (username, password, todaysmood, yesterdaysmood, hashedpw) VALUES ($1, $2, $3, $4, $5)';

    // values received from frontEnd after clicking Create Account button
    const createUserValues = [`${username}`, `${password}`, `${todaysmood}`, `${yesterdaysmood}`];

    // right now use promises

    bcrypt.hash(password, saltRounds)
        .then(hash => {
            // push the hashedpw to our values array
            createUserValues.push(`${hash}`);

            db.query(createUserString, createUserValues)
                .then(() => {
                    console.log('NEW USER CREATED', username);
                    return next();
                })
                .catch(err => {
                    console.log('ERROR IN DBQUERY:', err);
                    return next(err);
                });
        })
        .catch(err => {
            console.log('Error in bcrypt:', err);
            return next(err);
        })


    /* Original bcrypt flow
    
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (err) {
            console.log("Something went wrong with Bcryption")
            res.send(err.stack);
        } else {  
            //begining of successful bcryption
            res.locals.hash = hash;
            //storing hashed password in res.locals for persistent storage
            //console.log(res.locals.hash);

            //creating user row in database if successful bcryption, if fail will never enter in db


            //database query passing rows with dynamic values
            res.locals.user = req.body.username;
            db.query(createUserString, createUserValues, (error, response) => {

                if (error) {
                    console.log("There was an error in the query string", error)

                }
                else {
                    console.log('res.locals.user updated on successful update to database', res.locals.user)

                }
                next();
            }) // End of query funtion      
            //end of successful bcryption
        }
    }) //end of bcrypt function

    */
};

userController.login = (req, res, next) => {
    // Will use bcrypt compare to successfully login a user

    const { username, password } = req.body;
    const checkUserString = 'SELECT * FROM customer WHERE username=$1';
    const checkUserValue = [username];

    db.query(checkUserString, checkUserValue)
        .then(response => {
            // if no user exists redirect to login 
            if (!response.rows[0]) {
                res.send({ success: false });
                return next();
            }

            // get the hashedpw back from the database
            const { hashedpw } = response.rows[0];

            // { username: "User name or password is wrong" }

            // use bcrypt.compare to compare the passwor
            bcrypt.compare(password, hashedpw)
                .then(bcryptRes => {
                    // response we get back will be a boolean
                    if (!bcryptRes) {
                        res.locals.bcryptSuccess = {
                            success: bcryptRes,
                        }
                        res.locals.username = username;
                        return next();
                    }
                    res.locals.bcryptSuccess = {
                        success: true
                    };
                    return next();
                })
                .catch(err => next(err));
        })
        .catch(err => next(err));
}

userController.getMoodResponse = (req, res, next) => {
    // this middleware will retrieve a random moodresponse in the database
    const { mood } = req.body;
    const getMoodResponseString = 'SELECT moodresponse from mood WHERE currentMood=$1';

    const getMoodResponseValue = [mood];

    db.query(getMoodResponseString, getMoodResponseValue)
        .then(response => {
            //gets a random moodresponse for every currentMood in table
            const random = Math.floor(Math.random() * Math.floor(response.rows.length));

            //sends back moodResponse data
            res.locals.moodresponse = response.rows[random].moodresponse;

            return next();
        })
        .catch(err => {
            return next(err);
        });
};

userController.getUserID = (req, res, next) => {
    // first get the user id from the customer table
    const getUserIDQUERY = 'SELECT __id FROM customer WHERE username=$1';
    const { username } = req.body;
    const getUserValue = [username];

    // query to get user_id for the getUserMoods middleware
    db.query(getUserIDQUERY, getUserValue)
        .then(response => {
            console.log('GETUSER QUERY RESPONSE', response.rows[0]);
            res.locals.user_id = response.rows[0].__id;
            return next();
        })
        .catch(err => next(err));
};

userController.getUserMoods = (req, res, next) => {
    // able to pull from res.locals.user_id from previous middleware
    const { user_id } = res.locals;

    const getUserMoods = 'SELECT mood, created_date FROM customer_moods WHERE user_id=$1';

    const getUserMoodsValue = [user_id];

    // use the user_id we got from previous query to get all the moods from our customer_moods table
    db.query(getUserMoods, getUserMoodsValue)
        .then(response => {
            console.log('GET USER MOODS RESPONSE:', response.rows);
            res.locals.userMoods = response.rows;
            return next();
        })
        .catch(err => next(err));
};


module.exports = userController;