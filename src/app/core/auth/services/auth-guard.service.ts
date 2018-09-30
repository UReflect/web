import { Injectable }    from '@angular/core'
import { select, Store } from '@ngrx/store'
import { map, take }     from 'rxjs/operators'
import * as fromAuth     from '@core/auth/store'

@Injectable()
export class AuthGuardService {
  constructor(private store: Store<fromAuth.IState>) {
  }

  canActivate() {
    return this.store.pipe(select(fromAuth.getIsAuthenticated),
      map(authenticated => {
        if (!authenticated) {
          this.store.dispatch(new fromAuth.SignInRedirect())
          return false
        }
        return true
      }),
      take(1)
    )
  }
}
