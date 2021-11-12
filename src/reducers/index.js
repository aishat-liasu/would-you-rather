import { combineReducers } from 'redux';
import authedUser from './AuthUser';
import users from './Users';
import questions from './Questions';

export default combineReducers({
  authedUser,
  users,
  questions,
});
