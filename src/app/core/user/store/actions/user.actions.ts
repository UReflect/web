import { Action } from '@ngrx/store'
import { IUser }  from '@core/user/model/user.model'

export enum UserActionTypes {
  LoadAll = '[User] Load All User',
  LoadAllSuccess = '[User] Load All User Success',
  LoadAllFailure = '[User] Load All User Failure',
  Create = '[User] Create User',
  CreateSuccess = '[User] Create User Success',
  CreateFailure = '[User] Create User Failure',
  Update = '[User] Update User',
  UpdateSuccess = '[User] Update User Success',
  UpdateFailure = '[User] Update User Failure',
  Delete = '[User] Delete User',
  DeleteSuccess = '[User] Delete User Success',
  DeleteFailure = '[User] Delete User Failure'
}

export class LoadAll implements Action {
  readonly type = UserActionTypes.LoadAll
}

export class LoadAllSuccess implements Action {
  readonly type = UserActionTypes.LoadAllSuccess

  constructor(public payload: IUser[]) {
  }
}

export class LoadAllFailure implements Action {
  readonly type = UserActionTypes.LoadAllFailure

  constructor(public payload: any) {
  }
}

export class Create implements Action {
  readonly type = UserActionTypes.Create

  constructor(public payload: IUser) {
  }
}

export class CreateSuccess implements Action {
  readonly type = UserActionTypes.CreateSuccess

  constructor(public payload: IUser) {
  }
}

export class CreateFailure implements Action {
  readonly type = UserActionTypes.CreateFailure

  constructor(public payload: any) {
  }
}

export class Update implements Action {
  readonly type = UserActionTypes.Update

  constructor(public payload: IUser) {
  }
}

export class UpdateSuccess implements Action {
  readonly type = UserActionTypes.UpdateSuccess

  constructor(public payload: IUser) {
  }
}

export class UpdateFailure implements Action {
  readonly type = UserActionTypes.UpdateFailure

  constructor(public payload: any) {
  }
}

export class Delete implements Action {
  readonly type = UserActionTypes.Delete

  constructor(public payload: IUser) {
  }
}

export class DeleteSuccess implements Action {
  readonly type = UserActionTypes.DeleteSuccess

  constructor(public payload: any) {
  }
}

export class DeleteFailure implements Action {
  readonly type = UserActionTypes.DeleteFailure

  constructor(public payload: any) {
  }
}

export type UserActionsUnion =
  | LoadAll
  | LoadAllSuccess
  | LoadAllFailure
  | Create
  | CreateSuccess
  | CreateFailure
  | Update
  | UpdateSuccess
  | UpdateFailure
  | Delete
  | DeleteSuccess
  | DeleteFailure
