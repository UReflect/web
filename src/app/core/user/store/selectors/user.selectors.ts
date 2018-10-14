import * as fromFeature   from '../reducers'
import * as fromUsers     from '../reducers/user.reducer'
import * as fromRouter    from '@store'
import { createSelector } from '@ngrx/store'
import { IUser }          from '@core/user/model/user.model'

export const getUserState = createSelector(
  fromFeature.getUsersState,
  (state: fromFeature.IUserState) => state.users
)

export const getUserEntities = createSelector(
  getUserState,
  fromUsers.getEntities
)

export const getSelectedUser = createSelector(
  getUserState,
  fromRouter.getRouterState,
  (entities, router): IUser => {
    return router.state && entities.entities[router.state.params.id]
  }
)

export const getAllUsers = createSelector(
  getUserEntities, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)])
  }
)

export const getUserById = createSelector(
  getUserEntities, (entities, id) => {
    return entities[id]
  }
)

export const getUserLoaded = createSelector(
  getUserState,
  fromUsers.getLoaded
)

export const getUserLoading = createSelector(
  getUserState,
  fromUsers.getLoading
)

export const getUserError = createSelector(
  getUserState,
  fromUsers.getError
)
