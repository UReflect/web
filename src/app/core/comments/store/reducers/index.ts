import * as fromComments                           from './comment.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

export interface ICommentState {
  comments: fromComments.IState
}

export const reducers: ActionReducerMap<ICommentState> = {
  comments: fromComments.reducer
}

export const getCommentsState = createFeatureSelector<ICommentState>(
  'comments'
)
