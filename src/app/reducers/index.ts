import {
  ActionReducer, ActionReducerMap, createFeatureSelector,
  createSelector, MetaReducer
}                           from '@ngrx/store'
import { environment }      from '@env/environment'
import { storeFreeze }      from 'ngrx-store-freeze'
import * as fromRouter      from '@ngrx/router-store'
import { localStorageSync } from 'ngrx-store-localstorage'
import * as fromAuthProcess
                            from '@core/auth/reducers/auth-process.reducer'
import * as fromLoggedUser
                            from '@core/auth/reducers/logged-user.reducer'
import * as fromLayout      from '@core/layout/reducers/layout.reducer'

export interface IState {
  router: fromRouter.RouterReducerState,
  authProcess: fromAuthProcess.IState,
  loggedUser: fromLoggedUser.IState,
  layout: fromLayout.IState
}

export const reducers: ActionReducerMap<IState> = {
  router: fromRouter.routerReducer,
  authProcess: fromAuthProcess.reducer,
  loggedUser: fromLoggedUser.reducer,
  layout: fromLayout.reducer
}

export function logger(reducer: ActionReducer<IState>): ActionReducer<IState> {
  return function (state: IState, action: any): IState {
    console.log('state', state)
    console.log('action', action)

    return reducer(state, action)
  }
}

export function localStorageSyncReducer(reducer: ActionReducer<IState>): ActionReducer<IState> {
  return localStorageSync({
    keys: ['router', 'authProcess', 'loggedUser', 'layout'],
    rehydrate: true
  })(reducer)
}

export const metaReducers: MetaReducer<IState>[] = !environment.production
  ? [logger, storeFreeze, localStorageSyncReducer]
  : [localStorageSyncReducer]

export const getLayoutState = createFeatureSelector<IState, fromLayout.IState>('layout')
export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav)

export const getAuthProcessState = createFeatureSelector<IState, fromAuthProcess.IState>('authProcess')
export const getIsAuthenticated = createSelector(getAuthProcessState, fromAuthProcess.getIsAuthenticated)

export const getLoggedUserState = createFeatureSelector<IState, fromLoggedUser.IState>('loggedUser')
export const getLoggedUser = createSelector(getLoggedUserState, fromLoggedUser.getUser)

