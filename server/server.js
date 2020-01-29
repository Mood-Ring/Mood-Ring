const express = require('express');
const path = require('path');
const app = express();
const userController = require('./Controllers/userController');
const PORT = 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(cookieParser())


app.use(bodyParser.json());

app.use('/dist', express.static(path.resolve(__dirname, '../dist/')));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// //this is suppose to create our user
// app.post('/create', userController.createUser, (req, res) => {
// res.status(200).send(res.locals.user);
// });

//this is suppose to get our mood.


// app.get('/dist', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, '../dist/bundle.js'));
// });

//this is for signup button
app.post('/signup', userController.createUser, (req, res) => {
    console.log({"username" : res.locals.user, "password" : res.locals.hash});
    res.status(200).send({"username" : res.locals.user, "password" : res.locals.hash})
});

app.post('/login', userController.login, (req, res) => {
    console.log('in res', res.locals.user)
    res.status(200).send({username: res.locals.user})
})

app.post('/mood', userController.moodResponse, (req, res) => {
  //  console.log('in res', res.locals.user)
    res.status(200).send({response: res.locals.moodresponse});
})

app.use((err, req, res, next) => {
    console.log('Global error handler', err);
});

app.listen(PORT, () => {
    console.log("listening on port", PORT);
});


module.exports = app;