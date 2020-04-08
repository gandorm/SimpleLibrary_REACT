/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { SET_ADMIN, SET_API_CALL_ERROR } from './constants';

export const initialState = {
  isAdmin: false,
  open: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case SET_ADMIN:
        return {
          ...state,
          isAdmin: true,
        }

      case SET_API_CALL_ERROR:
        return {
          ...state,
          open: !state.open,
        }
    }
  });


export default loginPageReducer;
