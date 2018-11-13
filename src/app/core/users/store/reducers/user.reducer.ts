import { IUser }        from '../../model/user.model'
import * as fromActions from '../actions'

/**
 * State interface which defines user store
 */
export interface IUserState {
  /**
   * User entities
   * Formatted using { userID: user, ... }
   */
  entities: { [id: number]: IUser },
  /**
   * Is users loaded
   */
  loaded: boolean,
  /**
   * Is user loading
   */
  loading: boolean,
  /**
   * Are there any errors related to user store
   */
  error: any
}

/**
 * Initial state for user store
 */
export const initialState: IUserState = {
  entities: {},
  loaded: false,
  loading: false,
  error: null
}

/**
 * Reducer for user store
 * @param state Current state of the user store
 * @param action Action received
 */
export function reducer(state: IUserState = initialState,
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
            [user.ID]: user
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
        [user.ID]: user
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

/**
 * Returns entities contained in user store
 * @param state Current state of the user store
 */
export const getEntities = (state: IUserState) => state.entities
/**
 * Returns current loading status of the user store
 * @param state Current state of the user store
 */
export const getLoading = (state: IUserState) => state.loading
/**
 * Returns current loaded state of the user store
 * @param state Current state of the user store
 */
export const getLoaded = (state: IUserState) => state.loaded
/**
 * Returns current errors related to the user store
 * @param state Current state of the user store
 */
export const getError = (state: IUserState) => state.error

