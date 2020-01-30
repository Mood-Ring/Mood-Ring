import * as types from '../constants/actionTypes';

// ------ ACTIONS

// export const setUsername = (username) => ({
//   //SET_USERNAME will be triggered when the user submits their username
//   type: types.SET_USERNAME,
//   payload: username
// });

// export const setPassword = (password) => ({
//   //SET_PASSWORD will be triggered when the user submits their password
//   type: types.SET_PASSWORD,
//   payload: password
// });

// export const addUser = () => ({
//   //ADD_USER will be triggered after both a new username and password have been stored in state.
//   //It won't take a payload as it will be triggered as soon
//   //as those two values have been added to state.
//   //It will store username as string that we grab onto when we navigate user to main page of app.
//   type: types.ADD_USER
// });

export function addUser(username, password) {
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
  return (dispatch) => fetch('/signup', config)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.ADD_USER,
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

// export const changePage = (index) => ({
//   //changePage will take in an index that is sent over via the payload.
//   //We'll then use that index to serve the client the specific page they've requested to see
//   type: types.CHANGE_PAGE,
//   payload: index
// });
