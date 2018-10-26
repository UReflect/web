import { ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store'
import { environment }                                                         from '../../../environments/environment'
import { storeFreeze }                                                         from 'ngrx-store-freeze'
import * as fromRouter                                                         from '@ngrx/router-store'
import { localStorageSync }                                                    from 'ngrx-store-localstorage'
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot }                 from '@angular/router'

export interface IRouterStateUrl {
  url: string,
  queryParams: Params,
  params: Params
}

export interface IState {
  routerReducer: fromRouter.RouterReducerState<IRouterStateUrl>
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

export const getRouterState
  = createFeatureSelector<fromRouter.RouterReducerState<IRouterStateUrl>>
('routerReducer')

export function localStorageSyncReducer(
  reducer: ActionReducer<IState>): ActionReducer<IState> {
  return localStorageSync({
    keys: ['routerReducer', 'auth', 'layout', 'modules', 'users',
      'comments'],
    rehydrate: true
  })(reducer)
}

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [logger, storeFreeze, localStorageSyncReducer]
  : [localStorageSyncReducer]

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<IRouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
    const { url } = routerState
    const { queryParams } = routerState.root

    let state: ActivatedRouteSnapshot = routerState.root
    while (state.firstChild) {
      state = state.firstChild
    }
    const { params } = state

    return { url, queryParams, params }
  }
}
