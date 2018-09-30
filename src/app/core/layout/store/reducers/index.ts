import * as fromLayout                             from './layout.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

export interface IState {
  layout: fromLayout.IState
}

export const reducers: ActionReducerMap<IState> = {
  layout: fromLayout.reducer
}

export const getLayoutState = createFeatureSelector<IState>(
  'layout'
)
