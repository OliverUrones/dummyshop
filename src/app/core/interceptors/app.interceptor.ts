import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Store } from "@ngrx/store";
import { logoutAction } from "../../store/auth/auth.actions";

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private store: Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let requestCloned;
    const headers: any = {
      'Content-Type': 'application/json',
    };
    const token: string | null = localStorage.getItem('token');

    if(token) {
      headers.Authorization = `Bearer ${token}`;
    }
    requestCloned = request.clone({
      url: request.url,
      setHeaders: headers
    });

    return next.handle(requestCloned).pipe(
      catchError((error:HttpErrorResponse) => {
        if(error.status === 401) {
          this.store.dispatch(logoutAction());
        }
        return throwError(() => error);
      })
    );
  }
}
