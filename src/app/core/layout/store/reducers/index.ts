import * as fromLayout                             from './layout.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

/**
 * Returns layout state
 */
export interface ILayoutReducerState {
  /**
   * Layout state
   */
  layout: fromLayout.ILayoutState
}

/**
 * Returns layout store
 */
export const reducers: ActionReducerMap<ILayoutReducerState> = {
  /**
   * Layout reducer
   */
  layout: fromLayout.reducer
}

/**
 * Feature selector for layout store
 */
export const getLayoutState = createFeatureSelector<ILayoutReducerState>(
  'layout'
)
