import axios from 'axios';
import {
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILURE,
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_GET_STATUS,
  AUTH_GET_STATUS_SUCCESS,
  AUTH_GET_STATUS_FAILURE
} from './ActionTypes';

const REGISTER_URL = '/api/auth/signup'
const LOGIN_URL = '/api/auth/user/signin'
const GET_STATUS_URL = '/api/auth/getInfo'

/* REGISTER */
/*
    ACCOUNT SIGNUP: POST /api/auth/signup
    BODY SAMPLE: { "id": "test", "password": "test" }
    ERROR CODES:
*/
export function registerRequest(email, password) {
  return (dispatch) => {
    // Inform Register API Starting
    dispatch(register());

    return axios.post(REGISTER_URL, { email, password })
      .then((response) => {
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
/*
    ACCOUNT LOGIN: POST /api/auth/login
    BODY SAMPLE: { "id": "test", "password": "test" }
    ERROR CODES:
*/
export function loginRequest(email, password) {
  return (dispatch) => {
    // Inform Login API is starting
    dispatch(login());

    // API REQUEST
    return axios.post(LOGIN_URL, { email, password })
      .then((response) => {
        // SUCCEED
        dispatch(loginSuccess(email));
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
export function getStatusRequest() {
  return (dispatch) => {
    // inform Get Status API is starting
    dispatch(getStatus());

    return axios.get(GET_STATUS_URL)
    .then((response) => {
      dispatch(getStatusSuccess(response.data.info.username));
    }).catch((error) => {
      dispatch(getStatusFailure());
    })
  }
}
export function getStatus() {
  return {
    type: AUTH_GET_STATUS
  };
}
export function getStatusSuccess(username) {
  return {
    type: AUTH_GET_STATUS_SUCCESS,
    username
  };
}
export function getStatusFailure() {
  return {
    type: AUTH_GET_STATUS_FAILURE
  };
}
