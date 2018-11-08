import * as fromComments                           from './comment.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

/**
 * Returns comment state
 */
export interface ICommentState {
  /**
   * Comments state
   */
  comments: fromComments.IState
}

/**
 * Returns comment reducer
 */
export const reducers: ActionReducerMap<ICommentState> = {
  /**
   * Comment reducer
   */
  comments: fromComments.reducer
}

/**
 * Comment feature selector
 */
export const getCommentsState = createFeatureSelector<ICommentState>(
  'comments'
)
