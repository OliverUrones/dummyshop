import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../store";
import * as productSelectors from '../store/products/product.selectors';
import * as productActions from '../store/products/product.actions';
import {IProduct} from "../core/models/products.model";
import {Dictionary} from "@ngrx/entity";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProductFacade {
  products$: Observable<IProduct[] | null>;
  entities$: Observable<Dictionary<IProduct> | null>;
  //error$: Observable<string | null>;

  constructor(private readonly store: Store<AppState>) {
    this.products$ = this.store.select(productSelectors.selectAllProducts)
    this.entities$ = this.store.select(productSelectors.selectAllEntities)
  }

  getProducts() {
    this.store.dispatch(productActions.loadProducts());
  }
}
