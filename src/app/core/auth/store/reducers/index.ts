import * as fromToken                              from './token.reducer'
import * as fromAuthProcess                        from './auth-process.reducer'
import * as fromLoggedUser                         from './logged-user.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

/**
 * Auth state
 */
export interface IAuthReducerState {
  /**
   * Auth process state
   */
  authProcess: fromAuthProcess.IAuthProcessState,
  /**
   * Logged user state
   */
  loggedUser: fromLoggedUser.ILoggedUserState,
  /**
   * Token state
   */
  token: fromToken.ITokenState
}

/**
 * Auth reducer
 */
export const reducers: ActionReducerMap<IAuthReducerState> = {
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
export const getAuthState = createFeatureSelector<IAuthReducerState>('auth')
