import * as fromAuth                                               from './auth.reducer'
import * as fromLoginPage                                          from './login-page.reducer'
import * as fromRoot                                               from '@reducers'
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'

export interface AuthState {
  auth: fromAuth.State
  loginPage: fromLoginPage.State
}

export interface State extends fromRoot.State {
  auth: AuthState
}

export const reducers: ActionReducerMap<AuthState> = {
  auth: fromAuth.reducer,
  loginPage: fromLoginPage.reducer
}

export const selectAuthState = createFeatureSelector<State, AuthState>('auth')

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.auth
)
export const getLoggedIn = createSelector(
  selectAuthStatusState,
  fromAuth.getIsAuthenticated
)
export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser)

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.loginPage
)
export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
)
export const getLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
)
