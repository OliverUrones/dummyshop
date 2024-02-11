import {AppState} from "../index";
import {createSelector} from "@ngrx/store";
import {AuthState} from "./auth.state";

export const selectAuthFeature = (state: AppState) => state.auth;

export const selectUser = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.user
);

export const selectIsLoadingLogin = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.isLoading
);

export const selectErrorLogin = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.error
);
