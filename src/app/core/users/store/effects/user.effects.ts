import * as userActions            from '@core/users/store/actions'
import { Injectable }              from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { UserService }             from '@core/users/services'
import { switchMap }               from 'rxjs/operators'

/**
 * User effects
 */
@Injectable()
export class UserEffects {
  /**
   * User effects constructor
   * @param actions$ Action triggered
   * @param userService HTTP service for user
   */
  constructor(private actions$: Actions,
              private userService: UserService) {
  }

  /**
   * Load all users using HTTP service
   */
  @Effect()
  loadUsers$ = this.actions$.pipe(ofType(userActions.UserActionTypes.LoadAll))
    .pipe(
      switchMap(() => {
        return this.userService.all()
          .then(users => new userActions.LoadAllSuccess(users))
          .catch(e => new userActions.LoadAllFailure(e))
      })
    )
}
