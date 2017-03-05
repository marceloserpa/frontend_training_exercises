import { combineReducers } from 'redux';

import CandidateReducer from './candidates_reducer'

const rootReducer = combineReducers({
  candidates: CandidateReducer
});

export default rootReducer;
