import * as types from 'actions/ActionTypes';
import produce from 'immer';

const initialState = {
  login: {
    stauts: 'INIT'
  },
  register: {
    status: 'INIT',
    error: -1
  },
  status: {
    isLoggedIn: false,
    currentUser: ''
  }
}

export default function authentication(state = initialState, action) {
  switch (action.type) {
  /* REGISTER */
    case types.AUTH_REGISTER:
      return produce(state, draft => {
        draft.register = {
          status: 'WATING',
          error: -1
        }
      });
    case types.AUTH_REGISTER_SUCCESS:
      return produce(state, draft => {
        draft.register = {
          status: 'SUCCESS',
        }
      });
    case types.AUTH_REGISTER_FAILURE:
      return produce(state, draft => {
        draft.register = {
          status: 'FAILURE',
          error: action.error
        }
      });

  /* LOGIN */
    case types.AUTH_LOGIN:
    return produce(state, draft => {
      draft.login = {
        status: 'WATING',
      }
    });
    case types.AUTH_LOGIN_SUCCESS:
      return produce(state, draft =>{
        draft.login = {
          status: 'SUCCESS'
        };
        draft.status = {
          isLoggedIn: true,
          currentUser: action.email
        }
      });
    case types.AUTH_LOGIN_FAILURE:
      return produce(state, draft => {
        draft.login = {
          status: 'FAILURE'
        }
      });
  /* GET STATUS */
    case types.AUTH_GET_STATUS:
      return produce(state, draft => {
        draft.status = {
          isLoggedIn: true,
          currentUser: action.username
        }
      })
  /* LOGOUT */
    case types.AUTH_LOGOUT:
      return produce(state, draft => {
        draft.status = {
          isLoggedIn: false,
          currentUser: ''
        }
      });
    default:
      return state;
  }
}