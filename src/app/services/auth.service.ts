import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ILogin, IUserResponse} from "../core/models/auth.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl:string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  login(data: ILogin): Observable<IUserResponse> {
    return this.http.post<IUserResponse>(`${this.apiBaseUrl}/login`, data);
  }
}
