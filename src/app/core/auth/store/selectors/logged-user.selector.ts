import { createSelector }  from '@ngrx/store'
import * as fromFeature    from '../reducers/index'
import * as fromLoggedUser from '../reducers/logged-user.reducer'

/**
 * Logged user state selector
 */
export const getLoggedUserState = createSelector(
  fromFeature.getAuthState,
  (state: fromFeature.IAuthReducerState) => state.loggedUser
)

/**
 * Logged user selector
 */
export const getLoggedUser = createSelector(
  getLoggedUserState,
  fromLoggedUser.getUser
)
