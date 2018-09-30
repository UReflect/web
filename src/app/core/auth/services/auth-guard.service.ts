import { Injectable }    from '@angular/core'
import { select, Store } from '@ngrx/store'
import { map, take }     from 'rxjs/operators'
import * as fromAuth     from '@core/auth/store'
import { Router }        from '@angular/router'

@Injectable()
export class AuthGuardService {
  constructor(private store: Store<fromAuth.IState>,
              private router: Router) {
  }

  canActivate() {
    return this.store.pipe(select(fromAuth.getIsAuthenticated),
      map(authenticated => {
        if (!authenticated) {
          this.store.dispatch(new fromAuth.SignInRedirect())
          this.router.navigate(['/login'])
          return false
        }
        return true
      }),
      take(1)
    )
  }
}
