import { TokenActionsUnion, TokenActionTypes } from '../actions/token.actions'

/**
 * Token state
 */
export interface IState {
  /**
   * Token
   */
  token: string
}

/**
 * Token initial state
 */
export const initialState: IState = {
  /**
   * Token initial value
   */
  token: ''
}

/**
 * Token reducer
 * @param state Current state
 * @param action Action received
 */
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

/**
 * Token getter
 * @param state Current state
 */
export const getToken = (state: IState) => state.token
