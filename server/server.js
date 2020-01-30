const express = require('express');
const path = require('path');

const app = express();
const userController = require('./Controllers/userController');

const PORT = 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


// cookies being used here, maybe work on cookie flow
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/dist', express.static(path.resolve(__dirname, '../dist/')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});


<<<<<<< HEAD
// this is for signup button
=======
// Create Account button route
>>>>>>> 2c22dd4745916de5c90805a22d1887175ed9d12e
app.post('/signup', userController.createUser, (req, res) => {
  // originally sending the username and password back
  res.sendStatus(200);
});

// Log in button route in log in component
app.post('/login', userController.login, (req, res) => {
<<<<<<< HEAD
  console.log('in res', res.locals.user);
  res.status(200).send({ username: res.locals.user });
=======
    // bcryptSuccess obj containing if comparison function passed or failed
    const { bcryptSuccess, username } = res.locals

    console.log('in res', username);
    res.status(200).send(bcryptSuccess);
>>>>>>> 2c22dd4745916de5c90805a22d1887175ed9d12e
});

app.post('/getUserMoods', userController.getUserID, userController.getUserMoods, (req, res) => {
  res.json(res.locals.userMoods);
});

<<<<<<< HEAD
app.post('/mood', userController.moodResponse, (req, res) => {
  //  console.log('in res', res.locals.user)
  res.status(200).send({ response: res.locals.moodresponse });
});

app.use((err, req, res, next) => {
  console.log('Global error handler', err);
  res.send(err);
=======
app.post('/mood', userController.getMoodResponse, (req, res) => {

    res.status(200).send({ response: res.locals.moodresponse });
});

app.use((err, req, res, next) => {
    console.log('Global error handler: ', err);
    res.send(err);
>>>>>>> 2c22dd4745916de5c90805a22d1887175ed9d12e
});

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});


module.exports = app;
