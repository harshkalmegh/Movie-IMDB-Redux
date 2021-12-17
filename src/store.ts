import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import Fetch_M from "./reducer"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Fetch_M, applyMiddleware(sagaMiddleware))


sagaMiddleware.run(rootSaga);

export default store