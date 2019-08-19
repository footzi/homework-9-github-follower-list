import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

// Обратите внимание на тесты reducer.test.js
// Они помогут вам написать редьюсер
const data = handleActions(
  {
    [fetchRequest]: () => [],
    [fetchSuccess]: (_state, action) => action.payload
  },
  []
);

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [fetchRequest]: () => null,
    [fetchFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  data,
  isLoading,
  error
});

export const getFollowersData = state => state.followers.data;
export const getIsLoading = state => state.followers.isLoading;
export const getError = state => state.followers.error;
