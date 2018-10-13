import { Component, OnInit } from '@angular/core'
import { Observable }        from 'rxjs'
import { select, Store }     from '@ngrx/store'
import * as fromAuth         from '@core/auth/store'
import { IUser }             from '@core/user/model/user.model'

@Component({
  selector: 'app-sidebar-user',
  templateUrl: 'sidebar-user.component.html',
  styles: ['.pointer { cursor: pointer }']
})

export class SidebarUserComponent implements OnInit {
  isAuthenticated$: Observable<boolean>
  user$: Observable<IUser>

  constructor(private store: Store<fromAuth.IState>) {
  }

  ngOnInit() {
    this.isAuthenticated$ = this.store.pipe(select(fromAuth.getIsAuthenticated))
    this.user$ = this.store.pipe(select(fromAuth.getLoggedUser))
  }

  signout() {
    this.store.dispatch(new fromAuth.SignOut())
  }
}
