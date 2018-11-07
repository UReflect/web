import { Component, OnInit } from '@angular/core'
import * as fromStore        from '@core/mirrors/store'
import { select, Store }     from '@ngrx/store'
import { Observable }        from 'rxjs'

@Component({
  selector: 'app-join-mirror',
  templateUrl: 'join-mirror.component.html',
  styleUrls: ['join-mirror.component.scss']
})

export class JoinMirrorComponent implements OnInit {
  error$: Observable<any>

  constructor(private store: Store<fromStore.IMirrorState>) {
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.ClearError())
    this.error$ = this.store.pipe(select(fromStore.getMirrorError))
  }

  codeHandler(code) {
    this.store.dispatch(new fromStore.Join({
      join_code: code
    }))
  }
}
