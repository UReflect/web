import * as fromUsers                              from './user.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

/**
 * Returns user state definition
 */
export interface IUserReducerState {
  /**
   * User state
   */
  users: fromUsers.IUserState
}

/**
 * Returns user state reducer definition
 */
export const reducers: ActionReducerMap<IUserReducerState> = {
  /**
   * User reducer
   */
  users: fromUsers.reducer
}

/**
 * Returns user state definition using a FeatureSelector
 */
export const getUsersState = createFeatureSelector<IUserReducerState>(
  'users'
)
