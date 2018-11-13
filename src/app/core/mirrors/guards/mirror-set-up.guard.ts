import { Injectable }                        from '@angular/core'
import { select, Store }                     from '@ngrx/store'
import * as fromStore                        from '@core/mirrors/store'
import { Observable }                        from 'rxjs'
import { filter, map, switchMap, take, tap } from 'rxjs/operators'
import { ActivatedRouteSnapshot }            from '@angular/router'
import { IMirror }                           from '@core/mirrors/models'

/**
 * Checks if mirror is set up
 */
@Injectable()
export class MirrorSetUpGuard {
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
        return this.hasModule(id) && this.mirrorSetUp(id)
      })
    )
  }

  /**
   * Is mirror available in store
   * @param id Mirror ID
   */
  hasModule(id: number): Observable<boolean> {
    return this.store.pipe(select(fromStore.getSelectedMirror))
      .pipe(
        map((entities: { [key: number]: IMirror }) => !!entities[id]),
        take(1)
      )
  }

  /**
   * Load mirrors in store
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

  /**
   * Checks if mirror is set up
   * @param id Mirror ID
   */
  mirrorSetUp(id: number): Observable<boolean> {
    return this.store.pipe(select(fromStore.getMirrorById, id))
      .pipe(map((mirror: IMirror) => {
        return mirror.name.length > 0
          && mirror.location.length > 0
          && mirror.timezone.length > 0
      }))
  }
}
