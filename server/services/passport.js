const passport = require('passport');
// http://www.passportjs.org/docs/
module.exports = (db) => {
  passport.serializeUser((user, done) => {
    // the user id is the id from the SERIAL PRIMARY KEY in the user table DB
    // when the done callback is called, it will take the user id and put it in a cookie
    return done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    // retreive the id from the cookie (from the browser) and return a user from the id
    const queryString = 'SELECT * FROM users WHERE id = $1';
    const values = [id];
    db.query(queryString, values, (err, user) => {
      console.log('deserial', user, id);
      return done(null, user);
    });
  });
};
