import { Injectable }                        from '@angular/core'
import { select, Store }                     from '@ngrx/store'
import * as fromStore                        from '@core/modules/store'
import * as fromAuth                         from '@core/auth/store'
import { Observable }                        from 'rxjs'
import { filter, map, switchMap, take, tap } from 'rxjs/operators'
import { ActivatedRouteSnapshot }            from '@angular/router'
import { IModule }                           from '@core/modules/models/module'
import { IUser }                             from '@core/users/model/user.model'

@Injectable()
export class ModuleOwnerGuard {
  constructor(private store: Store<fromStore.IModulesState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.id, 10)
        return this.hasModule(id) && this.isOwner(id)
      })
    )
  }

  isOwner(id: number): Observable<boolean> {
    return this.store.pipe(select(fromAuth.getLoggedUser))
      .pipe(map((user: IUser) => id === user.ID))
  }

  hasModule(id: number): Observable<boolean> {
    return this.store.pipe(select(fromStore.getModuleEntities))
      .pipe(
        map((entities: { [key: number]: IModule }) => !!entities[id]),
        take(1)
      )
  }

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
