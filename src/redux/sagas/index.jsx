import { all, fork } from "redux-saga/effects";
import { watchGetAllProducts } from "./products";

const rootSaga = function* () {
  yield all([
    fork(watchGetAllProducts),
    // Other forks
  ]);
};

export default rootSaga;
