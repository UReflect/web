import { Action }                                                                        from '@ngrx/store'
import { IMirror, IMIrrorInstallModule, IMirrorJoin, IMIrrorLinkProfile, IMirrorUpdate } from '@core/mirrors/models/mirror.model'

export enum MirrorActionTypes {
  LoadMine = '[Mirror] Load Mine',
  LoadMineSuccess = '[Mirror] Load Mine Success',
  LoadMineFailure = '[Mirror] Load Mine Failure',
  Update = '[Mirror] Update',
  UpdateSuccess = '[Mirror] Update Success',
  UpdateFailure = '[Mirror] Update Failure',
  Join = '[Mirror] Join',
  JoinSuccess = '[Mirror] Join Success',
  JoinFailure = '[Mirror] Join Failure',
  Setup = '[Mirror] Setup',
  SetupSuccess = '[Mirror] Setup Success',
  SetupFailure = '[Mirror] Setup Failure',
  LinkProfile = '[Mirror] Link Profile',
  LinkProfileSuccess = '[Mirror] Link Profile Success',
  LinkProfileFailure = '[Mirror] Link Profile Failure',
  ClearError = '[Mirror] Clear Error',
  ClearMirrors = '[Mirror] Clear Mirrors',
  Delete = '[Mirror] Delete',
  DeleteSuccess = '[Mirror] Delete Success',
  DeleteFailure = '[Mirror] Delete Failure',
  InstallModule = '[Mirror] Install Module',
  InstallModuleSuccess = '[Mirror] Install Module Success',
  InstallModuleFailure = '[Mirror] Install Module Failure',
  // LoadProfiles = '[Mirror] Load Profiles',
  // LoadProfilesSuccess = '[Mirror] Load Profiles Success',
  // LoadProfilesFailure = '[Mirror] Load Profiles Failure',
  // UnlinkProfile = '[Mirror] Unlink Profile',
  // UnlinkProfileSuccess = '[Mirror] Unlink Profile Success',
  // UnlinkProfileFailure = '[Mirror] Unlink Profile Failure'
}

/**
 * Load mine mirrors action
 */
export class LoadMine implements Action {
  /**
   * Action type
   * '[Mirror] Load Mine'
   */
  readonly type = MirrorActionTypes.LoadMine
}

/**
 * Load mine mirror success action
 */
export class LoadMineSuccess implements Action {
  /**
   * Action type
   * '[Mirror] Load Mine Success'
   */
  readonly type = MirrorActionTypes.LoadMineSuccess

  /**
   * Constructor
   * @param payload Contains received mirrors
   */
  constructor(public payload: IMirror[]) {
  }
}

/**
 * Load mine failure action
 */
export class LoadMineFailure implements Action {
  /**
   * Action type
   * '[Mirror] Load Mine Failure'
   */
  readonly type = MirrorActionTypes.LoadMineFailure

  /**
   * Constructor
   * @param payload Contains received errors
   */
  constructor(public payload: any) {
  }
}

/**
 * Update mirror action
 */
export class Update implements Action {
  /**
   * Action type
   * '[Mirror] Update'
   */
  readonly type = MirrorActionTypes.Update

  /**
   * Constructor
   * @param payload Contains mirror info used to update
   */
  constructor(public payload: IMirrorUpdate) {
  }
}

/**
 * Update mirror success action
 */
export class UpdateSuccess implements Action {
  /**
   * Action type
   * '[Mirror] Update Success'
   */
  readonly type = MirrorActionTypes.UpdateSuccess

  /**
   * Constructor
   * @param payload Contains new mirror info
   */
  constructor(public payload: IMirror) {
  }
}

/**
 * Update mirror failure action
 */
export class UpdateFailure implements Action {
  /**
   * Action type
   * '[Mirror] Update Failure'
   */
  readonly type = MirrorActionTypes.UpdateFailure

  /**
   * Constructor
   * @param payload Contains received errors
   */
  constructor(public payload: any) {
  }
}

/**
 * Join mirror action
 */
export class Join implements Action {
  /**
   * Action type
   * '[Mirror] Join'
   */
  readonly type = MirrorActionTypes.Join

  /**
   * Constructor
   * @param payload Contains mirror to delete
   */
  constructor(public payload: IMirrorJoin) {
  }
}

/**
 * Join mirror success
 */
export class JoinSuccess implements Action {
  /**
   * Action type
   * '[Mirror] Join Success'
   */
  readonly type = MirrorActionTypes.JoinSuccess

  /**
   * Constructor
   * @param payload Contains success message
   */
  constructor(public payload: any) {
  }
}

/**
 * Join mirror failure
 */
export class JoinFailure implements Action {
  /**
   * Action type
   * '[Mirror] Join Failure'
   */
  readonly type = MirrorActionTypes.JoinFailure

  /**
   * Constructor
   * @param payload Contains received error
   */
  constructor(public payload: any) {
  }
}

/**
 * Clear mirror error
 */
export class ClearError implements Action {
  /**
   * Action type
   * '[Mirror] Clear Error'
   */
  readonly type = MirrorActionTypes.ClearError
}

/**
 * Link profile to mirror
 */
export class LinkProfile implements Action {
  /**
   * Action type
   * '[Mirror] Link Profile'
   */
  readonly type = MirrorActionTypes.LinkProfile

  /**
   * Constructor
   * @param payload Contains profile to link and mirror ID
   */
  constructor(public payload: IMIrrorLinkProfile) {
  }
}

/**
 * Link profile mirror success
 */
export class LinkProfileSuccess implements Action {
  /**
   * Action type
   * '[Mirror] Link Profile Success'
   */
  readonly type = MirrorActionTypes.LinkProfileSuccess

  /**
   * Constructor
   * @param payload Profile received
   */
  constructor(public payload: number) {
  }
}

/**
 * Link profile mirror failure
 */
export class LinkProfileFailure implements Action {
  /**
   * Action type
   * '[Mirror] Link Profile Failure'
   */
  readonly type = MirrorActionTypes.LinkProfileFailure

  /**
   * Constructor
   * @param payload Contains received error
   */
  constructor(public payload: any) {
  }
}

/**
 * Setup mirror action
 */
export class Setup implements Action {
  /**
   * Action type
   * '[Mirror] Setup'
   */
  readonly type = MirrorActionTypes.Setup

  /**
   * Constructor
   * @param payload Contains mirror info used to update
   */
  constructor(public payload: IMirrorUpdate) {
  }
}

/**
 * Setup mirror success action
 */
export class SetupSuccess implements Action {
  /**
   * Action type
   * '[Mirror] Setup Success'
   */
  readonly type = MirrorActionTypes.SetupSuccess

  /**
   * Constructor
   * @param payload Contains new mirror info
   */
  constructor(public payload: IMirror) {
  }
}

/**
 * Setup mirror failure action
 */
export class SetupFailure implements Action {
  /**
   * Action type
   * '[Mirror] Setup Failure'
   */
  readonly type = MirrorActionTypes.SetupFailure

  /**
   * Constructor
   * @param payload Contains received errors
   */
  constructor(public payload: any) {
  }
}

/**
 * Clear mirror action
 */
export class ClearMirrors implements Action {
  /**
   * Action type
   * '[Mirror] Clear Mirrors
   */
  readonly type = MirrorActionTypes.ClearMirrors
}

/**
 * Delete mirror action
 */
export class Delete implements Action {
  /**
   * Action type
   * '[Mirror] Delete
   */
  readonly type = MirrorActionTypes.Delete

  /**
   * Constructor
   * @param payload Mirror
   */
  constructor(public payload: IMirror) {
  }
}

/**
 * Delete mirror success action
 */
export class DeleteSuccess implements Action {
  /**
   * Action type
   * '[Mirror] Delete Success'
   */
  readonly type = MirrorActionTypes.DeleteSuccess

  /**
   * Mirror to delete
   * @param payload Mirror
   */
  constructor(public payload: IMirror) {
  }
}

/**
 * Delete mirror failure action
 */
export class DeleteFailure implements Action {
  /**
   * Action type
   * '[Mirror] Delete Failure'
   */
  readonly type = MirrorActionTypes.DeleteFailure

  /**
   * Constructor
   * @param payload Error received
   */
  constructor(public payload: any) {
  }
}

/**
 * Install module on mirror action
 */
export class InstallModule implements Action {
  /**
   * Action type
   * '[Mirror] Install Module'
   */
  readonly type = MirrorActionTypes.InstallModule

  /**
   * Constructor
   * @param payload Mirror and module IDs
   */
  constructor(public payload: IMIrrorInstallModule) {
  }
}

/**
 * Install module on mirror success action
 */
export class InstallModuleSuccess implements Action {
  /**
   * Action type
   * '[Mirror] Install Module Success'
   */
  readonly type = MirrorActionTypes.InstallModuleSuccess
}

/**
 * Install module on mirror failure action
 */
export class InstallModuleFailure implements Action {
  /**
   * Action type
   * '[Mirror] Install Module Failure'
   */
  readonly type = MirrorActionTypes.InstallModuleFailure

  /**
   * Constructor
   * @param payload Error received
   */
  constructor(public payload: any) {
  }
}

// export class LoadProfiles implements Action {
//   /**
//    * Action type
//    * '[Mirror] Load Profiles'
//    */
//   readonly type = MirrorActionTypes.LoadProfiles
//
//   constructor(public payload: number) {
//   }
// }
//
// export class LoadProfilesSuccess implements Action {
//   /**
//    * Action type
//    * '[Mirror] Load Profiles Success'
//    */
//   readonly type = MirrorActionTypes.LoadProfilesSuccess
//
//   constructor(public payload: IProfile[]) {
//   }
// }
//
// export class LoadProfileFailure implements Action {
//   /**
//    * Action type
//    * '[Mirror] Load Profiles Failure'
//    */
//   readonly type = MirrorActionTypes.LoadProfilesFailure
//
//   constructor(public payload: any) {
//   }
// }

export type MirrorActionsUnion =
  | LoadMine
  | LoadMineSuccess
  | LoadMineFailure
  | Update
  | UpdateSuccess
  | UpdateFailure
  | Join
  | JoinSuccess
  | JoinFailure
  | ClearError
  | LinkProfile
  | LinkProfileSuccess
  | LinkProfileFailure
  | Setup
  | SetupSuccess
  | SetupFailure
  | ClearMirrors
  | Delete
  | DeleteSuccess
  | DeleteFailure
  | InstallModule
  | InstallModuleSuccess
  | InstallModuleFailure
