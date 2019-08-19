import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getFollowersInfo } from './api';
import { getApiKey } from '../Auth';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE
  const apiKey = yield select(getApiKey);
  const user = action.payload;

  try {
    const result = yield call(getFollowersInfo, apiKey, user);
    yield put(fetchSuccess(result));
  } catch ({ message }) {
    yield put(fetchFailure(message));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
