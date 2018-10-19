import { IUser }        from '../../model/user.model'
import * as fromActions from '../actions'

export interface IState {
  entities: { [id: number]: IUser },
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
                        action: fromActions.UserActionsUnion) {
  switch (action.type) {
    case fromActions.UserActionTypes.Create:
    case fromActions.UserActionTypes.Update:
    case fromActions.UserActionTypes.Delete:
    case fromActions.UserActionTypes.LoadAll:
      return {
        ...state,
        loading: true
      }
    case fromActions.UserActionTypes.LoadAllSuccess: {
      const entities = action.payload.reduce(
        (obj: { [id: number]: IUser }, user: IUser) => {
          return {
            ...obj,
            [user['ID']]: user
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
    case fromActions.UserActionTypes.CreateFailure:
    case fromActions.UserActionTypes.UpdateFailure:
    case fromActions.UserActionTypes.DeleteFailure:
    case fromActions.UserActionTypes.LoadAllFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case fromActions.UserActionTypes.CreateSuccess:
    case fromActions.UserActionTypes.UpdateSuccess: {
      const user = action.payload
      const entities = {
        ...state.entities,
        [user.id]: user
      }
      return {
        ...state,
        entities
      }
    }
    case fromActions.UserActionTypes.DeleteSuccess: {
      const user = action.payload
      const { [user.id]: removed, ...entities } = state.entities
      return {
        ...state,
        entities
      }
    }
    default:
      return state
  }
}

export const getEntities = (state: IState) => state.entities
export const getLoading = (state: IState) => state.loading
export const getLoaded = (state: IState) => state.loaded
export const getError = (state: IState) => state.error

