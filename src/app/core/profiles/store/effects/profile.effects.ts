import { Injectable }              from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { map, switchMap }          from 'rxjs/operators'
import { ProfileService }          from '@core/profiles/services/profile.service'
import * as profileActions         from '../actions'
import { IProfileCreate }          from '@core/profiles/models'

/**
 * Profile effects
 */
@Injectable()
export class ProfileEffects {
  /**
   * Profile effects constructor
   * @param actions$ Action triggered
   * @param profileService HTTP service
   */
  constructor(private actions$: Actions,
              private profileService: ProfileService) {
  }

  /**
   * Load all profiles using HTTP service
   */
  @Effect()
  loadMineProfiles$ = this.actions$.pipe(ofType(profileActions.ProfileActionTypes.LoadMine))
    .pipe(
      switchMap(() => {
        return this.profileService.mine()
          .then(profiles => new profileActions.LoadMineSuccess(profiles))
          .catch(e => new profileActions.LoadMineFailure(e))
      })
    )

  /**
   * Creates profile using HTTP service
   */
  @Effect()
  create$ = this.actions$.pipe(ofType(profileActions.ProfileActionTypes.Create))
    .pipe(map((action: profileActions.Create) => action.payload),
      switchMap((data: IProfileCreate) => {
        return this.profileService.create(data)
          .then(profile => new profileActions.CreateSuccess(profile))
          .catch(e => new profileActions.CreateFailure(e))
      }))
}
