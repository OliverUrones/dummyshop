import {EntityState} from "@ngrx/entity";
import {IProduct} from "../../core/models/products.model";

export interface ProductState extends EntityState<IProduct>{}
