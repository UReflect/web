import { Injectable }                        from '@angular/core'
import { select, Store }                     from '@ngrx/store'
import * as fromStore                        from '@core/modules/store'
import { Observable }                        from 'rxjs'
import { filter, map, switchMap, take, tap } from 'rxjs/operators'
import { ActivatedRouteSnapshot }            from '@angular/router'
import { IModule }                           from '@core/modules/models/module'

/**
 * Single Module guard
 */
@Injectable()
export class ModuleGuard {
  /**
   * Constructor
   * @param store Module store
   */
  constructor(private store: Store<fromStore.IModuleReducerState>) {
  }

  /**
   * Checks if route can be activated
   * @param route Current route
   */
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.id, 10)
        return this.hasModule(id)
      })
    )
  }

  /**
   * Checks if requested module exists in store
   * @param id Module ID
   */
  hasModule(id: number): Observable<boolean> {
    return this.store.pipe(select(fromStore.getModuleEntities))
      .pipe(
        map((entities: { [key: number]: IModule }) => !!entities[id]),
        take(1)
      )
  }

  /**
   * Checks if any module is in store
   */
  checkStore(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getModuleLoaded))
      .pipe(
        tap(() => {
          this.store.dispatch(new fromStore.LoadAll())
        }),
        filter(loaded => loaded),
        take(1)
      )
  }
}
