const express = require('express');

const router = express.Router();

const userController = require('../Controllers/userController');

router.post('/signup', userController.createUser, (req, res) => {
  console.log({ username: res.locals.user, password: res.locals.hash });
  res.status(200).send({ username: res.locals.user, password: res.locals.hash });
});

router.post('/login', userController.login, (req, res) => {
  console.log('in res', res.locals.user);
  res.status(200).send({ username: res.locals.user });
});


module.exports = router;
