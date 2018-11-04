import { Injectable }              from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { switchMap }               from 'rxjs/operators'
import { ProfileService }          from '@core/profiles/services/profile.service'
import * as profileActions         from '../actions'

/**
 * Profile effects
 */
@Injectable()
export class ProfileEffects {
  private profileActions: any

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
  loadMineProfiles$ = this.actions$.pipe(ofType(this.profileActions.ProfileActionTypes.LoadMine))
    .pipe(
      switchMap(() => {
        return this.profileService.mine()
          .then(profiles => new profileActions.LoadMineSuccess(profiles))
          .catch(e => new profileActions.LoadMineFailure(e))
      })
    )
}
