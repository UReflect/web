import { createSelector } from '@ngrx/store'
import * as fromFeature   from '../reducers/index'
import * as fromToken     from '../reducers/token.reducer'

export const getTokenState = createSelector(
  fromFeature.getAuthState,
  (state: fromFeature.IState) => state.token
)
export const getToken = createSelector(
  getTokenState,
  fromToken.getToken
)
