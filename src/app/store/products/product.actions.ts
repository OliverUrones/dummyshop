import {createAction, props} from "@ngrx/store";
import {IProduct} from "../../core/models/products.model";

const LOAD_PRODUCTS = '[Products] Load Products Action';
const LOAD_PRODUCTS_SUCCESS = '[Products] Load Products Success Action';
const LOAD_PRODUCTS_ERROR = '[Products] Load Products Error Action';

export const loadProducts = createAction(
  LOAD_PRODUCTS,
);

export const loadProductsSuccess = createAction(
  LOAD_PRODUCTS_SUCCESS,
  props<{products: IProduct[]}>()
);

export const loadProductsError = createAction(
  LOAD_PRODUCTS_ERROR,
  props<{message: string}>()
);


