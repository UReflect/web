import { Action } from '@ngrx/store'
import { IUser }  from '@core/auth/models/user'

export enum LoggedUserActionTypes {
  StoreUser = '[Logged User] Store User',
  ClearUser = '[Logged User] Clear User'
}

export class StoreUser implements Action {
  readonly type = LoggedUserActionTypes.StoreUser

  constructor(public payload: IUser) {
  }
}

export class ClearUser implements Action {
  readonly type = LoggedUserActionTypes.ClearUser
}

export type LoggedUserActionsUnion =
  | StoreUser
  | ClearUser
