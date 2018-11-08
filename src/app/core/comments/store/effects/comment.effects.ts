import { Injectable }              from '@angular/core'
import * as commentActions         from '../actions'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { CommentService }          from '@core/comments/services'
import { map, switchMap }          from 'rxjs/operators'

/**
 * Comment effects
 */
@Injectable()
export class CommentEffects {
  /**
   * Constructor
   * @param actions$ Action received
   * @param commentService Comment HTTP service
   */
  constructor(private actions$: Actions,
              private commentService: CommentService) {
  }

  /**
   * Load comments by module id effect
   */
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
