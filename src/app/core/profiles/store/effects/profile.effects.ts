import { Injectable }                            from '@angular/core'
import { Actions, Effect, ofType }               from '@ngrx/effects'
import { map, switchMap }                        from 'rxjs/operators'
import { ProfileService }                        from '@core/profiles/services/profile.service'
import * as profileActions                       from '../actions'
import { IProfile, IProfileCreate, IProfilePIN } from '@core/profiles/models'
import * as routerActions                        from '@store'

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
      })
    )

  /**
   * Create success effect
   */
  @Effect()
  createSuccess = this.actions$.pipe(ofType(profileActions.ProfileActionTypes.CreateSuccess))
    .pipe(map((action: profileActions.CreateSuccess) => action.payload),
      map((profile: IProfile) => {
        return new routerActions.Go({
          path: [`/profile/${profile.ID}/edit`]
        })
      }))

  /**
   * Updates profile PIN using HTTP service
   */
  @Effect()
  updatePin$ = this.actions$.pipe(ofType(profileActions.ProfileActionTypes.UpdatePin))
    .pipe(map((action: profileActions.UpdatePin) => action.payload),
      switchMap((data: IProfilePIN) => {
        return this.profileService.updatePin(data)
          .then(() => new profileActions.UpdatePinSuccess(data.ID))
          .catch(e => new profileActions.UpdatePinFailure(e))
      })
    )

  /**
   * Updates profile using HTTP service
   */
  @Effect()
  update$ = this.actions$.pipe(ofType(profileActions.ProfileActionTypes.Update))
    .pipe(map((action: profileActions.Update) => action.payload),
      switchMap((profile: IProfile) => {
        return this.profileService.update(profile)
          .then(updatedProfile => new profileActions.UpdateSuccess(updatedProfile))
          .catch(e => new profileActions.UpdateFailure(e))
      })
    )

  /**
   * Deletes profile using HTTP service
   */
  @Effect()
  delete$ = this.actions$.pipe(ofType(profileActions.ProfileActionTypes.Delete))
    .pipe(map((action: profileActions.Delete) => action.payload),
      switchMap((profile: IProfile) => {
        return this.profileService.delete(profile)
          .then(() => new profileActions.DeleteSuccess(profile))
          .catch(e => new profileActions.DeleteFailure(e))
      })
    )

  /**
   * Route user to updated profile
   */
  @Effect()
  updatePinSuccess$ = this.actions$.pipe(ofType(profileActions.ProfileActionTypes.UpdatePinSuccess))
    .pipe(map((action: profileActions.UpdatePinSuccess) => action.payload),
      map(profile_id => {
        return new routerActions.Go({
          path: [`/profile/${profile_id}/edit`]
        })
      })
    )

  /**
   * Delete profile success effect
   */
  @Effect()
  deleteModuleSuccess$ = this.actions$.pipe(ofType(
    profileActions.ProfileActionTypes.DeleteSuccess))
    .pipe(
      map(() => {
        return new routerActions.Go({
          path: ['/profiles']
        })
      })
    )

}
