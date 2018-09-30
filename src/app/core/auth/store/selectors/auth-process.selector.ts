import { createSelector }   from '@ngrx/store'
import * as fromFeature     from '../reducers/index'
import * as fromAuthProcess from '../reducers/auth-process.reducer'

export const getAuthProcessState = createSelector(
  fromFeature.getAuthState,
  (state: fromFeature.IState) => state.authProcess
)
export const getIsAuthenticated = createSelector(
  getAuthProcessState,
  fromAuthProcess.getIsAuthenticated
)
export const getPending = createSelector(
  getAuthProcessState,
  fromAuthProcess.getPending
)
export const getError = createSelector(
  getAuthProcessState,
  fromAuthProcess.getError
)
