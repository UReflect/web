import { Injectable }    from '@angular/core'
import { select, Store } from '@ngrx/store'
import { map, take }     from 'rxjs/operators'
import * as fromAuth     from '../store/index'
import { Router }        from '@angular/router'

/**
 * Auth guard
 */
@Injectable()
export class AuthGuardService {
  /**
   * Constructor
   * @param store Auth store
   * @param router Router
   */
  constructor(private store: Store<fromAuth.IAuthReducerState>,
              private router: Router) {
  }

  /**
   * Check if route can be activated
   */
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
