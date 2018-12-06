import { Action }                                                      from '@ngrx/store'
import { IAuthentication, IPasswordLost, IRegistration } from '../../models/auth.model'

export enum AuthActionTypes {
  SignIn = '[Auth] Sign In',
  SignOut = '[Auth] Sign Out',
  SignUp = '[Auth] Sign Up',
  SignInSuccess = '[Auth] Sign In Success',
  SignInFailure = '[Auth] Sign In Failure',
  SignInRedirect = '[Auth] Sign In Redirect',
  PasswordLost = '[Auth] Password Lost',
  PasswordLostSuccess = '[Auth] Password Lost Success',
  PasswordLostFailure = '[Auth] Password Lost Failure',
  ClearError = '[Auth] Clear Error',
  ConfirmMail = '[Auth] Confirm Mail',
  ConfirmMailSuccess = '[Auth] Confirm Mail Success',
  ConfirmMailFailure = '[Auth] Confirm Mail Failure'
}

/**
 * Sign in action
 */
export class SignIn implements Action {
  /**
   * Action type
   * '[Auth] Sign In'
   */
  readonly type = AuthActionTypes.SignIn

  /**
   * Constructor
   * @param payload Sign in credentials
   */
  constructor(public payload: IAuthentication) {
  }
}

/**
 * Sign up action
 */
export class SignUp implements Action {
  /**
   * Action type
   * '[Auth] Sign Up'
   */
  readonly type = AuthActionTypes.SignUp

  /**
   * Constructor
   * @param payload Sign up credentials
   */
  constructor(public payload: IRegistration) {
  }
}

/**
 * Sign out action
 */
export class SignOut implements Action {
  /**
   * Action type
   * '[Auth] Sign Out'
   */
  readonly type = AuthActionTypes.SignOut
}

/**
 * Sign in success action
 */
export class SignInSuccess implements Action {
  /**
   * Action type
   * '[Auth] Sign In Success'
   */
  readonly type = AuthActionTypes.SignInSuccess
}

/**
 * Sign in failure action
 */
export class SignInFailure implements Action {
  /**
   * Action type
   * '[Auth] Sign In Failure'
   */
  readonly type = AuthActionTypes.SignInFailure

  /**
   * Constructor
   * @param payload Error received
   */
  constructor(public payload: any) {
  }
}

/**
 * Sign in redirect action
 */
export class SignInRedirect implements Action {
  /**
   * Action type
   * '[Auth] Sign In Redirect'
   */
  readonly type = AuthActionTypes.SignInRedirect
}

/**
 * Password lost action
 */
export class PasswordLost implements Action {
  /**
   * Action type
   * '[Auth] Password Lost'
   */
  readonly type = AuthActionTypes.PasswordLost

  /**
   * Constructor
   * @param payload Password lost credentials
   */
  constructor(public payload: IPasswordLost) {
  }
}

/**
 * Password lost success action
 */
export class PasswordLostSuccess implements Action {
  /**
   * Action type
   * '[Auth] Password Lost Success'
   */
  readonly type = AuthActionTypes.PasswordLostSuccess
}

/**
 * Password lost failure action
 */
export class PasswordLostFailure implements Action {
  /**
   * Action type
   * '[Auth] Password Lost Failure'
   */
  readonly type = AuthActionTypes.PasswordLostFailure

  /**
   * Constructor
   * @param payload Error received
   */
  constructor(public payload: any) {
  }
}

/**
 * Clear error action
 */
export class ClearError implements Action {
  /**
   * Action type
   * '[Auth] Clear Error'
   */
  readonly type = AuthActionTypes.ClearError
}

export class ConfirmMail implements Action {
  readonly type = AuthActionTypes.ConfirmMail

  constructor(public payload: string) {
  }
}

export class ConfirmMailSuccess implements Action {
  readonly type = AuthActionTypes.ConfirmMailSuccess

  constructor(public payload: string) {
  }
}

export class ConfirmMailFailure implements Action {
  readonly type = AuthActionTypes.ConfirmMailFailure

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
  | ClearError
  | ConfirmMail
  | ConfirmMailSuccess
  | ConfirmMailFailure
