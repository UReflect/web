import { Action }                                from '@ngrx/store'
import { IAuthentication, IRegistration, IUser } from '../../models/user'

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

export type AuthActionsUnion =
  | SignIn
  | SignUp
  | SignOut
  | SignInFailure
  | SignInRedirect
  | SignInSuccess
