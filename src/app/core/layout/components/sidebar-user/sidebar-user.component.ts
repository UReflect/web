import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription }     from 'rxjs'
import { IUser }                        from '@core/auth/models/user'
import { select, Store }                from '@ngrx/store'
import { AuthService }                  from '@core/auth/services/auth.service'
import * as fromAuth                    from '@core/auth/store'

@Component({
  selector: 'app-sidebar-user',
  templateUrl: 'sidebar-user.component.html',
  styles: ['.pointer { cursor: pointer }']
})

export class SidebarUserComponent implements OnInit, OnDestroy {
  isAuthenticated$: Observable<boolean>
  user$: Observable<IUser>
  private subscriptions: Subscription

  constructor(private store: Store<fromAuth.IState>,
              private authService: AuthService) {
    this.subscriptions = new Subscription()
  }

  ngOnInit() {
    this.isAuthenticated$ = this.store.pipe(select(fromAuth.getIsAuthenticated))
    this.user$ = this.store.pipe(select(fromAuth.getLoggedUser))
  }

  signout() {
    this.subscriptions.add(this.authService.signout().subscribe(() => {
      this.store.dispatch(new fromAuth.SignOut())
    }, e => {
      if (e) {
        throw e
      }
    }))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }
}
