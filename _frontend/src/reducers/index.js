import authentication from './authentication';
import article from './article';

import { combineReducers } from 'redux';

export default combineReducers({
  authentication,
  article
})