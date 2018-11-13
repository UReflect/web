import { Injectable }                               from '@angular/core'
import { select, Store }                            from '@ngrx/store'
import * as fromStore                               from '@core/users/store'
import { Observable, of }                           from 'rxjs'
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators'

/**
 * User guard
 * Checks if wanted user is in store, fetch it if not
 */
@Injectable()
export class UsersGuard {
  /**
   * Constructor
   * @param store User store
   */
  constructor(private store: Store<fromStore.IUserReducerState>) {
  }

  /**
   * Returns if the route can be accessed or not
   */
  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    )
  }

  /**
   * Initially used to get user if not available in store
   * Actually fetching all the time in order to avoid accessing an unavailable user
   */
  checkStore(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getUserLoaded)).pipe(
      tap(() => {
        this.store.dispatch(new fromStore.LoadAll)
      }),
      filter(loaded => loaded),
      take(1)
    )
  }
}
