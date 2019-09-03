import { all, takeLatest } from 'redux-saga/effects';
import { get } from './Cart/sagas';
import { Types } from './Cart/types';

export default function* rootSaga() {
  return yield all([takeLatest(Types.LOAD_REQUEST, get)]);
}
