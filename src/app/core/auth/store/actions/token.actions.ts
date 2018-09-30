import { Action } from '@ngrx/store'

export enum TokenActionTypes {
  StoreToken = '[Token] Store Token',
  ClearToken = '[Token] Clear Token'
}

export class StoreToken implements Action {
  readonly type = TokenActionTypes.StoreToken

  constructor(public payload: string) {
  }
}

export class ClearToken implements Action {
  readonly type = TokenActionTypes.ClearToken
}

export type TokenActionsUnion =
  | StoreToken
  | ClearToken
