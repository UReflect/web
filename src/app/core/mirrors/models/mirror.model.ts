/**
 * Interface which defines mirrors
 */
export interface IMirror {
  /**
   * Mirror ID
   */
  ID: number,
  /**
   * Mirror join code
   */
  joinCode: string,
  /**
   * Is mirror joined
   */
  joined: boolean,
  /**
   * Is mirror active
   */
  active: boolean,
  /**
   * Mirror Location
   */
  location: string,
  /**
   * Mirror name
   */
  name: string,
  /**
   * Mirror Serial
   */
  serial: string,
  /**
   * User ID of the owner of the mirror
   */
  userID: number,
  /**
   * Mirror timezone
   */
  timezone: string
}

/**
 * Interface which defines mirror join process
 */
export interface IMirrorJoin {
  /**
   * Mirror join code
   */
  join_code: string
}

/**
 * Interface which defines mirror update info
 */
export interface IMirrorUpdate {
  /**
   * Mirror ID
   */
  id: number,
  /**
   * Mirror name
   */
  name: string,
  /**
   * Mirror location
   */
  location: string
}

/**
 * Interface which defines mirror and profile linking
 */
export interface IMIrrorLinkProfile {
  /**
   * Mirror ID
   */
  id: number,
  /**
   * Profile ID
   */
  profile_id: number
}

/**
 * Interface which defines data needed for module installation
 */
export interface IMIrrorInstallModule {
  /**
   * Profile ID
   */
  profile_id: number,
  /**
   * Module ID
   */
  module_id: number
}
