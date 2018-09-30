import { Injectable }    from '@angular/core'
import { Store } from '@ngrx/store'
import * as fromAuth     from '@core/auth/reducers/auth-process.reducer'
import { Observable }    from 'rxjs'

@Injectable()
export class AuthGuardService {
  constructor() {
  }

  canActivate() {
    // return this.store.pipe(select(fromAuth.getIsAuthenticated),
    //   map(authenticated => {
    //     if (!authenticated) {
    //       this.store.dispatch(new AuthActions.SignInRedirect())
    //       return false
    //     }
    //     return true
    //   }),
    //   take(1)
    // )
  }
}
