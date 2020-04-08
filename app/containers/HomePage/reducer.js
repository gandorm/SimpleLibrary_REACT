/*
 *
 * homePage reducer
 *
 */
import produce from 'immer';
import { SET_BOOKS } from './constants';

export const initialState = {
  books: [],
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case SET_BOOKS:
        return {
          ...state,
          books: action.books.books,
        }
    }
  });


export default homePageReducer;
