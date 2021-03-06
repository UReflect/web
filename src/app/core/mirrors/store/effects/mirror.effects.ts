import { Injectable }                                                       from '@angular/core'
import { Actions, Effect, ofType }                                          from '@ngrx/effects'
import { map, switchMap }                                                   from 'rxjs/operators'
import { MirrorService }                                                    from '@core/mirrors/services/mirror.service'
import * as mirrorActions                                                   from '../actions'
import { IMirror, IMIrrorInstallModule, IMIrrorLinkProfile, IMirrorUpdate } from '@core/mirrors/models'
import * as routerActions                                                   from '@store/actions'
import { ActivatedRoute }                                                   from '@angular/router'

/**
 * Mirror effects
 */
@Injectable()
export class MirrorEffects {
  /**
   * Mirror effects constructor
   * @param actions$ Action triggered
   * @param mirrorService HTTP service
   * @param route Router state
   */
  constructor(private actions$: Actions,
              private mirrorService: MirrorService,
              private route: ActivatedRoute) {
  }

  /**
   * Loads all mirrors using HTTP service
   */
  @Effect()
  loadMineMirrors$ = this.actions$.pipe(ofType(mirrorActions.MirrorActionTypes.LoadMine))
    .pipe(
      switchMap(() => {
        return this.mirrorService.mine()
          .then(mirrors => new mirrorActions.LoadMineSuccess(mirrors))
          .catch(e => new mirrorActions.LoadMineFailure(e))
      })
    )

  /**
   * Joins mirror using HTTP service
   */
  @Effect()
  joinMirror$ = this.actions$.pipe(ofType(mirrorActions.MirrorActionTypes.Join))
    .pipe(map((action: mirrorActions.Join) => action.payload),
      switchMap(data => {
        return this.mirrorService.join(data)
          .then(mirror => new mirrorActions.JoinSuccess(mirror))
          .catch(e => new mirrorActions.JoinFailure(e))
      })
    )

  /**
   * Updates mirror using HTTP service
   */
  @Effect()
  update$ = this.actions$
    .pipe(ofType(mirrorActions.MirrorActionTypes.Update))
    .pipe(map((action: mirrorActions.Update) => action.payload),
      switchMap((mirror: IMirrorUpdate) => {
        return this.mirrorService.update(mirror)
          .then(updatedMirror => new mirrorActions.UpdateSuccess(updatedMirror))
          .catch(e => new mirrorActions.UpdateFailure(e))
      })
    )

  /**
   * Updates mirror using HTTP service
   */
  @Effect()
  setup$ = this.actions$
    .pipe(ofType(mirrorActions.MirrorActionTypes.Setup))
    .pipe(map((action: mirrorActions.Setup) => action.payload),
      switchMap((mirror: IMirrorUpdate) => {
        return this.mirrorService.update(mirror)
          .then(updatedMirror => new mirrorActions.SetupSuccess(updatedMirror))
          .catch(e => new mirrorActions.SetupFailure(e))
      })
    )

  /**
   * Route newly joined mirror to setup
   */
  @Effect()
  joinMirrorSuccess$ = this.actions$
    .pipe(ofType(mirrorActions.MirrorActionTypes.JoinSuccess))
    .pipe(map((action: mirrorActions.JoinSuccess) => action.payload),
      map(mirror => {
        return new routerActions.Go({
          path: [`/mirror/${mirror.ID}/set`]
        })
      })
    )

  /**
   * Route to first profile setup
   */
  @Effect()
  setupSuccess$ = this.actions$
    .pipe(ofType(mirrorActions.MirrorActionTypes.SetupSuccess))
    .pipe(map((action: mirrorActions.SetupSuccess) => action.payload),
      map(mirror => {
        return new routerActions.Go({
          path: [`/mirror/${mirror.ID}/profile-first`]
        })
      }))

  /**
   * Link profile to mirror using HTTP service
   */
  @Effect()
  linkProfile$ = this.actions$
    .pipe(ofType(mirrorActions.MirrorActionTypes.LinkProfile))
    .pipe(map((action: mirrorActions.LinkProfile) => action.payload),
      switchMap((data: IMIrrorLinkProfile) => {
        return this.mirrorService.linkProfile(data)
          .then(() => new mirrorActions.LinkProfileSuccess(data.profile_id))
          .catch(e => new mirrorActions.LinkProfileFailure(e))
      }))

  /**
   * Link profile successful, routes towards list
   */
  @Effect()
  linkProfileSuccess$ = this.actions$
    .pipe(ofType(mirrorActions.MirrorActionTypes.LinkProfileSuccess))
    .pipe(map((action: mirrorActions.LinkProfileSuccess) => action.payload),
      map(profile_id => {
        return new routerActions.Go({
          path: [`/profile/${profile_id}/pincode-set`]
        })
      }))

  /**
   * Delete mirror using HTTP service
   */
  @Effect()
  delete$ = this.actions$
    .pipe(ofType(mirrorActions.MirrorActionTypes.Delete))
    .pipe(map((action: mirrorActions.Delete) => action.payload),
      switchMap((mirror: IMirror) => {
        return this.mirrorService.delete(mirror)
          .then(() => new mirrorActions.DeleteSuccess(mirror))
          .catch(e => new mirrorActions.DeleteFailure(e))
      }))

  /**
   * Delete mirror success effect
   */
  @Effect()
  deleteModuleSuccess$ = this.actions$.pipe(ofType(
    mirrorActions.MirrorActionTypes.DeleteSuccess))
    .pipe(
      map(() => {
        return new routerActions.Go({
          path: ['/mirrors']
        })
      })
    )

  /**
   * Install module on mirror effect
   */
  @Effect()
  installModule$ = this.actions$.pipe(ofType(
    mirrorActions.MirrorActionTypes.InstallModule))
    .pipe(map((action: mirrorActions.InstallModule) => action.payload),
      switchMap((data: IMIrrorInstallModule) => {
        return this.mirrorService.installModule(data)
          .then(() => new mirrorActions.InstallModuleSuccess())
          .catch(e => new mirrorActions.InstallModuleFailure(e))
      })
    )
}
