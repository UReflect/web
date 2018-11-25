import { createSelector } from '@ngrx/store'
import * as fromFeature   from '../reducers'
import * as fromComments  from '../reducers/comment.reducer'

/**
 * Comment state selector
 */
export const getCommentState = createSelector(
  fromFeature.getCommentsState,
  (state: fromFeature.ICommentReducerState) => state.comments
)

/**
 * Comment entities selector
 */
export const getCommentEntities = createSelector(
  getCommentState,
  fromComments.getEntities
)

/**
 * Get comment by ID selector
 */
export const getCommentsByModuleID = createSelector(
  getCommentEntities, (entities, module_id) => {
    const comments = []
    Object.keys(entities).map(id => {
      if (entities[id].module_id === module_id) {
        comments.push(entities[id])
      }
    })
    return comments
  }
)

/**
 * Comment loaded selector
 */
export const getCommentLoaded = createSelector(
  getCommentState,
  fromComments.getLoaded
)

/**
 * Comment loading selector
 */
export const getCommentLoading = createSelector(
  getCommentState,
  fromComments.getLoading
)

/**
 * Comment error selector
 */
export const getCommentError = createSelector(
  getCommentState,
  fromComments.getError
)
