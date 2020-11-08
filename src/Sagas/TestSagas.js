import {put} from 'redux-saga/effects';
import TestActions from '../Redux/TestRedux';

export function* test(action) {
  try {
    console.log('action', action);
    yield put(TestActions.TestRequest(action.text));
  } catch (error) {
    console.log('err', error);
  }
}
