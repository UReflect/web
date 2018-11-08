import { Action } from '@ngrx/store'

export enum TokenActionTypes {
  StoreToken = '[Token] Store Token',
  ClearToken = '[Token] Clear Token'
}

/**
 * Store token action
 */
export class StoreToken implements Action {
  /**
   * Action type
   * '[Token] Store Token'
   */
  readonly type = TokenActionTypes.StoreToken

  /**
   * Constructor
   * @param payload Token
   */
  constructor(public payload: string) {
  }
}

/**
 * Clear token action
 */
export class ClearToken implements Action {
  /**
   * Action type
   * '[Token] Clear Token'
   */
  readonly type = TokenActionTypes.ClearToken
}

export type TokenActionsUnion =
  | StoreToken
  | ClearToken
