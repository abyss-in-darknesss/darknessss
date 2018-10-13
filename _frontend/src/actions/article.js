import {
  ARTICLE_POST,
  ARTICLE_POST_SUCCESS,
  ARTICLE_POST_FAILURE,
  ARTICLE_LIST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAILURE,
} from './ActionTypes';
import axios from 'axios';

const POST_URL = '/api/post/write'
const LIST_URL = '/api/posts'
const ARITLCLE_URL = '/api/post?postId='

/* ARTICLE POST */
export function articlePostRequest(data) {
  return (dispatch) => {
    dispatch(articlePost());
    
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

/* ARTICLE LIST */
export function articleListRequest() {
  return (dispatch) => {
      // inform memo list API is starting
      dispatch(articleList());

      return axios.get(LIST_URL)
      .then((response) => {
          dispatch(articleListSuccess(response.data));
      }).catch((error) => {
          dispatch(articleListFailure());
      });
  };
}

export function articleList() {
  return {
      type: ARTICLE_LIST
  };
}

export function articleListSuccess(data) {
  return {
      type: ARTICLE_LIST_SUCCESS,
      data,
  };
}

export function articleListFailure() {
  return {
      type: ARTICLE_LIST_FAILURE
  };
}