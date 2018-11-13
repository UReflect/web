import * as fromMirrors                            from './mirror.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

/**
 * Returns mirror state definition
 */
export interface IMirrorReducerState {
  /**
   * Mirror state
   */
  mirrors: fromMirrors.IMirrorState
}

/**
 * Returns mirror state reducer definition
 */
export const reducers: ActionReducerMap<IMirrorReducerState> = {
  /**
   * Mirror reducer
   */
  mirrors: fromMirrors.reducer
}

/**
 * Returns mirror state definition using a FeatureSelector
 */
export const getMirrorsState = createFeatureSelector<IMirrorReducerState>(
  'mirrors'
)
