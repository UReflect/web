import { Injectable }                        from '@angular/core'
import { select, Store }                     from '@ngrx/store'
import * as fromStore                        from '@core/profiles/store'
import { ActivatedRouteSnapshot }            from '@angular/router'
import { Observable }                        from 'rxjs'
import { filter, map, switchMap, take, tap } from 'rxjs/operators'
import { IProfile }                          from '@core/profiles/models'

/**
 * Single profile guard
 */
@Injectable()
export class ProfileGuard {
  /**
   * Constructor
   * @param store Profile store
   */
  constructor(private store: Store<fromStore.IProfileReducerState>) {
  }

  /**
   * Checks if route can be activated
   * @param route Current route
   */
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.id, 10)
        return this.hasProfile(id)
      })
    )
  }

  /**
   * Checks if requested profile exists in store
   * @param id Module ID
   */
  hasProfile(id: number): Observable<boolean> {
    return this.store.pipe(select(fromStore.getProfileEntities))
      .pipe(
        map((entities: { [key: number]: IProfile }) => !!entities[id]),
        take(1)
      )
  }

  /**
   * Checks if any profile is in store
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
