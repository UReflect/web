import { createSelector } from '@ngrx/store'
import * as fromFeature   from '../reducers'
import * as fromLayout    from '../reducers/layout.reducer'

export const getShowSidenavState = createSelector(
  fromFeature.getLayoutState,
  (state: fromFeature.IState) => state.layout
)

export const getShowSidenav = createSelector(
  getShowSidenavState,
  fromLayout.getShowSidenav
)
