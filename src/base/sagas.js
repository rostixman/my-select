import { fork, all } from 'redux-saga/effects';

import { saga as app } from 'chunks/app';
import { saga as search } from 'chunks/search';

export function* sagas() {
  yield all([fork(app), fork(search)]);
}
