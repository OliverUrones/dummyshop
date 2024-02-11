import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {FavouriteService} from "../../services/favourite.service";
import * as favouriteActions from "./favourite.actions";
import {map, mergeMap} from "rxjs";
import {IProduct} from "../../core/models/products.model";

@Injectable()
export class FavouriteEffects {
  constructor(private actions$: Actions, private favouriteService: FavouriteService) {}

  loadFavourites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(favouriteActions.loadFavourites),
      mergeMap((action) =>
        this.favouriteService.getFavouritesFromSessionStorage().pipe(
          map((favourites: IProduct[]) => {
            return favouriteActions.loadFavouritesSuccess({favourites: favourites})
          })
        )
      )
    )
  )

  addFavourite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(favouriteActions.addToFavourites),
      mergeMap((action) =>
        this.favouriteService.addFavouriteInSessionStorage(action.favourite).pipe(
          map((favourites: IProduct[]) => {
            return favouriteActions.addToFavouritesSuccess({favourites: favourites})
          })
        )
      )
    )
  )

  removeFavourite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(favouriteActions.removeFromFavourites),
      mergeMap((action) =>
        this.favouriteService.removeFavouriteFromSessionStorage(action.favourite).pipe(
          map((favourites: IProduct[]) =>{
            return favouriteActions.removeFromFavouritesSuccess({favourites: favourites})
          })
        )
      )
    )
  )
}
