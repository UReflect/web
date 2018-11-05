import { Injectable }                                             from '@angular/core'
import { Actions, Effect, ofType }                                from '@ngrx/effects'
import { ModuleService }                                          from '@core/modules/services/module.service'
import * as moduleActions                                         from '@core/modules/store/actions'
import { map, switchMap }                                         from 'rxjs/operators'
import { IModule, IModuleCreation, IModuleUpdate, IModuleUpload } from '@core/modules/models/module'
import * as routerActions                                         from '@store/actions'

@Injectable()
export class ModuleEffects {
  constructor(private actions$: Actions,
              private moduleService: ModuleService) {
  }

  @Effect()
  loadModules$ = this.actions$.pipe(ofType(moduleActions.ModuleActionTypes.LoadAll))
    .pipe(
      switchMap(() => {
        return this.moduleService.all()
          .then(modules => new moduleActions.LoadAllSuccess(modules))
          .catch(e => new moduleActions.LoadAllFailed(e))
      })
    )

  @Effect()
  createModule$ = this.actions$.pipe(ofType(moduleActions.ModuleActionTypes.Create))
    .pipe(map((action: moduleActions.Create) => action.payload),
      switchMap((module: IModuleCreation) => {
        return this.moduleService.create(module)
          .then(newModule => new moduleActions.CreateSuccess(newModule))
          .catch(e => new moduleActions.CreateFailed(e))
      })
    )

  @Effect()
  deleteModule$ = this.actions$.pipe(ofType(moduleActions.ModuleActionTypes.Delete))
    .pipe(map((action: moduleActions.Delete) => action.payload),
      switchMap((module: IModule) => {
        return this.moduleService.delete(module)
          .then(deletedModule => new moduleActions.DeleteSuccess(deletedModule))
          .catch(e => new moduleActions.DeleteSuccess(e))
      })
    )

  @Effect()
  update$ = this.actions$.pipe(ofType(moduleActions.ModuleActionTypes.Update))
    .pipe(map((action: moduleActions.Update) => action.payload),
      switchMap((module: IModuleUpdate) => {
        return this.moduleService.update(module)
          .then(updatedModule => new moduleActions.UpdateSuccess(updatedModule))
          .catch(e => new moduleActions.UpdateFailed(e))
      })
    )

  @Effect()
  uploadModule$ = this.actions$.pipe(ofType(moduleActions.ModuleActionTypes.Upload))
    .pipe(map((action: moduleActions.Upload) => action.payload),
      switchMap((form: IModuleUpload) => {
        return this.moduleService.uploadPackage(form)
          .then(() => new moduleActions.UploadSuccess)
          .catch(e => new moduleActions.UploadFailed(e))
      })
    )

  @Effect()
  createModuleSuccess$ = this.actions$.pipe(ofType(
    moduleActions.ModuleActionTypes.CreateSuccess,
    moduleActions.ModuleActionTypes.UpdateSuccess))
    .pipe(
      map((action: moduleActions.CreateSuccess) => action.payload),
      map(module => {
        return new routerActions.Go({
          path: ['/module', module.ID]
        })
      })
    )

  @Effect()
  deleteModuleSuccess$ = this.actions$.pipe(ofType(
    moduleActions.ModuleActionTypes.DeleteSuccess))
    .pipe(
      map(() => {
        return new routerActions.Go({
          path: ['/modules']
        })
      })
    )
}
