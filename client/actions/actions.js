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

export function changeQuote (quote) {
  const config = {
    method: 'POST',
    headers: {
      'Content Type': 'application/json',
    },
    body: JSON.stringify({
      quote,
    }),
  };
  return (dispatch) => fetch('https://type.fit/api/quotes', config)
    .then((res) => res.json())
    .then((data) => {
      const titlesArray = [
        'Ph.D.',
        'M.D.',
        'J.D.',
        'Esq.',
        'the Third',
        'Scholar',
        'Attorney at Law',
        'Duchess of Cambridge',
        'His Majesty',
        'The Reverend',
        'Viscount of Hereford',
        '7th Baron of Cromwell',
        'Spiritual Leader',
        'Frontend Master'
      ]
      const randomTitle = Math.floor(Math.random() * (titlesArray.length));
      const randomNum = Math.floor(Math.random() * 1620);
      if (!data[randomNum].author) {
        data = {
          quote: data[randomNum].text,
          author: `Jon Gonzalez, ${titlesArray[randomTitle]}`,
        }
        return data;
      } else {
        data = {
          quote: data[randomNum].text,
          author: data[randomNum].author,
        }
        return data;
      }
    })
    .then((quoteFull) => {
      dispatch({
        type: types.CHANGE_QUOTE,
        payload: quoteFull,
      });
    });
}

// componentDidMount() {
  //   fetch('https://type.fit/api/quotes')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       let rand = Math.floor(Math.random() * 1620);
  //       console.log(res[rand].author);
  //       if (res[rand].author == null) {
  //         this.setState({
  //           quote: res[rand].text,
  //           author: 'Jon Gonzalez'
  //         });
  //       } else {
  //         this.setState({
  //           quote: res[rand].text,
  //           author: res[rand].author
  //         });
  //       }
  //     });
  // }

// export const changePage = (index) => ({
//   //changePage will take in an index that is sent over via the payload.
//   //We'll then use that index to serve the client the specific page they've requested to see
//   type: types.CHANGE_PAGE,
//   payload: index
// });
