import { Injectable }                              from '@angular/core'
import { Actions, Effect }                         from '@ngrx/effects'
import { ModuleService }                           from '@core/modules/services/module.service'
import * as moduleActions                          from '@core/modules/store/actions'
import { catchError, map, switchMap }              from 'rxjs/operators'
import { of }                                      from 'rxjs'
import { IModule, IModuleCreation, IModuleUpload } from '@core/modules/models/module'
import * as routerActions                          from '@store/actions'

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
          .pipe(
            map(response => {
              console.log('toto', response)
              return new moduleActions.LoadAllSuccess(response)
            }),
            catchError(e => of(new moduleActions.LoadAllFailed(e)))
          )
      })
    )

  // @Effect()
  // createModule$ = this.actions$.ofType(
  //   moduleActions.ModuleActionTypes.Create,
  //   moduleActions.ModuleActionTypes.Update
  // ).pipe(
  //   switchMap((module: IModuleCreation) => {
  //     return this.moduleService.create(module)
  //       .pipe(
  //         map(response => new moduleActions.CreateSuccess(response.module)),
  //         catchError(e => of(new moduleActions.CreateFailed(e.error)))
  //       )
  //   })
  // )
  //
  // @Effect()
  // deleteModule$ = this.actions$.ofType(moduleActions.ModuleActionTypes.Delete)
  //   .pipe(
  //     switchMap((module: IModule) => {
  //       return this.moduleService.delete(module.id)
  //         .pipe(
  //           map(() => new moduleActions.DeleteSuccess(module)),
  //           catchError(e => of(new moduleActions.DeleteFailed(e.error)))
  //         )
  //     })
  //   )
  //
  // @Effect()
  // uploadModule$ = this.actions$.ofType(moduleActions.ModuleActionTypes.Upload)
  //   .pipe(
  //     switchMap((form: IModuleUpload) => {
  //       return this.moduleService.uploadPackage(form)
  //         .pipe(
  //           map(() => new moduleActions.UploadSuccess),
  //           catchError(e => of(new moduleActions.UploadFailed(e.error)))
  //         )
  //     })
  //   )
  //
  // @Effect()
  // createModuleSuccess$ = this.actions$.ofType(moduleActions.ModuleActionTypes.CreateSuccess)
  //   .pipe(
  //     map((action: moduleActions.CreateSuccess) => action.payload),
  //     map(module => {
  //       return new routerActions.Go({
  //         path: ['/modules', module.id]
  //       })
  //     })
  //   )
  //
  // @Effect()
  // deleteModuleSuccess$ = this.actions$.ofType(moduleActions.ModuleActionTypes.DeleteSuccess)
  //   .pipe(
  //     map(() => {
  //       return new routerActions.Go({
  //         path: ['/modules']
  //       })
  //     })
  //   )
}
