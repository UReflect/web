import { Injectable }                               from '@angular/core'
import { select, Store }                            from '@ngrx/store'
import * as fromStore                               from '../store'
import { Observable, of }                           from 'rxjs'
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators'
import * as fromRouter                              from '@store'

/**
 * Comments guard
 */
@Injectable()
export class CommentsGuard {
  /**
   * Constructor
   * @param store Comment store
   */
  constructor(private store: Store<fromStore.ICommentState>) {
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
   * Checks if comments are in store
   */
  checkStore(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getCommentLoaded)).pipe(
      tap(() => {
        return this.store.pipe(select(fromRouter.getRouterState)).subscribe(
          router => {
            if (router.state.params && router.state.params.id) {
              this.store.dispatch(new fromStore.Load(router.state.params.id))
            }
          }
        )
      }),
      filter(loaded => loaded),
      take(1)
    )
  }
}
