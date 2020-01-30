import { GET_MOOD } from '../constants/actionTypes';

/* This reducer is here only to send the emotion we're feeling so we can return the
correct type of quote */

const initialState = {
  mood: null,
};

const moodReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOOD:
      return {
        ...state,
        mood: action.payload,
      };
    default: return state;
  }
};

export default moodReducer;
