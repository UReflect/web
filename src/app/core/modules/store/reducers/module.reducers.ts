import { IModule }       from '@core/modules/models/module'
import * as fromActions  from '../actions'
import { DeleteSuccess } from '../actions'

export interface IState {
  entities: { [id: number]: IModule }
  loaded: boolean,
  loading: boolean,
  errors: any
}

export const initialState: IState = {
  entities: {},
  loaded: false,
  loading: false,
  errors: null
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
      console.log(action)
      const entities = action.payload.reduce(
        (obj: { [id: number]: IModule }, pizza: IModule) => {
          return {
            ...obj,
            [pizza.id]: pizza
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
        errors: action.payload
      }
    }
    case fromActions.ModuleActionTypes.UpdateSuccess:
    case fromActions.ModuleActionTypes.CreateSuccess: {
      const module = action.payload
      const entities = {
        ...state.entities,
        [module.id]: module
      }

      return {
        ...state,
        entities
      }
    }
    case fromActions.ModuleActionTypes.DeleteSuccess: {
      const module = action.payload
      const { [module.id]: removed, ...entities } = state.entities

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
export const getErrors = (state: IState) => state.errors
