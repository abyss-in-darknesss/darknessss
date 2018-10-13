import * as types from 'actions/ActionTypes';
import { produce } from 'immer';

const artilceCount = 12;

const initialState = {
  post: {
    status: 'INIT',
    error: -1
  },
  list: {
    status: 'INIT',
    data: [],
    isLast: false
  },
  edit: {
    status: 'INIT',
    error: -1,
  },
  remove: {
    status: 'INIT',
    error: -1
  },
  like: {
    status: 'INIT',
    error: -1
  }
};

export default function article(state = initialState, action) {
  switch(action.type) {
    case types.ARTICLE_POST:
      return produce(state, draft => {
        draft.post = {
          status:'WAITING',
          error: -1
        }
      });
    case types.ARTICLE_POST_SUCCESS:
      return produce(state, draft => {
        draft.post = {
          status:'SUCCESS',
        }
      });
    case types.ARTICLE_POST_FAILURE:
      return produce(state, draft => {
        draft.post = {
          status:'FAILURE',
          error: action.error
        }
      });
    case types.ARTICLE_LIST:
      return produce(state, draft => {
        draft.list = {
          status:'WAITING',
        }
      });
    case types.ARTICLE_LIST_SUCCESS:
      return produce(state, draft => {
        draft.list = {
          status:'SUCCESS',
          data: action.data,
          isLast:action.data.length < artilceCount
        }
      });
    case types.ARTICLE_LIST_FAILURE:
      return produce(state, draft => {
        draft.list = {
          status:'FAILURE',
          error: action.error
        }
      });
    default:
      return state
  }
}