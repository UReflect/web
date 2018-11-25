import { IComment }     from '@core/comments/models/comment'
import * as fromActions from '../actions'

/**
 * Comment state interface
 */
export interface ICommentState {
  /**
   * Comment entities
   */
  entities: { [id: number]: IComment },
  /**
   * Comment loaded
   */
  loaded: boolean,
  /**
   * Comment loading
   */
  loading: boolean,
  /**
   * Comment error
   */
  error: any
}

/**
 * Initial state for comment state
 */
export const initialState: ICommentState = {
  /**
   * Initial comment entities state
   */
  entities: {},
  /**
   * Initial comment loaded state
   */
  loaded: false,
  /**
   * Initial comment loading state
   */
  loading: false,
  /**
   * Initial comment error state
   */
  error: null
}

/**
 * Comment reducer
 * @param state Current or initial state
 * @param action Action received
 */
export function reducer(state: ICommentState = initialState,
                        action: fromActions.CommentActionsUnion) {
  switch (action.type) {
    case fromActions.CommentActionTypes.Load:
    case fromActions.CommentActionTypes.Add:
      return {
        ...state,
        loading: true
      }
    case fromActions.CommentActionTypes.LoadSuccess: {
      const entities = action.payload.reduce(
        (obj: { [id: number]: IComment }, comment: IComment) => {
          return {
            ...obj,
            [comment.ID]: comment
          }
        },
        {
          ...state.entities
        }
      )

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      }
    }
    case fromActions.CommentActionTypes.AddSuccess: {
      const comment = action.payload
      const entities = {
        ...state.entities,
        [comment.ID]: comment
      }

      return {
        ...state,
        entities
      }
    }
    case fromActions.CommentActionTypes.LoadFailure:
    case fromActions.CommentActionTypes.AddFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

/**
 * Entities getter
 * @param state Current state
 */
export const getEntities = (state: ICommentState) => state.entities
/**
 * Loading getter
 * @param state Current state
 */
export const getLoading = (state: ICommentState) => state.loading
/**
 * Loaded getter
 * @param state Current state
 */
export const getLoaded = (state: ICommentState) => state.loaded
/**
 * Error getter
 * @param state Current state
 */
export const getError = (state: ICommentState) => state.error
