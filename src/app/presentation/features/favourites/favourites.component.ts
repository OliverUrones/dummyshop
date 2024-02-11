import { Component } from '@angular/core';
import {IProduct} from "../../../core/models/products.model";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {

  addToFav(product: IProduct) {
    console.log("Voy a añadir un producto a favoritos")
  }

}
