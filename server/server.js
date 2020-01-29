const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userRouter = require('./Routes/userRoutes');
const apiRouter = require('./Routes/apiRoutes');
const authRouter = require('./Routes/authRoutes');

app.use(cookieParser());
app.use(bodyParser.json());

// flow test for incoming requests
app.use((req, res, next) => {
  console.log(`
        ********* FLOW TEST **********
        MEDTHOD: ${req.method}
        URL: ${req.url}
        BODY: ${JSON.stringify(req.body)}
      `);
  return next();
});

app.use('/dist', express.static(path.resolve(__dirname, '../dist/')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('/user', userRouter);
app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  console.log(errorObj.message);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});


module.exports = app;
