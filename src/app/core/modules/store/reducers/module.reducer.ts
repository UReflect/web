import { IModule }      from '@core/modules/models/module'
import * as fromActions from '../actions'

export interface IState {
  entities: { [id: number]: IModule },
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

export const getEntities = (state: IState) => state.entities
export const getLoading = (state: IState) => state.loading
export const getLoaded = (state: IState) => state.loaded
export const getError = (state: IState) => state.error