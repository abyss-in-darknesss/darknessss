import axios from 'axios';
import {
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILURE,
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
  AUTH_GET_STATUS
} from './ActionTypes';

const REGISTER_URL = '/api/auth/user/signup'
const LOGIN_URL = '/api/auth/user/signin'
const LOGOUT_URL = '/api/auth/user/logout'

/* REGISTER */
export function registerRequest(email, password, username) {
  console.log(email)
  console.log(username);
  return (dispatch) => {
    // Inform Register API Starting
    dispatch(register());
    return axios.post(REGISTER_URL, { email, password, username })
      .then((response) => {
        console.log(response);
        dispatch(registerSuccess());
      }).catch((error) => {
        dispatch(registerFailure(error.response.data.code))
      })
  };
}
export function register() {
  return {
    type: AUTH_REGISTER
  };
}
export function registerSuccess() {
  return {
    type: AUTH_REGISTER_SUCCESS
  };
}
export function registerFailure(error) {
  return {
    type: AUTH_REGISTER_FAILURE,
    error
  };
}

/* LOGIN */
export function loginRequest(email, password) {
  return (dispatch) => {
    // Inform Login API is starting
    dispatch(login());

    // API REQUEST
    return axios.post(LOGIN_URL, { email, password })
      .then((response) => {
        // SUCCEED
        dispatch(loginSuccess(response.data.email));
      }).catch((error) => {
        // FAILED
        dispatch(loginFailure());
      });
  };
}
export function login() {
  return {
    type: AUTH_LOGIN
  };
}
export function loginSuccess(email) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    email
  };
}
export function loginFailure() {
  return {
    type: AUTH_LOGIN_FAILURE
  };
}

/* GET STATUS */
export function getStatus(username) {
  return {
    type: AUTH_GET_STATUS,
    username
  }
}

/* LOGOUT */
export function logoutRequest() {
  return (dispatch) => {
      return axios.get(LOGOUT_URL)
      .then((response) => {
          dispatch(logout());
      });
  };
}

export function logout() {
  return {
      type: AUTH_LOGOUT
  };
}

