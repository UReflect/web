import { Injectable }                   from '@angular/core'
import { Observable }                   from 'rxjs'
import { select, Store }                from '@ngrx/store'
import * as fromStore                   from '../store'
import { filter, switchMap, take, tap } from 'rxjs/operators'

/**
 * Mirrors Guards
 * Gets all user's mirrors
 */
@Injectable()
export class MirrorsGuard {
  /**
   * Constructor
   * @param store Mirror store
   */
  constructor(private store: Store<fromStore.IMirrorReducerState>) {
  }

  /**
   * Activates if mirrors are loaded
   */
  canActivate(): Observable<boolean> {
    return this.checkStore()
  }

  /**
   * Loads mirrors
   */
  checkStore(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getMirrorLoaded))
      .pipe(
        tap(() => {
          this.store.dispatch(new fromStore.LoadMine())
        }),
        filter(loaded => loaded),
        take(1)
      )
  }
}
