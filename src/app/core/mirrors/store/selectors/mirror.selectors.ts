import * as fromFeature   from '../reducers'
import * as fromMirrors   from '../reducers/mirror.reducer'
import * as fromRouter    from '@store'
import { createSelector } from '@ngrx/store'
import { IMirror }        from '@core/mirrors/models'
import { getAuthState }   from '@core/auth/store'

/**
 * Selector to get mirror's state
 */
export const getMirrorState = createSelector(
  fromFeature.getMirrorsState,
  (state: fromFeature.IMirrorReducerState) => state.mirrors
)

/**
 * Selector to get all mirror entities
 */
export const getMirrorEntities = createSelector(
  getMirrorState,
  fromMirrors.getEntities
)

/**
 * Selector to get mirror according to router param 'id'
 */
export const getSelectedMirror = createSelector(
  getMirrorState,
  fromRouter.getRouterState,
  (entities, router): IMirror => {
    return router.state && entities.entities[router.state.params.id]
  }
)

/**
 * Selector to get all mirrors in an array
 */
export const getAllMirrors = createSelector(
  getMirrorEntities, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)])
  }
)

/**
 * Gets all mirrors by user ID
 */
export const getAllMirrorsByUserId = createSelector(
  getMirrorEntities,
  (entities, userID) => {
    const ret = []
    Object.keys(entities).map(id => {
      if (entities[parseInt(id, 10)].userID === parseInt(userID, 10)) {
        ret.push(entities[parseInt(id, 10)])
      }
    })
    return ret
  }
)

/**
 * Gets all mirrors for currently logged user
 */
export const getAllLoggedUserMirrors = createSelector(
  getMirrorEntities,
  getAuthState,
  (entities, auth) => {
    const ret = []
    Object.keys(entities).map(id => {
      if (entities[parseInt(id, 10)].userID === auth.loggedUser.user.ID) {
        ret.push(entities[parseInt(id, 10)])
      }
    })
    return ret
  }
)

/**
 * Selector to get mirror by its 'ID'
 */
export const getMirrorById = createSelector(
  getMirrorEntities, (entities, id) => {
    return entities[id]
  }
)

/**
 * Selector to get boolean 'loaded'
 * This boolean indicates if the mirrors are loaded
 */
export const getMirrorLoaded = createSelector(
  getMirrorState,
  fromMirrors.getLoaded
)

/**
 * Selector to get boolean 'loading'
 * This boolean indicates if the mirrors are loading
 */
export const getMirrorLoading = createSelector(
  getMirrorState,
  fromMirrors.getLoading
)

/**
 * Selector to get errors related to mirror store
 */
export const getMirrorError = createSelector(
  getMirrorState,
  fromMirrors.getError
)
