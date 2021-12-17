import { all, fork } from "redux-saga/effects";
import watchFetchMovie from "./Movie-IMDB/saga";


export default function* rootSaga() {
  yield all([fork(watchFetchMovie)]);
}