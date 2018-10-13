import {
  ARTICLE_POST,
  ARTICLE_POST_SUCCESS,
  ARTICLE_POST_FAILURE,
} from './ActionTypes';
import axios from 'axios';

const POST_URL = '/api/post/write'

/* ARTICLE POST */
export function articlePostRequest(data) {
  return (dispatch) => {
    dispatch(articlePost());
    console.log(data)
    return axios.post(POST_URL, data)
    .then((response) => {
      dispatch(articlePostSuccess());
    }).catch((error) => {
      dispatch(articlePostFailure(error.response.data.code));
    });
  }
}

export function articlePost() {
  return {
    type: ARTICLE_POST
  };
}
export function articlePostSuccess() {
  return {
    type: ARTICLE_POST_SUCCESS
  };
}
export function articlePostFailure(error) {
  return {
    type: ARTICLE_POST_FAILURE,
    error
  };
}