import { AppState } from "../index";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectAll, selectEntities } from "./product.reducer";
import {ProductState} from "./product.state";

export const selectProductFeature = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductFeature,
  selectAll
);

export const selectAllEntities = createSelector(
  selectProductFeature,
  selectEntities
);
