import { Component, OnDestroy, OnInit } from '@angular/core'
import { select, Store }                from '@ngrx/store'
import * as fromRoot                    from '@reducers'
import { Observable, Subscription }     from 'rxjs'
import * as fromAuthProcess             from '@core/auth/reducers/auth-process.reducer'
import * as fromLayout                  from '@core/layout/reducers/layout.reducer'
import * as LayoutActions               from '@core/layout/actions/layout.actions'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  showSidenav$: Observable<boolean>
  isAuthenticated$: Observable<boolean>
  private subscriptions: Subscription = new Subscription()

  constructor(private store: Store<fromRoot.IState>) {
  }

  ngOnInit() {
    this.showSidenav$ = this.store.pipe(
      select(fromLayout.getShowSidenav))
    this.isAuthenticated$ = this.store.pipe(
      select(fromAuthProcess.getIsAuthenticated))
  }

  toggleSidebar() {
    this.store.dispatch(new LayoutActions.ToggleSidenav())
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }
}
