import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {IProduct} from "../core/models/products.model";
import {Dictionary} from "@ngrx/entity";
import {Store} from "@ngrx/store";
import {AppState} from "../store";
import * as favouriteSelectors from "../store/favourites/favourite.selectors"

@Injectable(
  {
    providedIn: 'root'
  }
)
export class FavouriteFacade {
  favourites$: Observable<IProduct[] | null>;
  entities$: Observable<Dictionary<IProduct> | null>;

  constructor(private readonly store: Store<AppState>) {
    this.favourites$ = this.store.select(favouriteSelectors.selectAllFavourites);
    this.entities$ = this.store.select(favouriteSelectors.selectAllEntities);
  }
}
