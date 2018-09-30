import { Action } from '@ngrx/store'

export enum TokenActionTypes {
  Store = '[Token] Store Token',
  Clear = '[Token] Clear Token'
}

export class Store implements Action {
  readonly type = TokenActionTypes.Store

  constructor(public payload: string) {
  }
}

export class Clear implements Action {
  readonly type = TokenActionTypes.Clear
}

export type TokenActionsUnion =
  | Store
  | Clear
