import { Component, OnDestroy, OnInit } from '@angular/core'
import { select, Store }                from '@ngrx/store'
import * as fromRoot                    from '@reducers'
import { Observable, Subscription }     from 'rxjs'
import * as LayoutActions               from '@core/layout/actions/layout.actions'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  showSidenav$: Observable<boolean>
  private isOpen: boolean
  private subscriptions: Subscription = new Subscription()

  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav))
  }

  ngOnInit() {
    this.subscriptions.add(this.showSidenav$.subscribe(response => {
      this.isOpen = response
    }))
  }

  toggleSidebar() {
    this.isOpen
      ? this.store.dispatch(new LayoutActions.CloseSidenav())
      : this.store.dispatch(new LayoutActions.OpenSidenav())
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }
}
