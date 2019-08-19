import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getUserInfo } from './api';
import { getApiKey } from '../Auth';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const apiKey = yield select(getApiKey);
  const user = action.payload;

  try {
    const result = yield call(getUserInfo, apiKey, user);
    yield put(fetchSuccess(result));
  } catch ({ message }) {
    yield put(fetchFailure(message));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
