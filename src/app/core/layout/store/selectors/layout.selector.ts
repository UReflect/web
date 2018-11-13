import { createSelector } from '@ngrx/store'
import * as fromFeature   from '../reducers'
import * as fromLayout    from '../reducers/layout.reducer'

/**
 * Selector for sidenav status
 */
export const getShowSidenavState = createSelector(
  fromFeature.getLayoutState,
  (state: fromFeature.ILayoutReducerState) => state.layout
)

/**
 * Sidenav getter
 */
export const getShowSidenav = createSelector(
  getShowSidenavState,
  fromLayout.getShowSidenav
)
