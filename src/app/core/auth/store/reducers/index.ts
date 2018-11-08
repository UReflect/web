import * as fromToken                              from './token.reducer'
import * as fromAuthProcess                        from './auth-process.reducer'
import * as fromLoggedUser                         from './logged-user.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

/**
 * Auth state
 */
export interface IState {
  /**
   * Auth process state
   */
  authProcess: fromAuthProcess.IState,
  /**
   * Logged user state
   */
  loggedUser: fromLoggedUser.IState,
  /**
   * Token state
   */
  token: fromToken.IState
}

/**
 * Auth reducer
 */
export const reducers: ActionReducerMap<IState> = {
  /**
   * Token reducer
   */
  token: fromToken.reducer,
  /**
   * Logged user reducer
   */
  loggedUser: fromLoggedUser.reducer,
  /**
   * Auth process reducer
   */
  authProcess: fromAuthProcess.reducer
}

/**
 * Auth feature selector
 */
export const getAuthState = createFeatureSelector<IState>('auth')
