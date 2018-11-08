import { LoggedUserActionsUnion, LoggedUserActionTypes } from '../actions/logged-user.actions'
import { IUser }                                         from '@core/users/model/user.model'

/**
 * Logged user state
 */
export interface IState {
  /**
   * Logged user
   */
  user: IUser
}

/**
 * Logged user initial state
 */
export const initialState: IState = {
  /**
   * Logged user initial value
   */
  user: null
}

/**
 * Logged user reducer
 * @param state Current state
 * @param action Action received
 */
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

/**
 * Logged user getter
 * @param state Current state
 */
export const getUser = (state: IState) => state.user
