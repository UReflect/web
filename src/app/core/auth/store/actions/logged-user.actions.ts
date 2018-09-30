import { Action } from '@ngrx/store'
import { IUser }  from '../../models/user'

export enum LoggedUserActionTypes {
  StoreLoggedUser = '[Logged User] Store Logged User',
  ClearLoggedUser = '[Logged User] Clear User'
}

export class StoreLoggedUser implements Action {
  readonly type = LoggedUserActionTypes.StoreLoggedUser

  constructor(public payload: IUser) {
  }
}

export class ClearLoggedUser implements Action {
  readonly type = LoggedUserActionTypes.ClearLoggedUser
}

export type LoggedUserActionsUnion =
  | StoreLoggedUser
  | ClearLoggedUser
