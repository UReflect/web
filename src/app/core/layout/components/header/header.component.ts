import { Component, OnInit } from '@angular/core'
import { select, Store }     from '@ngrx/store'
import * as fromRoot         from '@store'
import { Observable }        from 'rxjs'
import * as fromAuthProcess  from '@core/auth/store/reducers/auth-process.reducer'
import * as fromLayout       from '@core/layout/store/reducers/layout.reducer'
import * as LayoutActions    from '@core/layout/store/actions/layout.actions'

/**
 * Header component
 */
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
  /**
   * Sidenav Observable status from store
   */
  showSidenav$: Observable<boolean>
  /**
   * isAuthenticated Observable from store
   */
  isAuthenticated$: Observable<boolean>

  /**
   * Constructor
   * @param store App store
   */
  constructor(private store: Store<fromRoot.IAppState>) {
  }

  /**
   * Gets sidenav status and isAuthenticated Observables from store
   */
  ngOnInit() {
    this.showSidenav$ = this.store.pipe(
      select(fromLayout.getShowSidenav))
    this.isAuthenticated$ = this.store.pipe(
      select(fromAuthProcess.getIsAuthenticated))
  }

  /**
   * Toggles sidenav state
   */
  toggleSidebar() {
    this.store.dispatch(new LayoutActions.ToggleSidenav())
  }
}
