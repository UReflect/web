import { User }                              from '../models/user'
import { AuthActionsUnion, AuthActionTypes } from '../actions/auth.actions'

export interface State {
  token: string | null,
  isAuthenticated: boolean,
  user: User | null
}

export const initialState: State = {
  token: null,
  isAuthenticated: false,
  user: null
}

export function reducer(state = initialState, action: AuthActionsUnion): State {
  switch (action.type) {
    case AuthActionTypes.SignInSuccess: {
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        user: action.payload.user
      }
    }

    case AuthActionTypes.SignOut:
      return initialState

    default:
      return state
  }
}

export const getToken = (state: State) => state.token
export const getIsAuthenticated = (state: State) => state.isAuthenticated
export const getUser = (state: State) => state.user
