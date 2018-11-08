import { Action } from '@ngrx/store'
import { IUser }  from '@core/users/model/user.model'

export enum LoggedUserActionTypes {
  StoreLoggedUser = '[Logged User] Store Logged User',
  ClearLoggedUser = '[Logged User] Clear User'
}

/**
 * Store logged user action
 */
export class StoreLoggedUser implements Action {
  /**
   * Action type
   * '[Logged User] Store Logged User'
   */
  readonly type = LoggedUserActionTypes.StoreLoggedUser

  /**
   * Constructor
   * @param payload Logged user
   */
  constructor(public payload: IUser) {
  }
}

/**
 * Clear logged user action
 */
export class ClearLoggedUser implements Action {
  /**
   * Action type
   * '[Logged User] Clear Logged User'
   */
  readonly type = LoggedUserActionTypes.ClearLoggedUser
}

export type LoggedUserActionsUnion =
  | StoreLoggedUser
  | ClearLoggedUser
