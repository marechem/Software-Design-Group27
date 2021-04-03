import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types";

// Register a new user
export const registerUser = (userData, history) => dispatch => {
    axios
      .post("/register", userData)
      .then(res => history.push("/")) // This will redirect the user to the login page if successful
      .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data
          })
        );
};

// Login
export const loginUser = userData => dispatch => {
    axios
      .post("/", userData)
      .then(res => {
          // We need to Save to the localStorage

          const { token } = res.data;
          localStorage.setItem("jwtToken", token);

          // Set token to Auth Header
          setAuthToken(token);

          // Decode token to get user data
          const decoded = jwt_decode(token);

          // Set current user
          dispatch(setCurrentUser(decoded));
        })
      .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data
          })
        );
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

// Handle User Logging out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    
    // Remove auth header for future requests
    setAuthToken(false);

    // Set current user to empty object
    dispatch(setCurrentUser({}));
};