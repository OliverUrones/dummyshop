import {createAction, props} from "@ngrx/store";
import {ILogin, IUserResponse} from "../../core/models/auth.model";

const LOGIN = '[Auth] Login Action';
const LOGIN_SUCCESS = '[Auth] Login Success Action';
const LOGIN_ERROR = '[Auth] Login Error Action';
const LOGOUT = '[Auth] Logout Action';

export const loginAction = createAction(
  LOGIN,
  props<{data: ILogin}>()
);

export const loginSuccessAction = createAction(
  LOGIN_SUCCESS,
  props<{user: IUserResponse}>()
);

export const loginErrorAction = createAction(
  LOGIN_ERROR,
  props<{message: string}>()
);

export const logoutAction = createAction(
  LOGOUT
);
