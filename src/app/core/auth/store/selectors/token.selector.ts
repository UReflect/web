import { createSelector } from '@ngrx/store'
import * as fromFeature   from '../reducers/index'
import * as fromToken     from '../reducers/token.reducer'

/**
 * Token state selector
 */
export const getTokenState = createSelector(
  fromFeature.getAuthState,
  (state: fromFeature.IAuthReducerState) => state.token
)

/**
 * Token selector
 */
export const getToken = createSelector(
  getTokenState,
  fromToken.getToken
)
