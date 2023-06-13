import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchUsersFailure, fetchUsersSuccess } from '../actions/Users';
import { FETCH_USERS } from '../constants/Users';

export const getUsers = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_BASE_API);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

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
