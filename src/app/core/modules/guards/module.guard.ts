import { Injectable }                        from '@angular/core'
import { Store }                             from '@ngrx/store'
import * as fromStore                        from '@core/modules/store'
import { Observable }                        from 'rxjs'
import { filter, map, switchMap, take, tap } from 'rxjs/operators'
import { ActivatedRouteSnapshot }            from '@angular/router'
import { IModule }                           from '@core/modules/models/module'

@Injectable()
export class ModuleGuard {
  constructor(private store: Store<fromStore.IModulesState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.id, 10)
        return this.hasModule(id)
      })
    )
  }

  hasModule(id: number): Observable<boolean> {
    return this.store
      .select(fromStore.getModuleEntities)
      .pipe(
        map((entities: { [key: number]: IModule }) => !!entities[id]),
        take(1)
      )
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getModuleLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadAll())
        }
      }),
      filter(loaded => loaded),
      take(1)
    )
  }
}