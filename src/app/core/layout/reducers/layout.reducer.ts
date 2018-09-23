import { LayoutActionsUnion, LayoutActionTypes } from '../actions/layout.actions'

export interface State {
  showSidenav: boolean
}

export const initialState: State = {
  showSidenav: true
}

export function reducer(state: State = initialState, action: LayoutActionsUnion): State {
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

export const getShowSidenav = (state: State) => state.showSidenav
