import { IUser }                                         from '../../models/user'
import { LoggedUserActionsUnion, LoggedUserActionTypes } from '../actions/logged-user.actions'

export interface IState {
  user: IUser
}

export const initialState: IState = {
  user: null
}

export function reducer(state: IState = initialState, action: LoggedUserActionsUnion): IState {
  switch (action.type) {
    case LoggedUserActionTypes.StoreLoggedUser:
      return {
        ...state,
        user: action.payload
      }
    case LoggedUserActionTypes.ClearLoggedUser:
      return initialState
    default:
      return state
  }
}

export const getUser = (state: IState) => state.user
