import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ILogin, IUser} from "../core/models/auth.model";
import {Store} from "@ngrx/store";
import {AppState} from "../store";
import * as authSelectors from "../store/auth/auth.selectors";
import * as authActions from "../store/auth/auth.actions";

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  user$: Observable<IUser | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>

  constructor(private readonly store: Store<AppState>) {
    this.user$ = this.store.select(authSelectors.selectUser);
    this.isLoading$ = this.store.select(authSelectors.selectIsLoadingLogin);
    this.error$ = this.store.select(authSelectors.selectErrorLogin);
  }

  login(data: ILogin) {
    this.store.dispatch(authActions.loginAction({ data }));
  }

  logout() {
    this.store.dispatch(authActions.logoutAction());
  }
}
