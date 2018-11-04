import { Action }                                   from '@ngrx/store'
import { IProfile, IProfileCreate, IProfileUpdate } from '@core/profiles/models/profile.model'

export enum ProfileActionTypes {
  LoadMine = '[Profile] Load Mine',
  LoadMineSuccess = '[Profile] Load Mine Success',
  LoadMineFailure = '[Profile] Load Mine Failure',
  Create = '[Profile] Create',
  CreateSuccess = '[Profile] Create Success',
  CreateFailure = '[Profile] Create Failure',
  Update = '[Profile] Update',
  UpdateSuccess = '[Profile] Update Success',
  UpdateFailure = '[Profile] Update Failure',
  Delete = '[Profile] Delete',
  DeleteSuccess = '[Profile] Delete Success',
  DeleteFailure = '[Profile] Delete Failure'
}

/**
 * Load mine profiles action
 */
export class LoadMine implements Action {
  /**
   * Action type
   * '[Profile] Load Mine'
   */
  readonly type = ProfileActionTypes.LoadMine
}

/**
 * Load mine profile success action
 */
export class LoadMineSuccess implements Action {
  /**
   * Action type
   * '[Profile] Load Mine Success'
   */
  readonly type = ProfileActionTypes.LoadMineSuccess

  /**
   * Constructor
   * @param payload Contains received profiles
   */
  constructor(public payload: IProfile[]) {
  }
}

/**
 * Load mine failure action
 */
export class LoadMineFailure implements Action {
  /**
   * Action type
   * '[Profile] Load Mine Failure'
   */
  readonly type = ProfileActionTypes.LoadMineFailure

  /**
   * Constructor
   * @param payload Contains received errors
   */
  constructor(public payload: any) {
  }
}

/**
 * Create profile action
 */
export class Create implements Action {
  /**
   * Action type
   * '[Profile] Create'
   */
  readonly type = ProfileActionTypes.Create

  /**
   * Constructor
   * @param payload Contains profile info used to create new profile
   */
  constructor(public payload: IProfileCreate) {
  }
}

/**
 * Create profile success action
 */
export class CreateSuccess implements Action {
  /**
   * Action type
   * '[Profile] Create Success'
   */
  readonly type = ProfileActionTypes.CreateSuccess

  /**
   * Constructor
   * @param payload Contains received created profile
   */
  constructor(public payload: IProfile) {
  }
}

/**
 * Create profile failure action
 */
export class CreateFailure implements Action {
  /**
   * Action type
   * '[Profile] Create Failure'
   */
  readonly type = ProfileActionTypes.CreateFailure

  /**
   * Constructor
   * @param payload Contains received error
   */
  constructor(public payload: any) {
  }
}

/**
 * Update profile action
 */
export class Update implements Action {
  /**
   * Action type
   * '[Profile] Update'
   */
  readonly type = ProfileActionTypes.Update

  /**
   * Constructor
   * @param payload Contains profile info used to update
   */
  constructor(public payload: IProfileUpdate) {
  }
}

/**
 * Update profile success action
 */
export class UpdateSuccess implements Action {
  /**
   * Action type
   * '[Profile] Update Success'
   */
  readonly type = ProfileActionTypes.UpdateSuccess

  /**
   * Constructor
   * @param payload Contains new profile info
   */
  constructor(public payload: IProfile) {
  }
}

/**
 * Update profile failure action
 */
export class UpdateFailure implements Action {
  /**
   * Action type
   * '[User] Update Failure'
   */
  readonly type = ProfileActionTypes.UpdateFailure

  /**
   * Constructor
   * @param payload Contains received errors
   */
  constructor(public payload: any) {
  }
}

/**
 * Delete profile action
 */
export class Delete implements Action {
  /**
   * Action type
   * '[User] Delete'
   */
  readonly type = ProfileActionTypes.Delete

  /**
   * Constructor
   * @param payload Contains profile to delete
   */
  constructor(public payload: IProfile) {
  }
}

/**
 * Delete profile success
 */
export class DeleteSuccess implements Action {
  /**
   * Action type
   * '[User] Delete Success'
   */
  readonly type = ProfileActionTypes.DeleteSuccess

  /**
   * Constructor
   * @param payload Contains success message
   */
  constructor(public payload: any) {
  }
}

/**
 * Delete profile failure
 */
export class DeleteFailure implements Action {
  /**
   * Action type
   * '[User] Delete Failure'
   */
  readonly type = ProfileActionTypes.DeleteFailure

  /**
   * Constructor
   * @param payload Contains received error
   */
  constructor(public payload: any) {
  }
}

export type ProfileActionsUnion =
  | LoadMine
  | LoadMineSuccess
  | LoadMineFailure
  | Create
  | CreateSuccess
  | CreateFailure
  | Update
  | UpdateSuccess
  | UpdateFailure
  | Delete
  | DeleteSuccess
  | DeleteFailure