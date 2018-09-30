import { AuthActionsUnion, AuthActionTypes } from '@core/auth/actions/auth-process.actions'

export interface IState {
  isAuthenticated: boolean,
  pending: boolean,
  error: any
}

export const initialState: IState = {
  isAuthenticated: false,
  pending: false,
  error: null
}

export function reducer(state: IState = initialState, action: AuthActionsUnion): IState {
  switch (action.type) {
    case AuthActionTypes.SignIn:
      return {
        ...state,
        pending: true
      }
    case AuthActionTypes.SignInSuccess:
      return {
        ...state,
        pending: false,
        isAuthenticated: true
      }
    case AuthActionTypes.SignInFailure:
      return {
        ...state,
        pending: false,
        error: action.payload
      }
    case AuthActionTypes.SignUp:
      return {
        ...state,
        pending: true
      }
    case AuthActionTypes.SignInRedirect:
      return {
        ...state,
        pending: false,
        error: null
      }
    case AuthActionTypes.SignOut:
      return initialState
    default:
      return state
  }
}

export const getPending = (state: IState) => state.pending
export const getError = (state: IState) => state.error
export const getIsAuthenticated = (state: IState) => state.isAuthenticated
