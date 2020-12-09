import { put, takeLatest } from 'redux-saga/effects';
import { app } from 'chunks/app';

function* launch() {
  yield put(app.actions.launched());
}

export const saga = function* saga() {
  yield takeLatest(app.types.LAUNCH, launch);
};
