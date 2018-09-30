import * as fromToken                                              from './token.reducer'
import * as fromAuthProcess                                        from './auth-process.reducer'
import * as fromLoggedUser                                         from './logged-user.reducer'
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'

export interface IState {
  authProcess: fromAuthProcess.IState,
  loggedUser: fromLoggedUser.IState,
  token: fromToken.IState
}

export const reducers: ActionReducerMap<IState> = {
  token: fromToken.reducer,
  loggedUser: fromLoggedUser.reducer,
  authProcess: fromAuthProcess.reducer
}

export const getAuthState = createFeatureSelector<IState>('auth')
