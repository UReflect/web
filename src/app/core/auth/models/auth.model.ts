/**
 * Sign in interface
 */
export interface IAuthentication {
  /**
   * Email
   */
  email: string,
  /**
   * Password
   */
  password: string
}

/**
 * Register interface
 */
export interface IRegistration {
  /**
   * Email
   */
  email: string,
  /**
   * Password
   */
  password: string,
  /**
   * Name
   */
  name: string
}

/**
 * Password lost interface
 */
export interface IPasswordLost {
  /**
   * Email
   */
  email: string
}

/**
 * Fields to display in AuthForm interface
 */
export interface IFields {
  /**
   * Email boolean
   */
  email: boolean,
  /**
   * Name boolean
   */
  name: boolean,
  /**
   * Password boolean
   */
  password: boolean,
  /**
   * PasswordConfirm boolean
   */
  passwordConfirm: boolean
}

/**
 * Footer setting for AuthForm interface
 */
export interface IFooter {
  /**
   * Link for routing
   */
  link: string,
  /**
   * Text for button
   */
  btnText: string,
  /**
   * Icon for button
   */
  btnIcon: string
}

/**
 * Submit button settings for AuthForm interface
 */
export interface ISubmitBtn {
  /**
   * Icon for button
   */
  icon: string,
  /**
   * Text for button depending on status
   */
  text: {
    static: string,
    loading: string
  }
}

/**
 * Interface which defines password reset
 */
export interface IResetPassword {
  /**
   * Token received from email
   */
  token: string,
  /**
   * New password
   */
  password: string
}
