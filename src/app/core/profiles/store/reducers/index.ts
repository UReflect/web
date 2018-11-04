import * as fromProfiles                           from './profile.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

/**
 * Returns profile state definition
 */
export interface IProfileState {
  /**
   * Profile state
   */
  profiles: fromProfiles.IState
}

/**
 * Returns profile state reducer definition
 */
export const reducers: ActionReducerMap<IProfileState> = {
  /**
   * Profile reducer
   */
  profiles: fromProfiles.reducer
}

/**
 * Returns profile state definition using a FeatureSelector
 */
export const getProfilesState = createFeatureSelector<IProfileState>(
  'profiles'
)
