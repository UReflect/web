import { Injectable }      from '@angular/core'
import { Actions, Effect } from '@ngrx/effects'
import { Router }          from '@angular/router'
import * as RouterActions  from '@store/actions'
import { map, tap }        from 'rxjs/operators'
import { Location }        from '@angular/common'

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions,
              private router: Router,
              private location: Location) {
  }

  @Effect({ dispatch: false })
  navigate$ = this.actions$.ofType(RouterActions.RouterActionTypes.Go)
    .pipe(
      map((action: RouterActions.Go) => action.payload),
      tap(({ path, query: queryParams, extras }) => {
        this.router.navigate(path, { queryParams, ...extras })
      })
    )

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.ofType(RouterActions.RouterActionTypes.Back)
    .pipe(
      tap(() => this.location.back())
    )

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.ofType(RouterActions.RouterActionTypes.Forward)
    .pipe(
      tap(() => this.location.forward())
    )
}
