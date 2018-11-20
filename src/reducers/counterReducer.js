import {
  COUNT_UP,
  COUNT_DOWN,
  RESET_COUNT
} from '../actions/actionTypes';

const INTIAL_STATE = {
  count: 0
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case COUNT_UP:
      return { ...state, count: state.count + 1 };
    case COUNT_DOWN:
      if (state.count >= 1) {
        return { ...state, count: state.count - 1 };
      }
      return { ...state };
    case RESET_COUNT:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
