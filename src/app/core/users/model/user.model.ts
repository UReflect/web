/**
 * Interface which defines user
 */
export interface IUser {
  /**
   * User ID
   */
  ID: number,
  /**
   * Is user active
   */
  active: boolean,
  /**
   * User email
   */
  email: string,
  /**
   * Is user email checked
   */
  email_checked: boolean,
  /**
   * User name
   */
  name: string
}
