import { Authentication, Registration, User } from '../models/user'
import { Action }                             from '@ngrx/store'

export enum AuthActionTypes {
  SignIn = '[Auth] Sign In',
  SignOut = '[Auth] Sign Out',
  SignUp = '[Auth] Sign Up',
  SignInSuccess = '[Auth] Sign In Success',
  SignInFailure = '[Auth] Sign In Failure',
  SignInRedirect = '[Auth] Sign In Redirect'
}

export class SignIn implements Action {
  readonly type = AuthActionTypes.SignIn

  constructor(public payload: Authentication) {
  }
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SignUp

  constructor(public payload: Registration) {
  }
}

export class SignOut implements Action {
  readonly type = AuthActionTypes.SignOut
}

export class SignInSuccess implements Action {
  readonly type = AuthActionTypes.SignInSuccess

  constructor(public payload: { user: User, token: string }) {
  }
}

export class SignInFailure implements Action {
  readonly type = AuthActionTypes.SignInFailure

  constructor(public payload: any) {
  }
}

export class SignInRedirect implements Action {
  readonly type = AuthActionTypes.SignInRedirect
}

export type AuthActionsUnion =
  | SignIn
  | SignUp
  | SignOut
  | SignInFailure
  | SignInRedirect
  | SignInSuccess
