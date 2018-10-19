import * as fromModules                            from './module.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

export interface IModulesState {
  modules: fromModules.IState
}

export const reducers: ActionReducerMap<IModulesState> = {
  modules: fromModules.reducer
}

export const getModulesState = createFeatureSelector<IModulesState>(
  'modules'
)
