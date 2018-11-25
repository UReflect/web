import { Injectable }        from '@angular/core'
import { select, Store }     from '@ngrx/store'
import * as fromStore        from '@core/profiles/store'
import { Observable }        from 'rxjs'
import { filter, take, tap } from 'rxjs/operators'

/**
 * Multiple profiles guard
 */
@Injectable()
export class ProfilesGuard {
  /**
   * Constructor
   * @param store Profile store
   */
  constructor(private store: Store<fromStore.IProfileReducerState>) {
  }

  /**
   * Activates if profiles are loaded
   */
  canActivate(): Observable<boolean> {
    return this.checkStore()
  }

  /**
   * Loads profiles
   */
  checkStore(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getProfileLoaded))
      .pipe(
        tap(() => {
          this.store.dispatch(new fromStore.LoadMine())
        }),
        filter(loaded => loaded),
        take(1)
      )
  }
}
