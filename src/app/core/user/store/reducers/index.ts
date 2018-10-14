import * as fromUser                               from './user.reducer'
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store'

export interface IUserState {
  users: fromUser.IState
}

export const reducers: ActionReducerMap<IUserState> = {
  users: fromUser.reducer
}

export const getUsersState = createFeatureSelector<IUserState>(
  'users'
)
