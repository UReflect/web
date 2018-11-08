import { Component, Input, OnInit } from '@angular/core'
import * as fromStore               from '../../store'
import { select, Store }            from '@ngrx/store'
import { Observable }               from 'rxjs'
import { IComment }                 from '@core/comments/models/comment'

/**
 * Comments component
 */
@Component({
  selector: 'app-comments',
  templateUrl: 'comments.component.html',
  styleUrls: ['comments.component.scss']
})

export class CommentsComponent implements OnInit {
  /**
   * Module ID @Input
   */
  @Input() moduleId: number
  /**
   * Comments Observable from store
   */
  comments$: Observable<IComment[]>

  /**
   * Constructor
   * @param store Comment store
   */
  constructor(private store: Store<fromStore.ICommentState>) {
  }

  /**
   * Gets comments from store selector
   */
  ngOnInit() {
    this.comments$ = this.store.pipe(select(fromStore.getCommentsByModuleID, this.moduleId))
  }
}
