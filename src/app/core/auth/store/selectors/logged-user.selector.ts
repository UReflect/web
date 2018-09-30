import { createSelector }  from '@ngrx/store'
import * as fromFeature    from '../reducers/index'
import * as fromLoggedUser from '../reducers/logged-user.reducer'

export const getLoggedUserState = createSelector(
  fromFeature.getAuthState,
  (state: fromFeature.IState) => state.loggedUser
)
export const getLoggedUser = createSelector(
  getLoggedUserState,
  fromLoggedUser.getUser
)
