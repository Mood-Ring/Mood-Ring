const express = require('express');

const router = express.Router();

const userController = require('../Controllers/userController.js');

router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json({ username: res.locals.username });
});

router.post('/login', userController.login, (req, res) => {
  return res.status(200).json({ username: res.locals.username });
});


module.exports = router;
