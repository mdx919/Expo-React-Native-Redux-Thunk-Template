import {
  COUNT_UP,
  COUNT_DOWN,
  RESET_COUNT
} from '../actions/actionTypes';

const INTIAL_STATE = {
  count: false
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case COUNT_UP:
      return { ...state, count: count++ };
    default:
      return state;
  }
};
