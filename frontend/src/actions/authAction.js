import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  SIGNOUT,
} from "./actionTypes";
import Axios from "axios";

export const signIn = (credentials) => {
  return async (dispatch) => {
    try {
      const result = await Axios.post("/api/users/login", credentials);
      dispatch({ type: AUTH_SUCCESS, payload: result });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, error });
    }
  };
};

export const signUp = (credentials) => {
  return async (dispatch) => {
    try {
      const result = await Axios.post("/api/users/signup", credentials);
      dispatch({ type: AUTH_SUCCESS, payload: result });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, error });
    }
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({ type: SIGNOUT });
  };
};
