import * as fromMirrors                            from './mirror.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

/**
 * Returns mirror state definition
 */
export interface IMirrorState {
  /**
   * Mirror state
   */
  mirrors: fromMirrors.IState
}

/**
 * Returns mirror state reducer definition
 */
export const reducers: ActionReducerMap<IMirrorState> = {
  /**
   * Mirror reducer
   */
  mirrors: fromMirrors.reducer
}

/**
 * Returns mirror state definition using a FeatureSelector
 */
export const getMirrorsState = createFeatureSelector<IMirrorState>(
  'mirrors'
)
