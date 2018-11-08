import { Action }                     from '@ngrx/store'
import { IComment, ICommentCreation } from '../../models/comment'

export enum CommentActionTypes {
  Load = '[Comments] Load',
  LoadSuccess = '[Comments] Load Success',
  LoadFailure = '[Comments] Load Failure',
  Add = '[Comments] Add',
  AddSuccess = '[Comments] Add Success',
  AddFailure = '[Comments] Add Failure'
}

/**
 * Load comment action
 */
export class Load implements Action {
  /**
   * Action type
   * '[Comments] Load'
   */
  readonly type = CommentActionTypes.Load

  /**
   * Constructor
   * @param payload Module ID
   */
  constructor(public payload: number) {
  }
}

/**
 * Load success comment action
 */
export class LoadSuccess implements Action {
  /**
   * Action type
   * '[Comments] Load Success'
   */
  readonly type = CommentActionTypes.LoadSuccess

  /**
   * Constructor
   * @param payload Comments received
   */
  constructor(public payload: IComment[]) {
  }
}

/**
 * Load failure comment action
 */
export class LoadFailure implements Action {
  /**
   * Action type
   * '[Comments] Load Failure'
   */
  readonly type = CommentActionTypes.LoadFailure

  /**
   * Constructor
   * @param payload Error received
   */
  constructor(public payload: any) {
  }
}

/**
 * Add comment action
 */
export class Add implements Action {
  /**
   * Action type
   * '[Comments] Add'
   */
  readonly type = CommentActionTypes.Add

  /**
   * Constructor
   * @param payload Comment info for creation
   */
  constructor(public payload: ICommentCreation) {
  }
}

/**
 * Add success comment action
 */
export class AddSuccess implements Action {
  /**
   * Action type
   * '[Comments] Add Success'
   */
  readonly type = CommentActionTypes.AddSuccess

  /**
   * Constructor
   * @param payload Comment newly created
   */
  constructor(public payload: IComment) {
  }
}

/**
 * Add failure comment action
 */
export class AddFailure implements Action {
  /**
   * Action type
   * '[Comments] Add Failure'
   */
  readonly type = CommentActionTypes.AddFailure

  /**
   * Constructor
   * @param payload Error received
   */
  constructor(public payload: any) {
  }
}

export type CommentActionsUnion =
  | Load
  | LoadSuccess
  | LoadFailure
  | Add
  | AddSuccess
  | AddFailure
