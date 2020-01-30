const bcrypt = require('bcrypt');
const db = require('../Models/pool');
// salt rounds are how many times password will run through hash function
// increased from 3 to 10
const saltRounds = 10;

const userController = {};


userController.createUser = (req, res, next) => {
  // will use bcrypt hash to create a hashed password

  // using object destructuring from req.body
  const {
    username, password, todaysmood, yesterdaysmood,
  } = req.body;

  // Query to insert information into customer table
  const createUserString = 'INSERT INTO customer (username, password, todaysmood, yesterdaysmood, hashedpw) VALUES ($1, $2, $3, $4, $5)';

  // values received from frontEnd after clicking Create Account button
  const createUserValues = [`${username}`, `${password}`, `${todaysmood}`, `${yesterdaysmood}`];

  // right now use promises

  bcrypt.hash(password, saltRounds)
    .then((hash) => {
      // push the hashedpw to our values array
      createUserValues.push(`${hash}`);

      db.query(createUserString, createUserValues)
        .then(() => {
          console.log('NEW USER CREATED', username);
          return next();
        })
        .catch((err) => {
          console.log('ERROR IN DBQUERY:', err);
          return next(err);
        });
    })
    .catch((err) => {
      console.log('Error in bcrypt:', err);
      return next(err);
    });


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
  // compare hash with saved hash
  // convert to values-array format

  const user = req.body.username;
  const checkString = `SELECT * FROM customer WHERE username='${user}'`;
  // const checkString = `SELECT hashedpw FROM customer WHERE username='${user}'`;
  // console.log('checking string', user)

  db.query(checkString, [])
    .then((response) => {
      // checks this line first to see if no username exists
      // if we get an empty array back from the query, no user exists with that
      if (!response.rows[0]) {
        console.log(response);
        res.send({ username: 'User name or password is wrong' });
        return next();
      }
      console.log('USER EXISTS:', response.rows);
      const hashed = response.rows[0].hashedpw;
      //  console.log(hashed);


      bcrypt.compare(req.body.password, hashed, (bcerr, result) => {
        // if passwords do not match
        if (!result) {
          console.log('User name or password is wronng', bcerr);
          res.send({ username: 'User name or password is wrong' });
        } else {
          console.log('Successful login');
          // sending back to front end username
          res.locals.user = user;
          next();
        }
      });
    })
    .catch((errd) => console.log(errd, 'Error or Username or Password is wrong'));
};


// retreives a mood response for input mood
userController.moodResponse = (req, res, next) => {
  const { mood } = req.body;

  // will query an a array @ respose.rows that will have all the moodResponses @mood selected
  const queryString = `SELECT moodresponse from mood WHERE currentMood='${mood}'`;

  db.query(queryString, [])
    .then((response) => {
      // console.log(response)

      // gets a random moodresponse for every currentMood in table
      const random = Math.floor(Math.random() * Math.floor(response.rows.length));

      // sends back moodResponse data
      res.locals.moodresponse = response.rows[random].moodresponse;

      next();
    })
    .catch((qerr) => console.log(qerr));
  // console.log('in mood', req.body);
};

// retrieves all the moods from a specific user
userController.getUserID = (req, res, next) => {
    console.log('hitting getUSERID')
  // first get the user id from the customer table
  const getUserIDQUERY = 'SELECT __id FROM customer WHERE username=$1';

  const { username } = req.body;

  const getUserValue = [];
  getUserValue.push(username);

  db.query(getUserIDQUERY, getUserValue)
    .then((response) => {
      console.log('GETUSER QUERY RESPONSE', response.rows[0]);
      res.locals.user_id = response.rows[0].__id;
      return next();
    })
    .catch((err) => next(err));
};

userController.getUserMoods = (req, res, next) => {
  // able to pull from res.locals.user_id
  const { user_id } = res.locals;

  const getUserMoods = 'SELECT mood, created_date FROM customer_moods WHERE user_id=$1';

  const getUserMoodsValue = [user_id];

  // use the user_id we got from previous query to get all the moods from our customer_moods table
  db.query(getUserMoods, getUserMoodsValue)
    .then((response) => {
      console.log('GET USER MOODS RESPONSE:', response.rows);
      res.locals.userMoods = response.rows;
      return next();
    })
    .catch((err) => next(err));
};


module.exports = userController;
