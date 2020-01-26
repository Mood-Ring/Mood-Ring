import * as types from './actionTypes.js';

const initialState = {
  //userList will be an array that holds user objects
  userList: [],
  //username & password will be updated once a user submits their newly created username and password and will be reset to an empty string when the ADD_USER reducer runs
  username: '',
  password: '',
  //pages: action.payload will bring over an index that we can use to pull the page they want
  page: 'Home',
  pages: ['Home', 'Login', 'UserFeed', 'Create']
};

const userReducers = (state = initialState, action) => {
  let userList;
  switch (action.type) {
    case types.SET_USERNAME:
      //receives username via action.payload and updates state.username to equal the value.
      return {
        ...state,
        username: action.payload
      };

    case types.SET_PASSWORD:
      // receives password via action.payload and updates the state.username to equal the value
      return {
        ...state,
        password: action.payload
      };

    case types.ADD_USER:
      //creates a new user in the userList array by taking the newly added state.username & state.password values and putting them into a newUser object. This object is then added into the userList array
      //resets state.username and state.password to empty strings after the values have been added to the newUser obj.
      const newUser = {
        username: state.username,
        password: state.password
      };
      //Might just have to send post to db
      return {
        ...state,
        userList: state.userList.concat(newUser),
        username: '',
        password: ''
      };

    case types.CHANGE_PAGE:
      // receives an index via action.payload and returns the page the user has requested to see by pulling the path at that specific index.
      //const newPage = state.pages[action.payload];
      return {
        ...state,
        page: state.pages[action.payload]
      };
  }
};

export default userReducers;
