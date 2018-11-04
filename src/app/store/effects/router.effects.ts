import { Injectable }              from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Router }                  from '@angular/router'
import * as RouterActions          from '@store/actions'
import { map, tap }                from 'rxjs/operators'
import { Location }                from '@angular/common'

/**
 * Effects for router store
 */
@Injectable()
export class RouterEffects {
  /**
   * Constructor for router effects
   * @param actions$ Actions received
   * @param router Router data
   * @param location Location of the page
   */
  constructor(private actions$: Actions,
              private router: Router,
              private location: Location) {
  }

  /**
   * Effect for Go action
   * Takes to user to the targeted route
   */
  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(ofType(RouterActions.RouterActionTypes.Go))
    .pipe(
      map((action: RouterActions.Go) => action.payload),
      tap(({ path, query: queryParams, extras }) => {
        this.router.navigate(path, { queryParams, ...extras })
      })
    )

  /**
   * Effect for the Back action
   * Takes to user to the previous route
   */
  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(ofType(RouterActions.RouterActionTypes.Back))
    .pipe(
      tap(() => this.location.back())
    )

  /**
   * Effect for the Forward action
   * Takes to user to the next route
   */
  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(ofType(RouterActions.RouterActionTypes.Forward))
    .pipe(
      tap(() => this.location.forward())
    )
}
