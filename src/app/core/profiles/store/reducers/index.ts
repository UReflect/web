import * as fromProfiles                           from './profile.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

/**
 * Returns profile state definition
 */
export interface IProfileReducerState {
  /**
   * Profile state
   */
  profiles: fromProfiles.IProfileState
}

/**
 * Returns profile state reducer definition
 */
export const reducers: ActionReducerMap<IProfileReducerState> = {
  /**
   * Profile reducer
   */
  profiles: fromProfiles.reducer
}

/**
 * Returns profile state definition using a FeatureSelector
 */
export const getProfilesState = createFeatureSelector<IProfileReducerState>(
  'profiles'
)
