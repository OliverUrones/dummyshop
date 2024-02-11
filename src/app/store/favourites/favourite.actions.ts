import {createAction, props} from "@ngrx/store";
import {IProduct} from "../../core/models/products.model";

const LOAD_FAVOURITES = '[Favourites] Load Favourites Action';
const LOAD_FAVOURITES_SUCCESS = '[Favourites] Load Favourites Success Action';
const ADD_TO_FAVOURITES = '[Favourites] Add to Favourites Action';
const ADD_TO_FAVOURITES_SUCCESS = '[Favourites] Add to Favourites Success Action';
const REMOVE_FROM_FAVOURITES = '[Favourites] Remove from Favourites Action';
const REMOVE_FROM_FAVOURITES_SUCCESS = '[Favourites] Remove from Favourites Success Action';

export const loadFavourites = createAction(
  LOAD_FAVOURITES
);

export const loadFavouritesSuccess = createAction(
  LOAD_FAVOURITES_SUCCESS,
  props<{favourites: IProduct[]}>()
)

export const addToFavourites = createAction(
  ADD_TO_FAVOURITES,
  props<{favourite: IProduct}>()
);

export const addToFavouritesSuccess = createAction(
  ADD_TO_FAVOURITES_SUCCESS,
  props<{favourites: IProduct[]}>()
);

export const removeFromFavourites = createAction(
  REMOVE_FROM_FAVOURITES,
  props<{favourite: IProduct}>()
);

export const removeFromFavouritesSuccess = createAction(
  REMOVE_FROM_FAVOURITES_SUCCESS,
  props<{favourites: IProduct[]}>()
)
