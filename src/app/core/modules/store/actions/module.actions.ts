import { Action }                                  from '@ngrx/store'
import { IModule, IModuleCreation, IModuleUpload } from '@core/modules/models/module'

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

export class LoadAll implements Action {
  readonly type = ModuleActionTypes.LoadAll
}

export class LoadAllSuccess implements Action {
  readonly type = ModuleActionTypes.LoadAllSuccess

  constructor(public payload: any) {
  }
}

export class LoadAllFailed implements Action {
  readonly type = ModuleActionTypes.LoadAllFailed

  constructor(public payload: any) {
  }
}

export class Create implements Action {
  readonly type = ModuleActionTypes.Create

  constructor(public payload: IModuleCreation) {
  }
}

export class CreateSuccess implements Action {
  readonly type = ModuleActionTypes.CreateSuccess

  constructor(public payload: any) {
  }
}

export class CreateFailed implements Action {
  readonly type = ModuleActionTypes.CreateFailed

  constructor(public payload: any) {
  }
}

export class Update implements Action {
  readonly type = ModuleActionTypes.Update

  constructor(public payload: IModuleCreation) {
  }
}

export class UpdateSuccess implements Action {
  readonly type = ModuleActionTypes.UpdateSuccess

  constructor(public payload: any) {
  }
}

export class UpdateFailed implements Action {
  readonly type = ModuleActionTypes.UpdateFailed

  constructor(public payload: any) {
  }
}

export class Upload implements Action {
  readonly type = ModuleActionTypes.Upload

  constructor(public payload: IModuleUpload) {
  }
}

export class UploadSuccess implements Action {
  readonly type = ModuleActionTypes.UploadSuccess
}

export class UploadFailed implements Action {
  readonly type = ModuleActionTypes.UploadFailed

  constructor(public payload: any) {
  }
}

export class Delete implements Action {
  readonly type = ModuleActionTypes.Delete

  constructor(public payload: IModule) {
  }
}

export class DeleteSuccess implements Action {
  readonly type = ModuleActionTypes.DeleteSuccess

  constructor(public payload: IModule) {
  }
}

export class DeleteFailed implements Action {
  readonly type = ModuleActionTypes.DeleteFailed

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
