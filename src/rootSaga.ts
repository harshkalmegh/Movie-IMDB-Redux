import { all, fork } from "redux-saga/effects";
import { watchNewCounter } from "./Movie-IMDB/saga";


export default function* rootSaga() {
  yield all([fork(watchNewCounter)]);
}