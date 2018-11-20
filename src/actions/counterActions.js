import {
  COUNT_UP,
  COUNT_DOWN,
  RESET_COUNT
} from '../actions/actionTypes';

export const addCount = () => {
  return (dispatch) => {
      dispatch({ type: COUNT_UP });
  };
};

export const subtractCount = () => {
  return (dispatch) => {
      dispatch({ type: COUNT_DOWN });
  };
};

export const resetCount = () => {
  return (dispatch) => {
      dispatch({ type: RESET_COUNT });
  };
};
