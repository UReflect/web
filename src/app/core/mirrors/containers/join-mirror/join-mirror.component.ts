import { Component, OnInit } from '@angular/core'
import * as fromStore        from '@core/mirrors/store'
import { select, Store }     from '@ngrx/store'
import { Observable }        from 'rxjs'

/**
 * Join mirror component
 */
@Component({
  selector: 'app-join-mirror',
  templateUrl: 'join-mirror.component.html',
  styleUrls: ['join-mirror.component.scss']
})

export class JoinMirrorComponent implements OnInit {
  /**
   * Error from store
   */
  error$: Observable<any>

  /**
   * Constructor
   * @param store Mirror store
   */
  constructor(private store: Store<fromStore.IMirrorState>) {
  }

  /**
   * Clears error from previous actions
   * Init error Observable from store
   */
  ngOnInit() {
    this.store.dispatch(new fromStore.ClearError())
    this.error$ = this.store.pipe(select(fromStore.getMirrorError))
  }

  /**
   * Joins mirror using the provided join code
   * @param code Join code
   */
  codeHandler(code) {
    this.store.dispatch(new fromStore.Join({
      join_code: code
    }))
  }
}
