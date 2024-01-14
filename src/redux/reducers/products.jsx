import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../types";

const usersInitialState = {
  products: {
    productsData: null,
    isProductsLoading: false,
    productsErrors: "",
    productList: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
};

export const productsSlice = createSlice({
  name: PRODUCTS,
  initialState: usersInitialState,
  reducers: {
    /* This action will trigger our saga middleware
       and set the loader to true and reset error message.
    */
    getAllProductsAction: (state, payload) => {
      state.products.isProductsLoading = true;
      state.products.productsErrors = "";
    },
    getProductsSuccessAction: (state, payload) => {
      state.products.isProductsLoading = false;
      state.products.productsData = payload.payload;
    },
    getProductsErrorAction: (state, { payload: error }) => {
      state.products.isProductsLoading = false;
      state.products.productsErrors = error;
    },
    setTotalPrice: (state, { payload: price }) => {
      state.products.totalPrice = price;
    },
    setTotalQuantity: (state, { payload: quatity }) => {
      state.products.totalQuantity = quatity;
    },
    setProductList: (state, { payload: selectedProduct }) => {
      const isProductExist = state.products.productList.findIndex(
        (prod) => prod.id === selectedProduct.id
      );
      if (isProductExist >= 0) {
        state.products.productList[isProductExist] = selectedProduct;
      } else {
        state.products.productList = [
          ...state.products.productList,
          selectedProduct,
        ];
      }
    },
  },
});

/* getUserSuccessAction and getUserErrorAction will be used inside the saga
  middleware. Only getUserAction will be used in a React component.
*/

export const {
  getAllProductsAction,
  getProductsSuccessAction,
  getProductsErrorAction,
  setTotalPrice,
  setTotalQuantity,
  setProductList,
} = productsSlice.actions;

export default productsSlice.reducer;
