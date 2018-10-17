import * as userActions   from '@core/users/store/actions'
import { Injectable }      from '@angular/core'
import { Actions, Effect } from '@ngrx/effects'
import { UserService }     from '@core/users/services'
import { switchMap }       from 'rxjs/operators'
import { of }              from 'rxjs'

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              private userService: UserService) {
  }

  @Effect()
  loadUsers$ = this.actions$.ofType(userActions.UserActionTypes.LoadAll)
    .pipe(
      switchMap(() => {
        return this.userService.all()
          .then(users => new userActions.LoadAllSuccess(users))
          .catch(e => of(new userActions.LoadAllFailure(e)))
      })
    )
}