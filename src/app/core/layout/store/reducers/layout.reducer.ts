import { LayoutActionsUnion, LayoutActionTypes } from '../actions/layout.actions'

/**
 * Layout interface
 */
export interface ILayoutState {
  /**
   * Sidenav state
   */
  showSidenav: boolean
}

/**
 * Initial state for layout
 */
export const initialState: ILayoutState = {
  /**
   * Sidenav starts open
   */
  showSidenav: true
}

/**
 * Layout reducer
 * @param state Layout state
 * @param action Received action
 */
export function reducer(state: ILayoutState = initialState, action: LayoutActionsUnion): ILayoutState {
  switch (action.type) {
    case LayoutActionTypes.CloseSidenav:
      return {
        showSidenav: false
      }
    case LayoutActionTypes.OpenSidenav:
      return {
        showSidenav: true
      }
    case LayoutActionTypes.ToggleSidenav:
      return {
        showSidenav: !state.showSidenav
      }
    default:
      return state
  }
}

/**
 * Sidenav getter
 * @param state Current state
 */
export const getShowSidenav = (state: ILayoutState) => state.showSidenav
