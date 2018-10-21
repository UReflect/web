import { Component, Input, OnInit } from '@angular/core'
import * as fromStore               from '../../store'
import { select, Store }            from '@ngrx/store'
import { Observable }               from 'rxjs'
import { IComment }                 from '@core/comments/models/comment'

@Component({
  selector: 'app-comments',
  templateUrl: 'comments.component.html'
})

export class CommentsComponent implements OnInit {
  @Input() moduleId: number
  comments$: Observable<IComment[]>

  constructor(private store: Store<fromStore.ICommentState>) {
  }

  ngOnInit() {
    this.comments$ = this.store.pipe(select(fromStore.getCommentsByModuleID, this.moduleId))
  }
}
