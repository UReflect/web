import { AuthActionsUnion, AuthActionTypes } from '../actions/auth.actions'

export interface State {
  error: string | null
  pending: boolean
}

export const initialState: State = {
  error: null,
  pending: false
}

export function reducer(state = initialState, action: AuthActionsUnion): State {
  switch (action.type) {
    case AuthActionTypes.SignIn: {
      return {
        ...state,
        error: null,
        pending: true
      }
    }

    case AuthActionTypes.SignInSuccess: {
      return {
        ...state,
        error: null,
        pending: false
      }
    }

    case AuthActionTypes.SignInFailure: {
      return {
        ...state,
        error: action.payload,
        pending: false
      }
    }

    default:
      return state
  }
}

export const getError = (state: State) => state.error
export const getPending = (state: State) => state.pending
