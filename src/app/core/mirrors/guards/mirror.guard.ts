import { Injectable }                        from '@angular/core'
import { Observable }                        from 'rxjs'
import { ActivatedRouteSnapshot }            from '@angular/router'
import { filter, map, switchMap, take, tap } from 'rxjs/operators'
import { select, Store }                     from '@ngrx/store'
import * as fromStore                        from '@core/mirrors/store'
import { IMirror }                           from '@core/mirrors/models'

/**
 * Single mirror guard
 */
@Injectable()
export class MirrorGuard {
  /**
   * Constructor
   * @param store Mirror store
   */
  constructor(private store: Store<fromStore.IMirrorReducerState>) {
  }

  /**
   * Checks if route can be activated
   * @param route Current route
   */
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.id, 10)
        return this.hasMirror(id)
      })
    )
  }

  /**
   * Checks if requested mirror exists in store
   * @param id Module ID
   */
  hasMirror(id: number): Observable<boolean> {
    return this.store.pipe(select(fromStore.getMirrorEntities))
      .pipe(
        map((entities: { [key: number]: IMirror }) => !!entities[id]),
        take(1)
      )
  }

  /**
   * Checks if any mirror is in store
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
