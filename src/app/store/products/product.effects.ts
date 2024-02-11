import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { ProductService } from "../../services/product.service";
import * as productActions from './product.actions'
import {catchError, map, mergeMap, of} from "rxjs";

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.loadProducts),
      mergeMap((action) =>
        this.productService.getProducts().pipe(
          map((response) => {
            return productActions.loadProductsSuccess({products: response.products})
          }),
          catchError((error) =>
            of(productActions.loadProductsError({message: error.error.message }))
          )
        )
      )
    )
  )
}
