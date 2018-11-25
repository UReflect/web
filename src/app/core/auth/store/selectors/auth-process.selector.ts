import { createSelector }   from '@ngrx/store'
import * as fromFeature     from '../reducers/index'
import * as fromAuthProcess from '../reducers/auth-process.reducer'

/**
 * Auth process state selector
 */
export const getAuthProcessState = createSelector(
  fromFeature.getAuthState,
  (state: fromFeature.IAuthReducerState) => state.authProcess
)

/**
 * IsAuthenticated selector
 */
export const getIsAuthenticated = createSelector(
  getAuthProcessState,
  fromAuthProcess.getIsAuthenticated
)

/**
 * Pending selector
 */
export const getPending = createSelector(
  getAuthProcessState,
  fromAuthProcess.getPending
)

/**
 * Error selector
 */
export const getError = createSelector(
  getAuthProcessState,
  fromAuthProcess.getError
)
