import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {ProductFacade} from "../../../facades/product.facade";
import {IProduct} from "../../../core/models/products.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

    products$: Observable<any | null>;
    entities$: Observable<any | null>;

    constructor(private productsFacade: ProductFacade) {
      this.productsFacade.getProducts()
      this.products$ = this.productsFacade.products$
      this.entities$ = this.productsFacade.entities$
    }

  addToFav(product: IProduct) {
    console.log("Voy a añadir un producto a favoritos")
  }
}
