import { ADD_USER, LOGIN, LOGOUT } from '../constants/actionTypes';

const initialState = {
  // currentUser is where we'll store the name of the current user,
  // so that we can use it to address them on the main page of the app
  currentUser: '',
  //  // username & password will be updated once user submits newly created username and password
  //  // and will be reset to an empty string when the ADD_USER reducer runs
  // username: '',
  // password: '',
  // //pages: action.payload will bring over an index that we can use to pull the page they want
  // page: 'Home',
  // pages: ['Home', 'Login', 'UserFeed', 'Create'],
  loggedIn: false,
};

// const userReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case types.SET_USERNAME:
//       //receives username via action.payload and updates state.username to equal the value.
//       return {
//         ...state,
//         username: action.payload
//       };

//     case types.SET_PASSWORD:
//       // receives password via action.payload and updates the state.username to equal the value
//       return {
//         ...state,
//         password: action.payload
//       };

//     case ADD_USER:
//       // stores name of the current user so that we can address them on other pages in the app.
//       // resets state.username and state.password to empty strings after the values.
//       const newUser = state.username;
//       console.log('user: ', newUser);
//       // Might just have to send post to db
//       return {
//         ...state,
//         currentUser: newUser,
//         username: '',
//         password: '',
//       };

//     case types.CHANGE_PAGE:
//       // receives index via action.payload
//       // and returns page user has requested to see by pulling the path at that specific index.
//       // const newPage = state.pages[action.payload];
//       return {
//         ...state,
//         page: state.pages[action.payload],
//       };
//   }
// };

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
      };
    case LOGIN:
      if (action.payload === null) {
        return state;
      }
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: '',
        loggedIn: false,
      };
    default: return state;
  }
};

export default userReducers;
