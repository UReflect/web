import { Action }                                               from '@ngrx/store'
import { IAuthentication, IPasswordLost, IRegistration, IUser } from '../../models/user'

export enum AuthActionTypes {
  SignIn = '[Auth] Sign In',
  SignOut = '[Auth] Sign Out',
  SignUp = '[Auth] Sign Up',
  SignInSuccess = '[Auth] Sign In Success',
  SignInFailure = '[Auth] Sign In Failure',
  SignInRedirect = '[Auth] Sign In Redirect',
  PasswordLost = '[Auth] Password Lost',
  PasswordLostSuccess = '[Auth] Password Lost Success',
  PasswordLostFailure = '[Auth] Password Lost Failure'
}

export class SignIn implements Action {
  readonly type = AuthActionTypes.SignIn

  constructor(public payload: IAuthentication) {
  }
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SignUp

  constructor(public payload: IRegistration) {
  }
}

export class SignOut implements Action {
  readonly type = AuthActionTypes.SignOut
}

export class SignInSuccess implements Action {
  readonly type = AuthActionTypes.SignInSuccess
}

export class SignInFailure implements Action {
  readonly type = AuthActionTypes.SignInFailure

  constructor(public payload: any) {
  }
}

export class SignInRedirect implements Action {
  readonly type = AuthActionTypes.SignInRedirect
}

export class PasswordLost implements Action {
  readonly type = AuthActionTypes.PasswordLost

  constructor(public payload: IPasswordLost) {
  }
}

export class PasswordLostSuccess implements Action {
  readonly type = AuthActionTypes.PasswordLostSuccess
}

export class PasswordLostFailure implements Action {
  readonly type = AuthActionTypes.PasswordLostFailure

  constructor(public payload: any) {
  }
}

export type AuthActionsUnion =
  | SignIn
  | SignUp
  | SignOut
  | SignInFailure
  | SignInRedirect
  | SignInSuccess
  | PasswordLost
  | PasswordLostSuccess
  | PasswordLostFailure
