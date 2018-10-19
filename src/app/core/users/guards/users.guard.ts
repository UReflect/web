import { Injectable }                               from '@angular/core'
import { select, Store }                            from '@ngrx/store'
import * as fromStore                               from '@core/users/store'
import { Observable, of }                           from 'rxjs'
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators'

@Injectable()
export class UsersGuard {
  constructor(private store: Store<fromStore.IUserState>) {
  }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    )
  }

  checkStore(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getUserLoaded)).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadAll)
        }
      }),
      filter(loaded => loaded),
      take(1)
    )
  }
}
