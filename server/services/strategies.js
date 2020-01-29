const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;
const bcrypt = require('bcrypt');

const db = require('../Models/db');

const roundsOfSalt = 10;
// the serialize and deserialize methods from passport js for sessions
const init = require('./passport');
// invoking and initializing the serialize and deserialize methods on passport.
// Passing the db instance to the deserialize method.
init(db);

// strategy for GoogleOauth
passport.use(new GoogleStrategy({
  callbackURL: '/auth/google/redirect',
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
}, (accessToken, refreshToken, profile, done) => {
  // done is needed to proceed through the middleware chain
  const queryString = {
    select: 'SELECT username FROM users WHERE oauthId = $1;',
    insert: `
      INSERT INTO users (username, hash, oauthId)
      VALUES ($1, $2, $3)
      RETURNING *;
    `,
  };

  const values = {
    profileId: profile.id,
    displayName: profile.displayName,
  };

  db.query(queryString.select, [values.profileId], (err, user) => {
    if (err) return err;
    if (user.rows.length) return done(null, user);
    // will only run if a user does not exists
    bcrypt.hash(values.profileId + process.env.SECRET, roundsOfSalt, (err, hash) => {
      db.query(queryString.insert, [values.displayName, hash, values.profileId], (err, newUser) => done(null, newUser));
    });
  });
}));

// strategy for SpotifyOauth
passport.use(new SpotifyStrategy({
  callbackURL: '/auth/spotify/redirect',
  clientID: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
}, (accessToken, refreshToken, profile, done) => {
  const queryString = {
    select: 'SELECT username FROM users WHERE oauthId = $1;',
    insert: `
      INSERT INTO users (username, hash, oauthId)
      VALUES ($1, $2, $3)
      RETURNING username;
    `,
  };

  const values = {
    profileId: profile.id,
    displayName: profile.displayName,
  };

  db.query(queryString.select, [values.profileId], (err, user) => {
    if (err) return err;
    if (user.rows.length) return done(null, user);
    // will only run if a user does not exists
    bcrypt.hash(values.profileId + process.env.SECRET, roundsOfSalt, (err, hash) => {
      db.query(queryString.insert, [values.displayName, hash, values.profileId], (err, newUser) => done(null, newUser));
    });
  });
}));
