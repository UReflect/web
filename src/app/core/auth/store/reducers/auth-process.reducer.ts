import { AuthActionsUnion, AuthActionTypes } from '../actions/auth-process.actions'

/**
 * Auth process state
 */
export interface IState {
  /**
   * Is user authenticated
   */
  isAuthenticated: boolean,
  /**
   * Is authentication process pending
   */
  pending: boolean,
  /**
   * Auth process related error
   */
  error: any
}

/**
 * Auth process initial state
 */
export const initialState: IState = {
  /**
   * IsAuthenticated initial value
   */
  isAuthenticated: false,
  /**
   * Pending initial value
   */
  pending: false,
  /**
   * Error initial value
   */
  error: null
}

/**
 * Auth process reducer
 * @param state Current state
 * @param action Action received
 */
export function reducer(state: IState = initialState, action: AuthActionsUnion): IState {
  switch (action.type) {
    case AuthActionTypes.SignIn:
    case AuthActionTypes.SignUp:
    case AuthActionTypes.PasswordLost:
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
    case AuthActionTypes.PasswordLostFailure:
      return {
        ...state,
        pending: false,
        error: action.payload
      }
    case AuthActionTypes.ClearError:
    case AuthActionTypes.SignInRedirect:
    case AuthActionTypes.PasswordLostSuccess:
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

/**
 * IsAuthenticated getter
 * @param state Current state
 */
export const getPending = (state: IState) => state.pending
/**
 * Pending getter
 * @param state Current state
 */
export const getError = (state: IState) => state.error
/**
 * Error getter
 * @param state Current state
 */
export const getIsAuthenticated = (state: IState) => state.isAuthenticated
