import { createSelector } from '@ngrx/store'
import * as fromFeature   from '../reducers'
import * as fromComments  from '../reducers/comment.reducer'

export const getCommentState = createSelector(
  fromFeature.getCommentsState,
  (state: fromFeature.ICommentState) => state.comments
)

export const getCommentEntities = createSelector(
  getCommentState,
  fromComments.getEntities
)

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

export const getCommentLoaded = createSelector(
  getCommentState,
  fromComments.getLoaded
)

export const getCommentLoading = createSelector(
  getCommentState,
  fromComments.getLoading
)

export const getCommentError = createSelector(
  getCommentState,
  fromComments.getError
)
