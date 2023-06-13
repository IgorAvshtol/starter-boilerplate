import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchUsersFailure, fetchUsersSuccess } from '../actions/Users';
import { FETCH_USERS } from '../constants/Users';
import { getUsers } from 'users/FetchUsers';

function* fetchUsersSaga() {
  try {
    const users = yield call(getUsers);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

export function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS, fetchUsersSaga);
}
