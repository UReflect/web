import { Component, OnInit } from '@angular/core'
import { Observable }        from 'rxjs'
import { select, Store }     from '@ngrx/store'
import * as fromAuth         from '@core/auth/store'
import { IUser }             from '@core/users/model/user.model'

/**
 * Sidebar component
 */
@Component({
  selector: 'app-sidebar-user',
  templateUrl: 'sidebar-user.component.html',
  styles: ['.pointer { cursor: pointer }']
})

export class SidebarUserComponent implements OnInit {
  /**
   * isAuthenticated Observable from store
   */
  isAuthenticated$: Observable<boolean>
  /**
   * user Observable from store
   */
  user$: Observable<IUser>

  /**
   * Constructor
   * @param store Auth store
   */
  constructor(private store: Store<fromAuth.IState>) {
  }

  /**
   * Init isAuthenticated and user using store selectors
   */
  ngOnInit() {
    this.isAuthenticated$ = this.store.pipe(select(fromAuth.getIsAuthenticated))
    this.user$ = this.store.pipe(select(fromAuth.getLoggedUser))
  }

  /**
   * Signout user
   */
  signout() {
    this.store.dispatch(new fromAuth.SignOut())
  }
}
