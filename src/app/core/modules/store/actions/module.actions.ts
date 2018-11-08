import { Action } from '@ngrx/store'
import {
  IModule, IModuleCreation,
  IModuleUpdate, IModuleUpload
}                 from '@core/modules/models/module'

export enum ModuleActionTypes {
  LoadAll = '[Modules] Load All',
  LoadAllSuccess = '[Modules] Load All Success',
  LoadAllFailed = '[Modules] Load All Failed',
  Create = '[Modules] Create',
  CreateSuccess = '[Modules] Create Success',
  CreateFailed = '[Module] Create Failed',
  Update = '[Modules] Update',
  UpdateSuccess = '[Modules] Update Success',
  UpdateFailed = '[Module] Update Failed',
  Upload = '[Modules] Upload',
  UploadSuccess = '[Modules] Upload Success',
  UploadFailed = '[Modules] Upload Failed',
  Delete = '[Modules] Delete',
  DeleteSuccess = '[Modules] DeleteSuccess',
  DeleteFailed = '[Modules] Delete Failed'
}

/**
 * Load all module action
 */
export class LoadAll implements Action {
  /**
   * Action type
   * '[Modules] Load All'
   */
  readonly type = ModuleActionTypes.LoadAll
}

/**
 * Load all success module action
 */
export class LoadAllSuccess implements Action {
  /**
   * Action type
   * '[Modules] Load All Success'
   */
  readonly type = ModuleActionTypes.LoadAllSuccess

  /**
   * Constructor
   * @param payload Modules received
   */
  constructor(public payload: any) {
  }
}

/**
 * Load all failure module action
 */
export class LoadAllFailed implements Action {
  /**
   * Action type
   * '[Modules] Load All Failure'
   */
  readonly type = ModuleActionTypes.LoadAllFailed

  /**
   * Constructor
   * @param payload Error received
   */
  constructor(public payload: any) {
  }
}

/**
 * Create module action
 */
export class Create implements Action {
  /**
   * Action type
   * '[Modules] Create'
   */
  readonly type = ModuleActionTypes.Create

  /**
   * Constructor
   * @param payload Module info for creation
   */
  constructor(public payload: IModuleCreation) {
  }
}

/**
 * Create success module action
 */
export class CreateSuccess implements Action {
  /**
   * Action type
   * '[Modules] Create Success'
   */
  readonly type = ModuleActionTypes.CreateSuccess

  /**
   * Constructor
   * @param payload Received newly created module
   */
  constructor(public payload: any) {
  }
}

/**
 * Create failure module action
 */
export class CreateFailed implements Action {
  /**
   * Action type
   * '[Modules] Create Failure'
   */
  readonly type = ModuleActionTypes.CreateFailed

  /**
   * Constructor
   * @param payload Received error
   */
  constructor(public payload: any) {
  }
}

/**
 * Update module action
 */
export class Update implements Action {
  /**
   * Action type
   * '[Modules] Update'
   */
  readonly type = ModuleActionTypes.Update

  /**
   * Constructor
   * @param payload Module info for update
   */
  constructor(public payload: IModuleUpdate) {
  }
}

/**
 * Update success module action
 */
export class UpdateSuccess implements Action {
  /**
   * Action type
   * '[Modules] Update Success'
   */
  readonly type = ModuleActionTypes.UpdateSuccess

  /**
   * Constructor
   * @param payload Newly updated module
   */
  constructor(public payload: any) {
  }
}

/**
 * Update failure module action
 */
export class UpdateFailed implements Action {
  /**
   * Action type
   * '[Modules] Update Failure'
   */
  readonly type = ModuleActionTypes.UpdateFailed

  /**
   * Constructor
   * @param payload Received error
   */
  constructor(public payload: any) {
  }
}

/**
 * Upload module action
 */
export class Upload implements Action {
  /**
   * Action type
   * '[Modules] Upload'
   */
  readonly type = ModuleActionTypes.Upload

  /**
   * Constructor
   * @param payload ZIP archive module
   */
  constructor(public payload: IModuleUpload) {
  }
}

/**
 * Upload success module action
 */
export class UploadSuccess implements Action {
  /**
   * Action type
   * '[Modules] Upload Success'
   */
  readonly type = ModuleActionTypes.UploadSuccess
}

/**
 * Upload failure module action
 */
export class UploadFailed implements Action {
  /**
   * Action type
   * '[Modules] Upload Failed'
   */
  readonly type = ModuleActionTypes.UploadFailed

  /**
   * Constructor
   * @param payload Error received
   */
  constructor(public payload: any) {
  }
}

/**
 * Delete module action
 */
export class Delete implements Action {
  /**
   * Action type
   * '[Modules] Delete'
   */
  readonly type = ModuleActionTypes.Delete

  /**
   * Constructor
   * @param payload Module to delete
   */
  constructor(public payload: IModule) {
  }
}

/**
 * Delete success module action
 */
export class DeleteSuccess implements Action {
  /**
   * Action type
   * '[Modules] Delete Success'
   */
  readonly type = ModuleActionTypes.DeleteSuccess

  /**
   * Constructor
   * @param payload Module deleted
   */
  constructor(public payload: IModule) {
  }
}

/**
 * Delete failure module action
 */
export class DeleteFailed implements Action {
  /**
   * Action type
   * '[Modules] Delete Failed'
   */
  readonly type = ModuleActionTypes.DeleteFailed

  /**
   * Constructor
   * @param payload Received error
   */
  constructor(public payload: any) {
  }
}

export type ModuleActionsUnion =
  | LoadAll
  | LoadAllSuccess
  | LoadAllFailed
  | Create
  | CreateSuccess
  | CreateFailed
  | Update
  | UpdateSuccess
  | UpdateFailed
  | Upload
  | UploadSuccess
  | UploadFailed
  | Delete
  | DeleteSuccess
  | DeleteFailed
