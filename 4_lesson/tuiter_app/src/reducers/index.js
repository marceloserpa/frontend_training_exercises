import { combineReducers } from 'redux';

import AuthenticationReducer from './authentication_reducer'
import MessageReducer from './message_reducer'

const rootReducer = combineReducers({
  authentication: AuthenticationReducer,
  message: MessageReducer
});

export default rootReducer;
