import * as fromFeature   from '../reducers'
import * as fromUsers     from '../reducers/user.reducer'
import * as fromRouter    from '@store'
import { createSelector } from '@ngrx/store'
import { IUser }          from '@core/users/model/user.model'

/**
 * Selector to get user's state
 */
export const getUserState = createSelector(
  fromFeature.getUsersState,
  (state: fromFeature.IUserState) => state.users
)

/**
 * Selector to get all user entities
 */
export const getUserEntities = createSelector(
  getUserState,
  fromUsers.getEntities
)

/**
 * Selector to get user according to router param 'id'
 */
export const getSelectedUser = createSelector(
  getUserState,
  fromRouter.getRouterState,
  (entities, router): IUser => {
    return router.state && entities.entities[router.state.params.id]
  }
)

/**
 * Selector to get all users in an array
 */
export const getAllUsers = createSelector(
  getUserEntities, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)])
  }
)

/**
 * Selector to get user by its 'ID'
 */
export const getUserById = createSelector(
  getUserEntities, (entities, id) => {
    return entities[id]
  }
)

/**
 * Selector to get boolean 'loaded'
 * This boolean indicates if the users are loaded
 */
export const getUserLoaded = createSelector(
  getUserState,
  fromUsers.getLoaded
)

/**
 * Selector to get boolean 'loading'
 * This boolean indicates if the users are loading
 */
export const getUserLoading = createSelector(
  getUserState,
  fromUsers.getLoading
)

/**
 * Selector to get errors related to user store
 */
export const getUserError = createSelector(
  getUserState,
  fromUsers.getError
)
