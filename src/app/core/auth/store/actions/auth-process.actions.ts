import { Action }                                                        from '@ngrx/store'
import { IAuthentication, IPasswordLost, IRegistration, IResetPassword } from '../../models/auth.model'

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
  ConfirmMailFailure = '[Auth] Confirm Mail Failure',
  ResetPassword = '[Auth] Reset Password',
  ResetPasswordSuccess = '[Auth] Reset Password Success',
  ResetPasswordFailure = '[Auth] Reset Password Failure'
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

/**
 * Confirm mail action
 */
export class ConfirmMail implements Action {
  /**
   * Action type
   * '[Auth] Confirm Mail'
   */
  readonly type = AuthActionTypes.ConfirmMail

  /**
   * Constructor
   * @param payload Token from email
   */
  constructor(public payload: string) {
  }
}

/**
 * Confirm mail success action
 */
export class ConfirmMailSuccess implements Action {
  /**
   * Action type
   * '[Auth] Confirm Mail Success'
   */
  readonly type = AuthActionTypes.ConfirmMailSuccess

  /**
   * Constructor
   * @param payload Response received
   */
  constructor(public payload: string) {
  }
}

/**
 * Confirm mail failure action
 */
export class ConfirmMailFailure implements Action {
  /**
   * Action type
   * '[Auth] Confirm Mail Failure'
   */
  readonly type = AuthActionTypes.ConfirmMailFailure

  /**
   * Constructor
   * @param payload Error received
   */
  constructor(public payload: any) {
  }
}

/**
 * Reset password action
 */
export class ResetPassword implements Action {
  /**
   * Action type
   * '[Auth] Reset Password'
   */
  readonly type = AuthActionTypes.ResetPassword

  /**
   * Constructor
   * @param payload Token from email and new password
   */
  constructor(public payload: IResetPassword) {
  }
}

/**
 * Reset password success action
 */
export class ResetPasswordSuccess implements Action {
  /**
   * Action type
   * '[Auth] Reset Password Success'
   */
  readonly type = AuthActionTypes.ResetPasswordSuccess

  /**
   * Constructor
   * @param payload Response received
   */
  constructor(public payload: string) {
  }
}

/**
 * Reset password failure action
 */
export class ResetPasswordFailure implements Action {
  /**
   * Action type
   * '[Auth] Reset Password Failure'
   */
  readonly type = AuthActionTypes.ResetPasswordFailure

  /**
   * Constructor
   * @param payload Error received
   */
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
  | ResetPassword
  | ResetPasswordSuccess
  | ResetPasswordFailure
