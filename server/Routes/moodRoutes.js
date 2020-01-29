const express = require('express');

const router = express.Router();
const moodController = require('../Controllers/moodController');

router.post('/mood', moodController.moodResponse, (req, res) => {
  res.status(200).send({ response: res.locals.moodresponse });
});

module.exports = router;
