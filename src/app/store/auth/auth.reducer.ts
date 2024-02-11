import {AuthState} from "./auth.state";
import {createReducer, on} from "@ngrx/store";
import * as authActions from './auth.actions'

export const initialAuthState: AuthState = {
  loginData: null,
  isLoading: false,
  error: null,
  user: null
};

export const authReducer = createReducer(
  initialAuthState,
  on(authActions.loginAction, (state, { data }) => {
    return {
      ...state,
      loginData: data,
      isLoading: true,
      error: null
    }
  }),
  on(authActions.loginSuccessAction, (state, { user }) => {
    return {
      ...state,
      isLoading: false,
      error: null,
      user: user
    }
  }),
  on(authActions.loginErrorAction, (state, { message }) => {
    return {
      ...state,
      isLoading: false,
      error: message,
      user: null
    }
  }),
  on(authActions.logoutAction, (state) => {
    return {
      ...state,
      loginData: null,
      isLoading: false,
      error: null,
      user: null
    }
  })
)
