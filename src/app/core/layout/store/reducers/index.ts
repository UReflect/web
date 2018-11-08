import * as fromLayout                             from './layout.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

/**
 * Returns layout state
 */
export interface IState {
  /**
   * Layout state
   */
  layout: fromLayout.IState
}

/**
 * Returns layout store
 */
export const reducers: ActionReducerMap<IState> = {
  /**
   * Layout reducer
   */
  layout: fromLayout.reducer
}

/**
 * Feature selector for layout store
 */
export const getLayoutState = createFeatureSelector<IState>(
  'layout'
)
