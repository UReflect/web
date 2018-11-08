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
