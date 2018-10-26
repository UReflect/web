import { Injectable }              from '@angular/core'
import * as commentActions         from '../actions'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { CommentService }          from '@core/comments/services'
import { map, switchMap }          from 'rxjs/operators'

@Injectable()
export class CommentEffects {
  constructor(private actions$: Actions,
              private commentService: CommentService) {
  }

  @Effect()
  loadCommentsByModuleId = this.actions$.pipe(ofType(commentActions.CommentActionTypes.Load))
    .pipe(
      map((action: commentActions.Load) => action.payload),
      switchMap(id => {
        return this.commentService.all(id)
          .then(comments => new commentActions.LoadSuccess(comments))
          .catch(e => new commentActions.LoadFailure(e))
      })
    )
}
