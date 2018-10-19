import * as fromUsers                              from './user.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

export interface IUserState {
  users: fromUsers.IState
}

export const reducers: ActionReducerMap<IUserState> = {
  users: fromUsers.reducer
}


export const getUsersState = createFeatureSelector<IUserState>(
  'users'
)
