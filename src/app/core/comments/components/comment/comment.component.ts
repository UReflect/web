import { Component, Input, OnInit } from '@angular/core'
import { Observable }               from 'rxjs'
import * as fromUserStore           from '@core/users/store'
import { select, Store }            from '@ngrx/store'
import { IComment }                 from '@core/comments/models/comment'
import { IUser }                    from '@core/users/model/user.model'

@Component({
  selector: 'app-comment',
  templateUrl: 'comment.component.html'
})

export class CommentComponent implements OnInit {
  @Input() comment: IComment
  user$: Observable<IUser>

  constructor(private store: Store<fromUserStore.IUserState>) {
  }

  ngOnInit() {
    this.user$ = this.store.pipe(select(fromUserStore.getUserById, this.comment.user_id))
  }
}
