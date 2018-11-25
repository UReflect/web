import { Injectable }                               from '@angular/core'
import { select, Store }                            from '@ngrx/store'
import * as fromStore                               from '@core/modules/store'
import { Observable, of }                           from 'rxjs'
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators'

/**
 * Multiple modules guard
 */
@Injectable()
export class ModulesGuard {
  /**
   * Constructor
   * @param store Module store
   */
  constructor(private store: Store<fromStore.IModuleReducerState>) {
  }

  /**
   * Checks if route can be activated
   */
  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    )
  }

  /**
   * Checks if module is available
   */
  checkStore(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getModuleLoaded)).pipe(
      tap(() => {
        this.store.dispatch(new fromStore.LoadAll)
      }),
      filter(loaded => loaded),
      take(1)
    )
  }
}
