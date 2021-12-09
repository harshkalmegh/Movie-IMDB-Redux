import { put, takeLatest } from "redux-saga/effects";
import { FETCH_MOVIES } from "./Action";


function* newCounterListener(actions:any) {
  console.log("Actions",actions);
}

export function* watchNewCounter() {
  yield takeLatest(FETCH_MOVIES, newCounterListener);
}