/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects';
import api from '../../../Services/api';
import * as Actions from './actions';

export function* get() {
  try {
    const response = yield call(api.get, 'products');
    yield put(Actions.loadSuccess(response.data));
  } catch (error) {
    yield put(Actions.loadFailure());
  }
}
