import { Component, OnInit } from '@angular/core'
import { Observable }        from 'rxjs'
import { select, Store }     from '@ngrx/store'
import * as fromLayout       from '@core/layout/store'
import * as fromAuthProcess  from '@core/auth/store'

/**
 * App component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * Sidenav status Observable from store
   */
  showSidenav$: Observable<boolean>
  /**
   * Authentication status Observable from store
   */
  isAuthenticated$: Observable<boolean>

  /**
   * Constructor
   * @param store Layout store
   */
  constructor(private store: Store<fromLayout.ILayoutReducerState>) {
  }

  /**
   * Gets sidenav and authentication status from store
   */
  ngOnInit() {
    this.showSidenav$ = this.store.pipe(select(fromLayout.getShowSidenav))
    this.isAuthenticated$ = this.store.pipe(select(fromAuthProcess.getIsAuthenticated))
  }
}
