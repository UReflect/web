import { Action }             from '@ngrx/store'

export enum LayoutActionTypes {
  OpenSidenav = '[Layout] Open Sidenav',
  CloseSidenav = '[Layout] Close Sidenav',
  ToggleSidenav = '[Layout] Toggle Sidenav'
}

/**
 * Open sidenav action
 */
export class OpenSidenav implements Action {
  /**
   * Action type
   * '[Layout] Open Sidenav'
   */
  readonly type = LayoutActionTypes.OpenSidenav
}

/**
 * Close sidenav action
 */
export class CloseSidenav implements Action {
  /**
   * Action type
   * '[Layout] Close Sidenav'
   */
  readonly type = LayoutActionTypes.CloseSidenav
}

/**
 * Toggle sidenav action
 */
export class ToggleSidenav implements Action {
  /**
   * Action type
   * '[Layout] Toggle Sidenav'
   */
  readonly type = LayoutActionTypes.ToggleSidenav
}

export type LayoutActionsUnion =
  | OpenSidenav
  | CloseSidenav
  | ToggleSidenav
