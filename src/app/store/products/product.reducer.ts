import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {IProduct} from "../../core/models/products.model";
import {createReducer, on} from "@ngrx/store";
import * as productActions from './product.actions'
import {ProductState} from "./product.state";

export const adapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>();

export const initialState: ProductState = adapter.getInitialState();

export const productReducer = createReducer(
  initialState,
  on(productActions.loadProductsSuccess, (state, action) => {
    return adapter.setAll(action.products, {
      ...state,
      isFav: false
    })
  }),
  on(productActions.loadProductsError, (state, {}) => {
    return adapter.removeAll(state)
  })
)

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
