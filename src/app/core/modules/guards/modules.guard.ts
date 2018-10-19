import { Injectable }                               from '@angular/core'
import { select, Store }                            from '@ngrx/store'
import * as fromStore                               from '@core/modules/store'
import { Observable, of }                           from 'rxjs'
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators'

@Injectable()
export class ModulesGuard {
  constructor(private store: Store<fromStore.IModulesState>) {
  }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    )
  }

  checkStore(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getModuleLoaded)).pipe(
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
