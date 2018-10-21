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

export class Load implements Action {
  readonly type = CommentActionTypes.Load

  constructor(public payload: number) {
  }
}

export class LoadSuccess implements Action {
  readonly type = CommentActionTypes.LoadSuccess

  constructor(public payload: IComment[]) {
  }
}

export class LoadFailure implements Action {
  readonly type = CommentActionTypes.LoadFailure

  constructor(public payload: any) {
  }
}

export class Add implements Action {
  readonly type = CommentActionTypes.Add

  constructor(public payload: ICommentCreation) {
  }
}

export class AddSuccess implements Action {
  readonly type = CommentActionTypes.AddSuccess

  constructor(public payload: IComment) {
  }
}

export class AddFailure implements Action {
  readonly type = CommentActionTypes.AddFailure

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
