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


// this is for signup button
app.post('/signup', userController.createUser, (req, res) => {
  // originally sending the username and password back
  res.sendStatus(200);
});

app.post('/login', userController.login, (req, res) => {
  console.log('in res', res.locals.user);
  res.status(200).send({ username: res.locals.user });
});

app.post('/getUserMoods', userController.getUserID, userController.getUserMoods, (req, res) => {
  res.json(res.locals.userMoods);
});

app.post('/mood', userController.moodResponse, (req, res) => {
  //  console.log('in res', res.locals.user)
  res.status(200).send({ response: res.locals.moodresponse });
});

app.use((err, req, res, next) => {
  console.log('Global error handler', err);
  res.send(err);
});

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});


module.exports = app;
