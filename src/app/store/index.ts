import { AuthState } from "./auth/auth.state";
import { authReducer } from "./auth/auth.reducer";
import { AuthEffects } from "./auth/auth.effects";
import {ProductState} from "./products/product.state";
import {productReducer} from "./products/product.reducer";
import {ProductEffects} from "./products/product.effects";
import {FavouriteState} from "./favourites/favourite.state";
import {favouriteReducer} from "./favourites/favourite.reducer";
import {FavouriteEffects} from "./favourites/favourite.effects";

export interface AppState {
  auth: AuthState,
  products: ProductState,
  favourites: FavouriteState
}

export const appReducer = {
  auth: authReducer,
  products: productReducer,
  favourites: favouriteReducer
}

export const appEffects = [AuthEffects, ProductEffects, FavouriteEffects]
