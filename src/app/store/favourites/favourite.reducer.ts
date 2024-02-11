import {createEntityAdapter, EntityAdapter} from "@ngrx/entity";
import {IProduct} from "../../core/models/products.model";
import {FavouriteState} from "./favourite.state";
import {createReducer, on} from "@ngrx/store";
import * as favouriteActions from "./favourite.actions";

export const adapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>();

export const initialState: FavouriteState = adapter.getInitialState();

export const favouriteReducer = createReducer(
  initialState,
  on(favouriteActions.loadFavouritesSuccess, (state, action) => {
    return adapter.setAll(action.favourites, {
      ...state
    })
  }),
  on(favouriteActions.addToFavourites, (state, action) => {
    return adapter.addOne(action.favourite, state)
  }),
  on(favouriteActions.removeFromFavourites, (state, action) => {
    return adapter.removeOne(action.favourite.id, state)
  })
)

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
