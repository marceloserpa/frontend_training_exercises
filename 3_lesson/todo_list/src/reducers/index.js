import { combineReducers } from 'redux';

import TaskReducer from './task_reducers';

const rootReducer = combineReducers({
  task: TaskReducer
});

export default rootReducer;
