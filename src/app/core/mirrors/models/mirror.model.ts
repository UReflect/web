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
  JoinCode: string,
  /**
   * Is mirror joined
   */
  Joined: boolean,
  /**
   * Is mirror active
   */
  Active: boolean,
  /**
   * Mirror Location
   */
  Location: string,
  /**
   * Mirror name
   */
  Name: string,
  /**
   * Mirror Serial
   */
  Serial: string,
  /**
   * User ID of the owner of the mirror
   */
  userID: number
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
