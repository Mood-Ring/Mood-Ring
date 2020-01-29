import * as types from './actionTypes.js';

const initialState = {
  // currentUser is where we'll store the name of the current user so that we can use it to address them on the main page of the app
  currentUser: '',
  // username & password will be updated once a user submits their newly created username and password and will be reset to an empty string when the ADD_USER reducer runs
  username: '',
  password: '',
  // response from POST request to endpoint /mood will be stored here. (response is the uplifting quote correlated to each mood from our db)
  response: '',
  // store quote and author we get back from fetch request to quotes API
  quote: '',
  author: '',
  // pages: action.payload will bring over an index that we can use to pull the page they want
  page: 'Home',
  pages: ['Home', 'Login', 'UserFeed', 'Create'],
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERNAME:
      // receives username via action.payload and updates state.username to equal the value.
      return {
        ...state,
        username: action.payload,
      };

    case types.SET_PASSWORD:
      // receives password via action.payload and updates the state.username to equal the value
      return {
        ...state,
        password: action.payload,
      };

    case types.ADD_USER:
      // stores the name of the current user so that we can address them on other pages in the app.
      // resets state.username and state.password to empty strings after the values.
      const { username } = state;
      console.log('user: ', username);
      // Might just have to send post to db
      return {
        ...state,
        currentUser: username,
        username: '',
        password: '',
      };

    case types.CHANGE_PAGE:
      // receives an index via action.payload and returns the page the user has requested to see by pulling the path at that specific index.
      // const newPage = state.pages[action.payload];
      return {
        ...state,
        page: state.pages[action.payload],
      };

    case types.SAVE_RESPONSE:
      return {
        ...state,
        response: action.payload,
      };

    default: return state;

    case types.SAVE_QUOTE:
      return {
        ...state,
        quote: action.quote,
        author: action.author,
      };
  }
};

export default userReducers;
