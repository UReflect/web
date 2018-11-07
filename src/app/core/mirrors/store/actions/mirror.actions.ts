import { Action }                              from '@ngrx/store'
import { IMirror, IMirrorJoin, IMirrorUpdate } from '@core/mirrors/models/mirror.model'

export enum MirrorActionTypes {
  LoadMine = '[Mirror] Load Mine',
  LoadMineSuccess = '[Mirror] Load Mine Success',
  LoadMineFailure = '[Mirror] Load Mine Failure',
  Update = '[Mirror] Update',
  UpdateSuccess = '[Mirror] Update Success',
  UpdateFailure = '[Mirror] Update Failure',
  Join = '[Mirror] Join',
  JoinSuccess = '[Mirror] Join Success',
  JoinFailure = '[Mirror] Join Failure',
  ClearError = '[Mirror] Clear Error'
}

/**
 * Load mine mirrors action
 */
export class LoadMine implements Action {
  /**
   * Action type
   * '[Mirror] Load Mine'
   */
  readonly type = MirrorActionTypes.LoadMine
}

/**
 * Load mine mirror success action
 */
export class LoadMineSuccess implements Action {
  /**
   * Action type
   * '[Mirror] Load Mine Success'
   */
  readonly type = MirrorActionTypes.LoadMineSuccess

  /**
   * Constructor
   * @param payload Contains received mirrors
   */
  constructor(public payload: IMirror[]) {
  }
}

/**
 * Load mine failure action
 */
export class LoadMineFailure implements Action {
  /**
   * Action type
   * '[Mirror] Load Mine Failure'
   */
  readonly type = MirrorActionTypes.LoadMineFailure

  /**
   * Constructor
   * @param payload Contains received errors
   */
  constructor(public payload: any) {
  }
}

/**
 * Update mirror action
 */
export class Update implements Action {
  /**
   * Action type
   * '[Mirror] Update'
   */
  readonly type = MirrorActionTypes.Update

  /**
   * Constructor
   * @param payload Contains mirror info used to update
   */
  constructor(public payload: IMirrorUpdate) {
  }
}

/**
 * Update mirror success action
 */
export class UpdateSuccess implements Action {
  /**
   * Action type
   * '[Mirror] Update Success'
   */
  readonly type = MirrorActionTypes.UpdateSuccess

  /**
   * Constructor
   * @param payload Contains new mirror info
   */
  constructor(public payload: IMirror) {
  }
}

/**
 * Update mirror failure action
 */
export class UpdateFailure implements Action {
  /**
   * Action type
   * '[Mirror] Update Failure'
   */
  readonly type = MirrorActionTypes.UpdateFailure

  /**
   * Constructor
   * @param payload Contains received errors
   */
  constructor(public payload: any) {
  }
}

/**
 * Join mirror action
 */
export class Join implements Action {
  /**
   * Action type
   * '[Mirror] Join'
   */
  readonly type = MirrorActionTypes.Join

  /**
   * Constructor
   * @param payload Contains mirror to delete
   */
  constructor(public payload: IMirrorJoin) {
  }
}

/**
 * Join mirror success
 */
export class JoinSuccess implements Action {
  /**
   * Action type
   * '[Mirror] Join Success'
   */
  readonly type = MirrorActionTypes.JoinSuccess

  /**
   * Constructor
   * @param payload Contains success message
   */
  constructor(public payload: any) {
  }
}

/**
 * Join mirror failure
 */
export class JoinFailure implements Action {
  /**
   * Action type
   * '[Mirror] Join Failure'
   */
  readonly type = MirrorActionTypes.JoinFailure

  /**
   * Constructor
   * @param payload Contains received error
   */
  constructor(public payload: any) {
  }
}

/**
 * Clear mirror error
 */
export class ClearError implements Action {
  /**
   * Action type
   * '[Mirror] Clear Error'
   */
  readonly type = MirrorActionTypes.ClearError
}

export type MirrorActionsUnion =
  | LoadMine
  | LoadMineSuccess
  | LoadMineFailure
  | Update
  | UpdateSuccess
  | UpdateFailure
  | Join
  | JoinSuccess
  | JoinFailure
  | ClearError
