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
  JoinFailure = '[Mirror] Join Failure'
}

/**
 * Load mine profiles action
 */
export class LoadMine implements Action {
  /**
   * Action type
   * '[Mirror] Load Mine'
   */
  readonly type = MirrorActionTypes.LoadMine
}

/**
 * Load mine profile success action
 */
export class LoadMineSuccess implements Action {
  /**
   * Action type
   * '[Mirror] Load Mine Success'
   */
  readonly type = MirrorActionTypes.LoadMineSuccess

  /**
   * Constructor
   * @param payload Contains received profiles
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
 * Update profile action
 */
export class Update implements Action {
  /**
   * Action type
   * '[Mirror] Update'
   */
  readonly type = MirrorActionTypes.Update

  /**
   * Constructor
   * @param payload Contains profile info used to update
   */
  constructor(public payload: IMirrorUpdate) {
  }
}

/**
 * Update profile success action
 */
export class UpdateSuccess implements Action {
  /**
   * Action type
   * '[Mirror] Update Success'
   */
  readonly type = MirrorActionTypes.UpdateSuccess

  /**
   * Constructor
   * @param payload Contains new profile info
   */
  constructor(public payload: IMirror) {
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
  readonly type = MirrorActionTypes.UpdateFailure

  /**
   * Constructor
   * @param payload Contains received errors
   */
  constructor(public payload: any) {
  }
}

/**
 * Join profile action
 */
export class Join implements Action {
  /**
   * Action type
   * '[User] Join'
   */
  readonly type = MirrorActionTypes.Join

  /**
   * Constructor
   * @param payload Contains profile to delete
   */
  constructor(public payload: IMirrorJoin) {
  }
}

/**
 * Join profile success
 */
export class JoinSuccess implements Action {
  /**
   * Action type
   * '[User] Join Success'
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
 * Join profile failure
 */
export class JoinFailure implements Action {
  /**
   * Action type
   * '[User] Join Failure'
   */
  readonly type = MirrorActionTypes.JoinFailure

  /**
   * Constructor
   * @param payload Contains received error
   */
  constructor(public payload: any) {
  }
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
