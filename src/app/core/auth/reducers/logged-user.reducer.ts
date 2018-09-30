import { IUser }                                         from '@core/auth/models/user'
import { LoggedUserActionsUnion, LoggedUserActionTypes } from '@core/auth/actions/logged-user.actions'

export interface IState {
  user: IUser
}

export const initialState: IState = {
  user: null
}

export function reducer(state: IState = initialState, action: LoggedUserActionsUnion): IState {
  switch (action.type) {
    case LoggedUserActionTypes.StoreUser:
      return {
        ...state,
        user: action.payload
      }
    case LoggedUserActionTypes.ClearUser:
      return initialState
    default:
      return state
  }
}

export const getUser = (state: IState) => state.user
