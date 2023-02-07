import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  SIGNOUT,
} from "../actions/actionTypes";

const initState = {
  loggedIn: false,
  userData: {},
  authMessage: null,
};

export default function (state = initState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        userData: action.payload.data.userData,
        authMessage: action.payload.data.message,
      };
    case AUTH_ERROR:
      return {
        ...state,
        authMessage: action.error.response.data.error,
      };
    case SIGNOUT:
      return {
        ...state,
        userData: {},
        loggedIn: false,
        authMessage: null,
      };
    default:
      return state;
  }
}