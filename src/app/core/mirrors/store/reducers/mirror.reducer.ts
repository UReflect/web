import * as fromActions from '../actions'
import { IMirror }      from '@core/mirrors/models/mirror.model'

/**
 * State interface which defines mirror store
 */
export interface IState {
  /**
   * User entities
   * Formatted using { mirrorID: mirror, ... }
   */
  entities: { [id: number]: IMirror },
  /**
   * Is mirrors loaded
   */
  loaded: boolean,
  /**
   * Is mirror loading
   */
  loading: boolean,
  /**
   * Are there any errors related to mirror store
   */
  error: any
}

/**
 * Initial state for mirror store
 */
export const initialState: IState = {
  entities: {},
  loaded: false,
  loading: false,
  error: null
}

/**
 * Reducer for mirror store
 * @param state Current state of the mirror store
 * @param action Action received
 */
export function reducer(state: IState = initialState,
                        action: fromActions.MirrorActionsUnion) {
  switch (action.type) {
    case fromActions.MirrorActionTypes.Update:
    case fromActions.MirrorActionTypes.LoadMine:
    case fromActions.MirrorActionTypes.Join:
    case fromActions.MirrorActionTypes.LinkProfile:
    case fromActions.MirrorActionTypes.Setup:
      return {
        ...state,
        loading: true
      }
    case fromActions.MirrorActionTypes.UpdateFailure:
    case fromActions.MirrorActionTypes.LoadMineFailure:
    case fromActions.MirrorActionTypes.JoinFailure:
    case fromActions.MirrorActionTypes.LinkProfileFailure:
    case fromActions.MirrorActionTypes.SetupFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case fromActions.MirrorActionTypes.LoadMineSuccess: {
      const entities = action.payload.reduce(
        (obj: { [id: number]: IMirror }, mirror: IMirror) => {
          return {
            ...obj,
            [mirror.ID]: mirror
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
        error: null,
        entities
      }
    }
    case fromActions.MirrorActionTypes.JoinSuccess:
    case fromActions.MirrorActionTypes.SetupSuccess:
    case fromActions.MirrorActionTypes.UpdateSuccess: {
      const mirror = action.payload
      const entities = {
        ...state.entities,
        [mirror.ID]: mirror
      }
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        entities
      }
    }
    case fromActions.MirrorActionTypes.LinkProfileSuccess:
      return {
        ...state,
        error: null,
        loaded: true,
        loading: false
      }
    case fromActions.MirrorActionTypes.ClearError:
      return {
        ...state,
        error: null
      }
    default:
      return state
  }
}

/**
 * Returns entities contained in mirror store
 * @param state Current state of the mirror store
 */
export const getEntities = (state: IState) => state.entities
/**
 * Returns current loading status of the mirror store
 * @param state Current state of the mirror store
 */
export const getLoading = (state: IState) => state.loading
/**
 * Returns current loaded state of the mirror store
 * @param state Current state of the mirror store
 */
export const getLoaded = (state: IState) => state.loaded
/**
 * Returns current errors related to the mirror store
 * @param state Current state of the mirror store
 */
export const getError = (state: IState) => state.error

