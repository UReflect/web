import { Component, OnInit } from '@angular/core'
import { Observable }        from 'rxjs'
import { select, Store }     from '@ngrx/store'
import * as fromRoot         from '@reducers'
import * as AuthActions      from '@core/auth/actions/auth.actions'

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html'
})

export class LayoutComponent implements OnInit {
  showSidenav$: Observable<boolean>

  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav))
  }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new AuthActions.SignOut())
  }
}
