import * as fromActions from '../actions'
import { IProfile }     from '@core/profiles/models/profile.model'

/**
 * State interface which defines profile store
 */
export interface IState {
  /**
   * User entities
   * Formatted using { profileID: profile, ... }
   */
  entities: { [id: number]: IProfile },
  /**
   * Is profiles loaded
   */
  loaded: boolean,
  /**
   * Is profile loading
   */
  loading: boolean,
  /**
   * Are there any errors related to profile store
   */
  error: any
}

/**
 * Initial state for profile store
 */
export const initialState: IState = {
  entities: {},
  loaded: false,
  loading: false,
  error: null
}

/**
 * Reducer for profile store
 * @param state Current state of the profile store
 * @param action Action received
 */
export function reducer(state: IState = initialState,
                        action: fromActions.ProfileActionsUnion) {
  switch (action.type) {
    case fromActions.ProfileActionTypes.Create:
    case fromActions.ProfileActionTypes.Update:
    case fromActions.ProfileActionTypes.Delete:
    case fromActions.ProfileActionTypes.LoadMine:
      return {
        ...state,
        loading: true
      }
    case fromActions.ProfileActionTypes.LoadMineSuccess: {
      const entities = action.payload.reduce(
        (obj: { [id: number]: IProfile }, profile: IProfile) => {
          return {
            ...obj,
            [profile.ID]: profile
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
    case fromActions.ProfileActionTypes.CreateFailure:
    case fromActions.ProfileActionTypes.UpdateFailure:
    case fromActions.ProfileActionTypes.DeleteFailure:
    case fromActions.ProfileActionTypes.LoadMineFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case fromActions.ProfileActionTypes.CreateSuccess:
    case fromActions.ProfileActionTypes.UpdateSuccess: {
      const profile = action.payload
      const entities = {
        ...state.entities,
        [profile.ID]: profile
      }
      return {
        ...state,
        entities
      }
    }
    case fromActions.ProfileActionTypes.DeleteSuccess: {
      const profile = action.payload
      const { [profile.id]: removed, ...entities } = state.entities
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
 * Returns entities contained in profile store
 * @param state Current state of the profile store
 */
export const getEntities = (state: IState) => state.entities
/**
 * Returns current loading status of the profile store
 * @param state Current state of the profile store
 */
export const getLoading = (state: IState) => state.loading
/**
 * Returns current loaded state of the profile store
 * @param state Current state of the profile store
 */
export const getLoaded = (state: IState) => state.loaded
/**
 * Returns current errors related to the profile store
 * @param state Current state of the profile store
 */
export const getError = (state: IState) => state.error

