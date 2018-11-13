import * as fromModules                            from './module.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

/**
 * Exports module state
 */
export interface IModuleReducerState {
  /**
   * Modules state
   */
  modules: fromModules.IModuleState
}

/**
 * Exports module reducer
 */
export const reducers: ActionReducerMap<IModuleReducerState> = {
  /**
   * Modules reducer
   */
  modules: fromModules.reducer
}

/**
 * Feature Selector for modules
 */
export const getModulesState = createFeatureSelector<IModuleReducerState>(
  'modules'
)
