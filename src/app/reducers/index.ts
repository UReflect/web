import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store'
import { environment }                                  from '@env/environment'
import { storeFreeze }                                  from 'ngrx-store-freeze'
import * as fromRouter                                  from '@ngrx/router-store'
import { localStorageSync }                             from 'ngrx-store-localstorage'
import { Params }                                       from '@angular/router'

export interface IRouteStateUrl {
  url: string,
  queryParams: Params,
  params: Params
}

export interface IState {
  routerReducer: fromRouter.RouterReducerState<IRouteStateUrl>
}

export const reducers: ActionReducerMap<IState> = {
  routerReducer: fromRouter.routerReducer
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

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [logger, storeFreeze, localStorageSyncReducer]
  : [localStorageSyncReducer]
