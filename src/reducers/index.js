import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const initialState = null;

const appReducers = combineReducers({
  counterReducer
});

const rootReducer = (state = initialState, action) => {
  return appReducers(state, action);
};

export default rootReducer;
