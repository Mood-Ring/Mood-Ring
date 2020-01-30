const fetch = require('node-fetch');

const apiController = {};

//  helper function to return a proper search query based on mood
const getMood = (mood) => {
  switch (mood) {
    case 'excited':
    case 'happy':
      return 'sunrise';
    case 'anxious':
      return 'ocean';
    case 'sad':
      return 'nature';
    case 'relaxed':
    case 'distracted':
      return 'relax';
    case 'frustrated':
    case 'tired':
      return 'peace';
    default:
      return 'beach';
  }
};

apiController.getImages = (req, res, next) => {
  const searchQuery = getMood(req.body.mood);
  fetch(`https://api.pexels.com/v1/search?query=${searchQuery}&per_page=15&page=1`, {
    headers: {
      Authorization: process.env.PEXELS_API,
    },
  })
    .then((data) => data.json())
    .then((data) => {
      res.locals.images = data.photos;
    })
    .then(next)
    .catch((err) => next({
      log: err,
      message: {
        err: 'Error in the apiController.getImages controller. See logs for error',
      },
    }));
};

module.exports = apiController;
