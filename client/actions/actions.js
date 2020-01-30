import * as types from '../constants/actionTypes';

export function register(username, password) {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  return (dispatch) => fetch('/register', config)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.REGISTER,
        payload: data,
      });
    });
}

export function login(username, password) {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  return (dispatch) => fetch('/login', config)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.LOGIN,
        payload: data,
      });
    });
}

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

/* MOOD DATA */

export const sendMoodData = (username, date, mood) => (dispatch) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      date,
      mood,
    }),
  };
  fetch('/user/mood', config)
    .then((response) => response.json())
    .then((data) => dispatch({
      type: types.ADD_MOOD,
      payload: data,
    }))
    .catch((err) => console.log(err));
};
export function logout() {
  return (dispatch) => fetch('/logout')
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.LOGOUT,
        payload: data,
      });
    });
}
