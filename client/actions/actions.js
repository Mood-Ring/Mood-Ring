import * as types from './actionTypes.js.js';

// ------ ACTIONS

export const setUsername = (username) => ({
  //SET_USERNAME will be triggered when the user submits their username
  type: types.SET_USERNAME,
  payload: username
});

export const setPassword = (password) => ({
  //SET_PASSWORD will be triggered when the user submits their password
  type: types.SET_PASSWORD,
  payload: password
});

export const addUser = () => ({
  //ADD_USER will be triggered after both a new username and password have been stored in state. It won't take a payload as it will be triggered as soon
  //as those two values have been added to state. It will store the username as a string that we can grab onto when we navigate the user to the main page of the app.
  type: types.ADD_USER
});

export const changePage = (index) => ({
  //changePage will take in an index that is sent over via the payload. We'll then use that index to serve the client the specific page they've requested to see
  type: types.CHANGE_PAGE,
  payload: index
});
