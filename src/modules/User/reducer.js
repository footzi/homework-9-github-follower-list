import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

// Обратите внимание на тесты, они помогут вам написать код редьюсера
const data = handleActions(
  {
    [handleActions]: () => null,
    [fetchSuccess]: (_state, action) => action.payload
  }, null
)

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false,
  }, false
)

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

export const getUserData = (state) => state.user.data;
export const getIsLoading = state => state.user.isLoading;
export const getError = state => state.user.error;