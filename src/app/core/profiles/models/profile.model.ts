import { IModule } from '@core/modules/models/module'

/**
 * Interface which defines profile
 */
export interface IProfile {
  /**
   * ID of the profile
   */
  ID: number,
  /**
   * Modules contained in profile
   */
  modules: IModule[],
  /**
   * Title of the profile
   */
  title: string,
  /**
   * user_id of the user owner of the profile
   */
  user_id: number,
  /**
   * Profile date of creation
   */
  CreatedAt: Date,
  /**
   * Profile last update date
   */
  UpdatedAt: Date
}

/**
 * Interface which defines profile creation parameters
 */
export interface IProfileCreate {
  /**
   * Title of the profile
   */
  title: string
}

/**
 * Interface which defines profile update parameters
 */
export interface IProfileUpdate {
  /**
   * ID of the profile
   */
  ID: number,
  /**
   * Title of the profile
   */
  title: string
}

/**
 * Interface which defines profile pin update parameters
 */
export interface IProfilePIN {
  /**
   * Profile ID
   */
  ID: number,
  /**
   * New PIN number
   */
  pin: string
}
