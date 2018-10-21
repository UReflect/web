import { Injectable }                               from '@angular/core'
import { select, Store }                            from '@ngrx/store'
import * as fromStore                               from '../store'
import { Observable, of }                           from 'rxjs'
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators'
import { ActivatedRoute }                           from '@angular/router'
import * as fromRouter                              from '@store'

@Injectable()
export class CommentsGuard {
  constructor(private store: Store<fromStore.ICommentState>,
              private route: ActivatedRoute) {
  }

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    )
  }

  checkStore(): Observable<boolean> {
    return this.store.pipe(select(fromStore.getCommentLoaded)).pipe(
      tap(() => {
        return this.store.pipe(select(fromRouter.getRouterState)).subscribe(
          router => {
            this.store.dispatch(new fromStore.Load(router.state.params.id))
          }
        )
      }),
      filter(loaded => loaded),
      take(1)
    )
  }
}
