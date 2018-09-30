import { TokenActionsUnion, TokenActionTypes } from '../actions/token.actions'

export interface IState {
  token: string
}

export const initialState: IState = {
  token: ''
}

export function reducer(state: IState = initialState, action: TokenActionsUnion): IState {
  switch (action.type) {
    case TokenActionTypes.Store:
      return {
        ...state,
        token: action.payload
      }
    case TokenActionTypes.Clear:
      return initialState
    default:
      return state
  }
}

export const getToken = (state: IState) => state.token
