import { put, call, takeLatest } from 'redux-saga/effects';
import { types, actions } from './search.reducer';
import { Api } from '../../network';

function* request(action) {
  try {
    const results = yield call(Api.v1.search.find, action.query, action.lang);

    yield put(actions.success(results));
  } catch (e) {
    yield put(actions.failure(e));
  }
}

export const saga = function* saga() {
  yield takeLatest(types.FETCH_SEARCH_REQUEST, request);
};
