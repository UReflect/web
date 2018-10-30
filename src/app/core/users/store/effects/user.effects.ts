import * as userActions            from '@core/users/store/actions'
import { Injectable }              from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { UserService }             from '@core/users/services'
import { switchMap }               from 'rxjs/operators'

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              private userService: UserService) {
  }

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
