import { Injectable }                                             from '@angular/core'
import { Actions, Effect }                                        from '@ngrx/effects'
import { ModuleService }                                          from '@core/modules/services/module.service'
import * as moduleActions                                         from '@core/modules/store/actions'
import { catchError, map, switchMap }                             from 'rxjs/operators'
import { of }                                                     from 'rxjs'
import { IModule, IModuleCreation, IModuleUpdate, IModuleUpload } from '@core/modules/models/module'
import * as routerActions                                         from '@store/actions'

@Injectable()
export class ModuleEffects {
  constructor(private actions$: Actions,
              private moduleService: ModuleService) {
  }

  @Effect()
  loadModules$ = this.actions$.ofType(moduleActions.ModuleActionTypes.LoadAll)
    .pipe(
      switchMap(() => {
        return this.moduleService.all()
          .then(modules => new moduleActions.LoadAllSuccess(modules))
          .catch(e => of(new moduleActions.LoadAllFailed(e)))
      })
    )

  @Effect()
  createModule$ = this.actions$.ofType(
    moduleActions.ModuleActionTypes.Create
  ).pipe(
    switchMap((module: IModuleCreation) => {
      return this.moduleService.create(module)
        .then(newModule => new moduleActions.CreateSuccess(newModule))
        .catch(e => of(new moduleActions.CreateFailed(e)))
    })
  )

  @Effect()
  deleteModule$ = this.actions$.ofType(moduleActions.ModuleActionTypes.Delete)
    .pipe(
      switchMap((module: IModule) => {
        return this.moduleService.delete(module)
          .then(deletedModule => new moduleActions.DeleteSuccess(deletedModule))
          .catch(e => of(new moduleActions.DeleteSuccess(e)))
      })
    )

  @Effect()
  update$ = this.actions$.ofType(moduleActions.ModuleActionTypes.Update)
    .pipe(
      switchMap((module: IModuleUpdate) => {
        return this.moduleService.update(module)
          .then(updatedModule => new moduleActions.UpdateSuccess(updatedModule))
          .catch(e => of(new moduleActions.UpdateFailed(e)))
      })
    )

  @Effect()
  uploadModule$ = this.actions$.ofType(moduleActions.ModuleActionTypes.Upload)
    .pipe(
      switchMap((form: IModuleUpload) => {
        return this.moduleService.uploadPackage(form)
          .then(() => new moduleActions.UploadSuccess)
          .catch(e => of(new moduleActions.UploadFailed(e)))
      })
    )

  @Effect()
  createModuleSuccess$ = this.actions$.ofType(
    moduleActions.ModuleActionTypes.CreateSuccess,
    moduleActions.ModuleActionTypes.UpdateSuccess)
    .pipe(
      map((action: moduleActions.CreateSuccess) => action.payload),
      map(module => {
        return new routerActions.Go({
          path: ['/modules', module.id]
        })
      })
    )

  @Effect()
  deleteModuleSuccess$ = this.actions$.ofType(moduleActions.ModuleActionTypes.DeleteSuccess)
    .pipe(
      map(() => {
        return new routerActions.Go({
          path: ['/modules']
        })
      })
    )
}
