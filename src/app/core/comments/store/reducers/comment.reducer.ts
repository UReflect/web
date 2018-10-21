import { IComment }     from '@core/comments/models/comment'
import * as fromActions from '../actions'

export interface IState {
  entities: { [id: number]: IComment },
  loaded: boolean,
  loading: boolean,
  error: any
}

export const initialState: IState = {
  entities: {},
  loaded: false,
  loading: false,
  error: null
}

export function reducer(state: IState = initialState,
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

export const getEntities = (state: IState) => state.entities
export const getLoading = (state: IState) => state.loading
export const getLoaded = (state: IState) => state.loaded
export const getError = (state: IState) => state.error
