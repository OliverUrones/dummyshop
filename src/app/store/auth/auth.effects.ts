import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import * as authActions from './auth.actions'
import {catchError, concatMap, map, of, tap} from "rxjs";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router:Router, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginAction),
      concatMap((action) =>
        this.authService.login(action.data).pipe(
          map((user) => {
            localStorage.setItem('token', user.token);
            return authActions.loginSuccessAction({user: user});
          }),
          catchError((error) =>
            of(authActions.loginErrorAction({message: error.error.message}))
          )
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loginSuccessAction),
      tap(() => {
        this.router.navigate(['/home']);
      })
    ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.logoutAction),
      tap(() => {
        localStorage.removeItem('token');
        this.router.navigate(['/auth/login'])
      })
    ),
    { dispatch: false }
  )
}
