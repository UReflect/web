import * as fromFeature   from '../reducers'
import * as fromProfiles  from '../reducers/profile.reducer'
import * as fromRouter    from '@store'
import { createSelector } from '@ngrx/store'
import { IProfile }       from '@core/profiles/models'

/**
 * Selector to get profile's state
 */
export const getProfileState = createSelector(
  fromFeature.getProfilesState,
  (state: fromFeature.IProfileState) => state.profiles
)

/**
 * Selector to get all profile entities
 */
export const getProfileEntities = createSelector(
  getProfileState,
  fromProfiles.getEntities
)

/**
 * Selector to get profile according to router param 'id'
 */
export const getSelectedProfile = createSelector(
  getProfileState,
  fromRouter.getRouterState,
  (entities, router): IProfile => {
    return router.state && entities.entities[router.state.params.id]
  }
)

/**
 * Selector to get all profiles in an array
 */
export const getAllProfiles = createSelector(
  getProfileEntities, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)])
  }
)

/**
 * Selector to get profile by its 'ID'
 */
export const getProfileById = createSelector(
  getProfileEntities, (entities, id) => {
    return entities[id]
  }
)

/**
 * Selector to get boolean 'loaded'
 * This boolean indicates if the profiles are loaded
 */
export const getProfileLoaded = createSelector(
  getProfileState,
  fromProfiles.getLoaded
)

/**
 * Selector to get boolean 'loading'
 * This boolean indicates if the profiles are loading
 */
export const getProfileLoading = createSelector(
  getProfileState,
  fromProfiles.getLoading
)

/**
 * Selector to get errors related to profile store
 */
export const getProfileError = createSelector(
  getProfileState,
  fromProfiles.getError
)
