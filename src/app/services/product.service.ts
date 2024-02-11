import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProductsResponse } from "../core/models/products.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    apiBaseUrl: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProductsResponse> {
    return this.http.get<IProductsResponse>(`${this.apiBaseUrl}/products`)
  }
}
