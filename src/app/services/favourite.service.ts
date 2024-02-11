import { Injectable } from '@angular/core';
import {IProduct} from "../core/models/products.model";
import {of} from "rxjs";
import {reportUnhandledError} from "rxjs/internal/util/reportUnhandledError";

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor() { }

  addFavouriteInSessionStorage(favourite: IProduct) {
    const sessionData: string = sessionStorage.getItem('favourites') || '[]';
    const favourites = JSON.parse(sessionData);
    if(!favourites.includes(favourite)) {
      favourites.push(favourite);
      sessionStorage.setItem('favourites', JSON.stringify(favourites));
    }
    return of(favourites);
  }

  removeFavouriteFromSessionStorage(favourite: IProduct) {
    const sessionData: string = sessionStorage.getItem('favourites') || '[]';
    let favourites = JSON.parse(sessionData);
    favourites = favourites.filter((fav: IProduct) => fav.id != favourite.id);
    if(favourites) {
      sessionStorage.setItem('favourites', JSON.stringify(favourites));

      return of(favourites)
    }
    return of(null)
  }

  getFavouritesFromSessionStorage() {
    const sessionData: string = sessionStorage.getItem('favourites') || '[]';
    const favourites = JSON.parse(sessionData);
    if(favourites) {
      return of(favourites)
    } else {
      return of([])
    }
  }
}
