import * as fromLayout                                                                         from '../core/layout/reducers/layout.reducer'
import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store'
import { environment }                                                                         from '@env/environment'
import { storeFreeze }                                                                         from 'ngrx-store-freeze'
import * as fromRouter                                                                         from '@ngrx/router-store'

export interface State {
  layout: fromLayout.State
  router: fromRouter.RouterReducerState
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  router: fromRouter.routerReducer
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state)
    console.log('action', action)

    return reducer(state, action)
  }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger, storeFreeze] : []

export const getLayoutState = createFeatureSelector<State, fromLayout.State>('layout')

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav)
