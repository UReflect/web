import { Component, Input, OnInit } from '@angular/core'
import { Observable }               from 'rxjs'
import * as fromUserStore           from '@core/users/store'
import { select, Store }            from '@ngrx/store'
import { IComment }                 from '@core/comments/models/comment'
import { IUser }                    from '@core/users/model/user.model'

/**
 * Single comment component
 */
@Component({
  selector: 'app-comment',
  templateUrl: 'comment.component.html',
  styleUrls: ['comment.component.scss']
})

export class CommentComponent implements OnInit {
  /**
   * Comment @Input
   */
  @Input() comment: IComment
  /**
   * User Observable from store
   */
  user$: Observable<IUser>

  /**
   * Constructor
   * @param store User store
   */
  constructor(private store: Store<fromUserStore.IUserReducerState>) {
  }

  /**
   * Gets user data from store using selector
   */
  ngOnInit() {
    this.user$ = this.store.pipe(select(fromUserStore.getUserById, this.comment.user_id))
  }
}
