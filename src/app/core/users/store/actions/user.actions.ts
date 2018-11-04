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

/**
 * Load all users action
 */
export class LoadAll implements Action {
  /**
   * Action type
   * '[User] Load All'
   */
  readonly type = UserActionTypes.LoadAll
}

/**
 * Load all users success action
 */
export class LoadAllSuccess implements Action {
  /**
   * Action type
   * '[User] Load All Success'
   */
  readonly type = UserActionTypes.LoadAllSuccess

  /**
   * Constructor
   * @param payload Contains received users
   */
  constructor(public payload: IUser[]) {
  }
}

/**
 * Loadd all user failure action
 */
export class LoadAllFailure implements Action {
  /**
   * Action type
   * '[User] Load All Failure'
   */
  readonly type = UserActionTypes.LoadAllFailure

  /**
   * Constructor
   * @param payload Contains received error
   */
  constructor(public payload: any) {
  }
}

/**
 * Create user action
 */
export class Create implements Action {
  /**
   * Action type
   * '[User] Create'
   */
  readonly type = UserActionTypes.Create

  /**
   * Constructor
   * @param payload Contains user info used to create new user
   */
  constructor(public payload: IUser) {
  }
}

/**
 * Create user success action
 */
export class CreateSuccess implements Action {
  /**
   * Action type
   * '[User] Create Success'
   */
  readonly type = UserActionTypes.CreateSuccess

  /**
   * Constructor
   * @param payload Contains successfully created user
   */
  constructor(public payload: IUser) {
  }
}

/**
 * Create user failure action
 */
export class CreateFailure implements Action {
  /**
   * Action type
   * '[User] Create Failure'
   */
  readonly type = UserActionTypes.CreateFailure

  /**
   * Constructor
   * @param payload Contains received error
   */
  constructor(public payload: any) {
  }
}

/**
 * Update user action
 */
export class Update implements Action {
  /**
   * Action type
   * '[User] Update'
   */
  readonly type = UserActionTypes.Update

  /**
   * Constructor
   * @param payload Contains new info for the user to update
   */
  constructor(public payload: IUser) {
  }
}

/**
 * Update user success action
 */
export class UpdateSuccess implements Action {
  /**
   * Action type
   * '[User] Update Success'
   */
  readonly type = UserActionTypes.UpdateSuccess

  /**
   * Constructor
   * @param payload Containes successfully updated user
   */
  constructor(public payload: IUser) {
  }
}

/**
 * Update user failure action
 */
export class UpdateFailure implements Action {
  /**
   * Action type
   * '[User] Update Failure'
   */
  readonly type = UserActionTypes.UpdateFailure

  /**
   * Constructor
   * @param payload Contains received errors
   */
  constructor(public payload: any) {
  }
}

/**
 * Delete user action
 */
export class Delete implements Action {
  /**
   * Action type
   * '[User] Delete'
   */
  readonly type = UserActionTypes.Delete

  /**
   * Constructor
   * @param payload Contains user to delete
   */
  constructor(public payload: IUser) {
  }
}

/**
 * Delete user success
 */
export class DeleteSuccess implements Action {
  /**
   * Action type
   * '[User] Delete Success'
   */
  readonly type = UserActionTypes.DeleteSuccess

  /**
   * Constructor
   * @param payload Contains success message
   */
  constructor(public payload: any) {
  }
}

/**
 * Delete user failure
 */
export class DeleteFailure implements Action {
  /**
   * Action type
   * '[User] Delete Failure'
   */
  readonly type = UserActionTypes.DeleteFailure

  /**
   * Constructor
   * @param payload Contains received error
   */
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
