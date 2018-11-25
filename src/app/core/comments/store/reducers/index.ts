import * as fromComments                           from './comment.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

/**
 * Returns comment state
 */
export interface ICommentReducerState {
  /**
   * Comments state
   */
  comments: fromComments.ICommentState
}

/**
 * Returns comment reducer
 */
export const reducers: ActionReducerMap<ICommentReducerState> = {
  /**
   * Comment reducer
   */
  comments: fromComments.reducer
}

/**
 * Comment feature selector
 */
export const getCommentsState = createFeatureSelector<ICommentReducerState>(
  'comments'
)
