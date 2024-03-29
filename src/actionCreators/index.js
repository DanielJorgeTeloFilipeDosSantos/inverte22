import * as types from "../actionTypes/actionTypes";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "../actionTypes/actionTypes";

export function changeNumber(number) {
  return {
    type: types.CHANGE_NUMBER,
    number
  };
}

//-------------------------- AUTH ACTION CREATORS--------------------------------------------

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios.post("/users/register", userData).then(res => history.push("/signin"));
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  console.log("login user action creator triggered");
  axios.post("/users/login", userData).then(res => {
    // Save to localStorage
    const { token } = res.data;
    // Set token to ls
    localStorage.setItem("jwtToken", token);
    // Set token to Auth header
    setAuthToken(token);
    // Decode token to get user data
    const decoded = jwt_decode(token);
    // Set current user
    dispatch(setCurrentUser(decoded));
  });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

//---------------------------------------------------------------------------------------------------
