import * as fromUsers                              from './user.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

/**
 * Returns user state definition
 */
export interface IUserState {
  /**
   * User state
   */
  users: fromUsers.IState
}

/**
 * Returns user state reducer definition
 */
export const reducers: ActionReducerMap<IUserState> = {
  /**
   * User reducer
   */
  users: fromUsers.reducer
}

/**
 * Returns user state definition using a FeatureSelector
 */
export const getUsersState = createFeatureSelector<IUserState>(
  'users'
)
