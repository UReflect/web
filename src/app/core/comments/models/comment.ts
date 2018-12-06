/**
 * Comment interface
 */
export interface IComment {
  /**
   * Comment ID
   */
  ID: number,
  /**
   * Comment module ID
   */
  module_id: number,
  /**
   * Comment user ID
   */
  user_id: number,
  /**
   * Comment value
   */
  value: string,
  /**
   * Comment last update
   */
  UpdatedAt: any,
  owner_name: string
}

/**
 * Comment creation interface
 */
export interface ICommentCreation {
  /**
   * Module ID
   */
  id: number,
  /**
   * Comment value
   */
  value: string
}
