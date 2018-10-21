import { Action } from '@ngrx/store'
import { IUser }  from '@core/users/model/user.model'

export enum UserActionTypes {
  LoadAll = '[User] Load All',
  LoadAllSuccess = '[User] Load All Success',
  LoadAllFailure = '[User] Load All Failure',
  Create = '[User] Create',
  CreateSuccess = '[User] Create Success',
  CreateFailure = '[User] Create Failure',
  Update = '[User] Update',
  UpdateSuccess = '[User] Update Success',
  UpdateFailure = '[User] Update Failure',
  Delete = '[User] Delete',
  DeleteSuccess = '[User] Delete Success',
  DeleteFailure = '[User] Delete Failure'
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
