/**
 * Module interface
 */
export interface IModule {
  /**
   * Module ID
   */
  ID: number,
  /**
   * Module description
   */
  description: string,
  /**
   * Module title
   */
  title: string,
  /**
   * Module price
   */
  price: number,
  /**
   * Module rating
   */
  rating: number,
  /**
   * Module ratings number
   */
  rating_nb: number,
  /**
   * Module user ID
   */
  user_id: number,
  /**
   * Module minimum height
   */
  min_height: number,
  /**
   * Module minimum width
   */
  min_width: number,
  /**
   * Module last update date
   */
  UpdatedAt: any
}

/**
 * Module creation interface
 */
export interface IModuleCreation {
  /**
   * Module title
   */
  title: string,
  /**
   * Module description
   */
  description: string,
  /**
   * Module minimum height
   */
  min_height: number,
  /**
   * Module minimum width
   */
  min_width: number,
  /**
   * Module price
   */
  price: number
}

/**
 * Module update interface
 */
export interface IModuleUpdate {
  /**
   * Module ID
   */
  ID: number,
  /**
   * Module title
   */
  title: string,
  /**
   * Module description
   */
  description: string,
  /**
   * Module minimum height
   */
  min_height: number,
  /**
   * Module minimum width
   */
  min_width: number,
  /**
   * Module price
   */
  price: number
}

/**
 * Module upload ZIP archive interface
 */
export interface IModuleUpload {
  /**
   * Module ID
   */
  ID: number,
  /**
   * Module ZIP Archive FormData
   */
  formData: FormData
}
