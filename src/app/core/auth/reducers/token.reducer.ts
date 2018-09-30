import { TokenActionsUnion, TokenActionTypes } from '@core/auth/actions/token.actions'

export interface IState {
  token: string
}

export const initialState: IState = {
  token: ''
}

export function reducer(state: IState = initialState, action: TokenActionsUnion): IState {
  switch (action.type) {
    case TokenActionTypes.StoreToken:
      return {
        ...state,
        token: action.payload
      }
    case TokenActionTypes.ClearToken:
      return initialState
    default:
      return state
  }
}

export const getToken = (state: IState) => state.token
