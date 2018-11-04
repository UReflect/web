import { Action }           from '@ngrx/store'
import { NavigationExtras } from '@angular/router'

export enum RouterActionTypes {
  Go = '[Router] Go',
  Back = '[Router] Back',
  Forward = '[Router]  Forward'
}

/**
 * Go to the provided route
 */
export class Go implements Action {
  /**
   * Type of the action
   * '[Router] Go'
   */
  readonly type = RouterActionTypes.Go

  /**
   * Contains targeted route info
   * @param payload targeted route info
   */
  constructor(public payload: {
    path: any[],
    query?: object,
    extras?: NavigationExtras
  }) {
  }
}

/**
 * Go back on the previous route
 */
export class Back implements Action {
  /**
   * Type of the Action
   * '[Router] Back'
   */
  readonly type = RouterActionTypes.Back
}

/**
 * Go forward on the next route
 */
export class Forward implements Action {
  /**
   * Type of the action
   * '[Router]  Forward'
   */
  readonly type = RouterActionTypes.Forward
}

export type RouterActionsUnion =
  | Go
  | Back
  | Forward
