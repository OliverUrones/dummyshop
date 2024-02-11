import {EntityState} from "@ngrx/entity";
import {IProduct} from "../../core/models/products.model";

export interface FavouriteState extends EntityState<IProduct>{}
