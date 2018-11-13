import { IModule }      from '@core/modules/models/module'
import * as fromActions from '../actions'

/**
 * Module state interface
 */
export interface IModuleState {
  /**
   * Module entities
   */
  entities: { [id: number]: IModule },
  /**
   * Module loaded status
   */
  loaded: boolean,
  /**
   * Module loading status
   */
  loading: boolean,
  /**
   * Module error
   */
  error: any
}

/**
 * Module initial state definition
 */
export const initialState: IModuleState = {
  /**
   * Initial state for entities
   */
  entities: {},
  /**
   * Initial state for loaded
   */
  loaded: false,
  /**
   * Initial state for loading
   */
  loading: false,
  /**
   * Initial state for error
   */
  error: null
}

/**
 * Module reducer
 * @param state State of modules
 * @param action Action triggered
 */
export function reducer(state: IModuleState = initialState,
                        action: fromActions.ModuleActionsUnion) {
  switch (action.type) {
    case fromActions.ModuleActionTypes.Create:
    case fromActions.ModuleActionTypes.Update:
    case fromActions.ModuleActionTypes.Delete:
    case fromActions.ModuleActionTypes.Upload:
    case fromActions.ModuleActionTypes.LoadAll: {
      return {
        ...state,
        loading: true
      }
    }
    case fromActions.ModuleActionTypes.LoadAllSuccess: {
      const entities = action.payload.reduce(
        (obj: { [id: number]: IModule }, module: IModule) => {
          return {
            ...obj,
            [module.ID]: module
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
    case fromActions.ModuleActionTypes.CreateFailed:
    case fromActions.ModuleActionTypes.UpdateFailed:
    case fromActions.ModuleActionTypes.DeleteFailed:
    case fromActions.ModuleActionTypes.UploadFailed:
    case fromActions.ModuleActionTypes.LoadAllFailed: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case fromActions.ModuleActionTypes.UpdateSuccess:
    case fromActions.ModuleActionTypes.CreateSuccess: {
      const module = action.payload
      const entities = {
        ...state.entities,
        [module.ID]: module
      }

      return {
        ...state,
        entities
      }
    }
    case fromActions.ModuleActionTypes.DeleteSuccess: {
      const module = action.payload
      const { [module.ID]: removed, ...entities } = state.entities

      return {
        ...state,
        entities
      }
    }
    case fromActions.ModuleActionTypes.UploadSuccess:
      return {
        ...state,
        loading: false,
        loaded: true
      }
    default:
      return state
  }
}

/**
 * Module entities getter
 * @param state Current module state
 */
export const getEntities = (state: IModuleState) => state.entities
/**
 * Module loading getter
 * @param state Current module state
 */
export const getLoading = (state: IModuleState) => state.loading
/**
 * Module loaded getter
 * @param state Current module state
 */
export const getLoaded = (state: IModuleState) => state.loaded
/**
 * Module error getter
 * @param state Current module state
 */
export const getError = (state: IModuleState) => state.error
