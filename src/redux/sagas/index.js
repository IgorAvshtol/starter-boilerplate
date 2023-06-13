import { all } from 'redux-saga/effects';
import Auth from './Auth';
import { watchFetchUsers } from './Users';

export default function* rootSaga() {
  yield all([
    Auth(),
    watchFetchUsers(),
  ]);
}
