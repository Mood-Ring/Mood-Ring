const bcrypt = require('bcrypt');
const db = require('../Models/db');
// salt rounds are how many times password will run through hash function
const roundsOfSalt = 10;

const userController = {};

userController.createUser = (req, res, next) => {
  // encrypt inserted password with bcrypt, new hashed pw saved in database as 'hash'
  bcrypt.hash(req.body.password, roundsOfSalt, (err, hash) => {
    if (err) {
      return next({
        log: err,
        message: {
          err: 'Error in Bcrypt Middleware. Check logs for error',
        },
      });
    }
    // creating user row in database if successful bcryption
    const queryString = 'INSERT INTO users (username, hash) VALUES ($1, $2)';
    const values = [req.body.username, hash];

    res.locals.username = req.body.username;
    // db.query to create new user row in User table
    // eslint-disable-next-line no-unused-vars
    db.query(queryString, values, (error, response) => {
      if (error) {
        return next({
          log: error,
          message: {
            err: 'Error in database query. Check log for error message',
          },
        });
      }
      console.log(`${res.locals.username} successfully created in database`);
      return next();
    });
  });
};

userController.login = (req, res, next) => {
  const queryString = 'SELECT * FROM users WHERE username= $1';
  const values = [req.body.username];
  // db.query to verify user in User table
  db.query(queryString, values, (err, response) => {
    if (err) {
      return next({
        log: err,
        message: {
          err: 'Error in database query. Check log for error message',
        },
      });
    }
    // if user row is empty return an error message
    if (!response.rows.length) {
      return res.json({ errorMessage: 'Username or password is incorrect' });
    }
    // initializing variable for hash stored in returned user row
    const { hash } = response.rows[0];
    // bcrypt native compare password method
    bcrypt.compare(req.body.password, hash, (error, result) => {
      if (error) {
        return next({
          log: error,
          message: {
            err: 'Error in Bcrypt middleware. Check log for error message',
          },
        });
      }
      // if hashed inputted password does not match stored hash, return error
      if (!result) {
        return res.json({ errorMessage: 'Username or password is incorrect' });
      }
      res.locals.username = req.body.username;
      return next();
    });
  });
};


module.exports = userController;
