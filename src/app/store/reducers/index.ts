import { ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store'
import { environment }                                                         from '../../../environments/environment'
import { storeFreeze }                                                         from 'ngrx-store-freeze'
import * as fromRouter                                                         from '@ngrx/router-store'
import { localStorageSync }                                                    from 'ngrx-store-localstorage'
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot }                 from '@angular/router'

/**
 * Router url app state
 */
export interface IRouterStateUrl {
  /**
   * Router url
   */
  url: string,
  /**
   * Router query parameters
   */
  queryParams: Params,
  /**
   * Router parameters
   */
  params: Params
}

/**
 * Router app state
 */
export interface IState {
  /**
   * router reducer imported from router state
   */
  routerReducer: fromRouter.RouterReducerState<IRouterStateUrl>
}

/**
 * Router app reducer
 */
export const reducers: ActionReducerMap<IState> = {
  routerReducer: fromRouter.routerReducer
}

/**
 * Logger method used in development
 * @param reducer app reducer
 */
export function logger(reducer: ActionReducer<IState>): ActionReducer<IState> {
  return function (state: IState, action: any): IState {
    console.log('state', state)
    console.log('action', action)

    return reducer(state, action)
  }
}

/**
 * Feature selector for router state
 */
export const getRouterState
  = createFeatureSelector<fromRouter.RouterReducerState<IRouterStateUrl>>
('routerReducer')

/**
 * Store state in local storage
 * @param reducer app reducer
 */
export function localStorageSyncReducer(
  reducer: ActionReducer<IState>): ActionReducer<IState> {
  return localStorageSync({
    keys: ['routerReducer', 'auth', 'layout', 'modules', 'users',
      'comments'],
    rehydrate: true
  })(reducer)
}

/**
 * Changes methods used in production or development
 * e.g. logger is disabled in prod
 */
export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [logger, storeFreeze, localStorageSyncReducer]
  : [localStorageSyncReducer]

/**
 * Router serializer
 */
export class CustomSerializer
  implements fromRouter.RouterStateSerializer<IRouterStateUrl> {

  /**
   * Serialize router state
   * @param routerState Router state
   */
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
