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

export const getTokenState = createFeatureSelector<IState, fromToken.IState>('token')
export const getToken = createSelector(getTokenState, fromToken.getToken)

export const getAuthProcessState = createFeatureSelector<IState, fromAuthProcess.IState>('authProcess')
export const getPending = createSelector(getAuthProcessState, fromAuthProcess.getPending)
export const getError = createSelector(getAuthProcessState, fromAuthProcess.getError)
