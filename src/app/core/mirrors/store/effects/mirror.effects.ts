import { Injectable }                        from '@angular/core'
import { Actions, Effect, ofType }           from '@ngrx/effects'
import { map, switchMap }                    from 'rxjs/operators'
import { MirrorService }                     from '@core/mirrors/services/mirror.service'
import * as mirrorActions                    from '../actions'
import { IMIrrorLinkProfile, IMirrorUpdate } from '@core/mirrors/models'
import * as routerActions                    from '@store/actions'

/**
 * Mirror effects
 */
@Injectable()
export class MirrorEffects {
  /**
   * Mirror effects constructor
   * @param actions$ Action triggered
   * @param mirrorService HTTP service
   */
  constructor(private actions$: Actions,
              private mirrorService: MirrorService) {
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
  update$ = this.actions$.pipe(ofType(mirrorActions.MirrorActionTypes.Update))
    .pipe(map((action: mirrorActions.Update) => action.payload),
      switchMap((mirror: IMirrorUpdate) => {
        return this.mirrorService.update(mirror)
          .then(updatedMirror => new mirrorActions.UpdateSuccess(updatedMirror))
          .catch(e => new mirrorActions.UpdateFailure(e))
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
   * Link profile to mirror using HTTP service
   */
  @Effect()
  linkProfileSuccess = this.actions$
    .pipe(ofType(mirrorActions.MirrorActionTypes.LinkProfileSuccess))
    .pipe(map((action: mirrorActions.LinkProfile) => action.payload),
      map((data: IMIrrorLinkProfile) => {
        this.mirrorService.linkProfile(data)
          .then(() => new mirrorActions.LinkProfileSuccess())
          .catch(e => new mirrorActions.LinkProfileFailure(e))
      }))
}
