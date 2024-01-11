import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { GET_ALL_PRODUCTS } from "../types";
import {
  getProductsErrorAction,
  getProductsSuccessAction,
} from "../reducers/products";

// Generator function
function* getProductsSaga(payload) {
  try {
    const response = yield axios.get(`https://fakestoreapi.com/products`);
    yield put(getProductsSuccessAction(response.data));
  } catch (error) {
    yield put(getProductsErrorAction(error));
  }
}

// Generator function
export function* watchGetAllProducts() {
  yield takeLatest(GET_ALL_PRODUCTS, getProductsSaga);
}
