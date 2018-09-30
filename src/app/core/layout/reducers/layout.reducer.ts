import { LayoutActionsUnion, LayoutActionTypes } from '../actions/layout.actions'

export interface IState {
  showSidenav: boolean
}

export const initialState: IState = {
  showSidenav: true
}

export function reducer(state: IState = initialState, action: LayoutActionsUnion): IState {
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

export const getShowSidenav = (state: IState) => state.showSidenav
