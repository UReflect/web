import * as fromModules                            from './module.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

/**
 * Exports module state
 */
export interface IModulesState {
  /**
   * Modules state
   */
  modules: fromModules.IState
}

/**
 * Exports module reducer
 */
export const reducers: ActionReducerMap<IModulesState> = {
  /**
   * Modules reducer
   */
  modules: fromModules.reducer
}

/**
 * Feature Selector for modules
 */
export const getModulesState = createFeatureSelector<IModulesState>(
  'modules'
)
