import {createFeatureSelector, createSelector} from "@ngrx/store";
import {FavouriteState} from "./favourite.state";
import {selectAll, selectEntities} from "./favourite.reducer";

export const selectFavrouriteFeature = createFeatureSelector<FavouriteState>('favourites');

export const selectAllFavourites = createSelector(
  selectFavrouriteFeature,
  selectAll
);

export const selectAllEntities = createSelector(
  selectFavrouriteFeature,
  selectEntities
)
