import { Injectable }                      from '@angular/core'
import { AuthService }                     from '@core/auth/services/auth.service'
import * as fromAuth                       from '@core/auth/store/actions'
import * as AuthState                      from '@core/auth/store/reducers'
import { Store }                           from '@ngrx/store'
import { Actions, Effect, ofType }         from '@ngrx/effects'
import { catchError, map, switchMap, tap } from 'rxjs/operators'
import { Router }                          from '@angular/router'
import { of }                              from 'rxjs'
import * as fromUser                       from '@core/users/store/actions'
import * as fromMirror                     from '@core/mirrors/store/actions'
import * as fromProfile                    from '@core/profiles/store/actions'

/**
 * Auth process effects
 */
@Injectable()
export class AuthProcessEffects {
  /**
   * Constructor
   * @param actions$ Action received
   * @param authService Auth HTTP service
   * @param store Auth store
   * @param router Router
   */
  constructor(private actions$: Actions,
              private authService: AuthService,
              private store: Store<AuthState.IAuthReducerState>,
              private router: Router) {
  }

  /**
   * Signin effect
   */
  @Effect()
  signIn$ = this.actions$.pipe(ofType(fromAuth.AuthActionTypes.SignIn))
    .pipe(map((action: fromAuth.SignIn) => action.payload),
      switchMap(credentials => {
        return this.authService.signin(credentials)
          .pipe(
            map(response => {
              this.store.dispatch(new fromAuth.StoreLoggedUser(response.data.user))
              this.store.dispatch(new fromAuth.StoreToken(response.data.token))
              return new fromAuth.SignInSuccess
            }),
            catchError(e => {
              return of(new fromAuth.SignInFailure(e.error))
            })
          )
      })
    )

  /**
   * Signup effect
   */
  @Effect()
  signUp$ = this.actions$.pipe(ofType(fromAuth.AuthActionTypes.SignUp))
    .pipe(map((action: fromAuth.SignUp) => action.payload),
      switchMap(credentials => {
        return this.authService.signup(credentials)
          .pipe(
            map(response => {
              this.store.dispatch(new fromAuth.StoreLoggedUser(response.data.user))
              this.store.dispatch(new fromAuth.StoreToken(response.data.token))
              return new fromAuth.SignInSuccess
            }),
            catchError(e => {
              return of(new fromAuth.SignInFailure(e.error))
            })
          )
      })
    )

  /**
   * Signout effect
   */
  @Effect({ dispatch: false })
  signOut$ = this.actions$.pipe(ofType(fromAuth.AuthActionTypes.SignOut))
    .pipe(ofType(fromAuth.AuthActionTypes.SignOut),
      tap(() => {
        this.store.dispatch(new fromAuth.ClearLoggedUser)
        this.store.dispatch(new fromAuth.ClearToken)
        this.store.dispatch(new fromUser.ClearUsers)
        this.store.dispatch(new fromMirror.ClearMirrors)
        this.store.dispatch(new fromProfile.ClearProfiles)
        this.store.dispatch(new fromAuth.SignInRedirect)
      })
    )

  /**
   * Signin success effect
   */
  @Effect({ dispatch: false })
  signInSuccess$ = this.actions$.pipe(ofType(fromAuth.AuthActionTypes.SignInSuccess))
    .pipe(ofType(fromAuth.AuthActionTypes.SignInSuccess),
      tap(() => {
        this.router.navigate(['/'])
      })
    )

  /**
   * Signin redirect effect
   */
  @Effect({ dispatch: false })
  signInRedirect$ = this.actions$.pipe(ofType(fromAuth.AuthActionTypes.SignInRedirect))
    .pipe(ofType(fromAuth.AuthActionTypes.SignInRedirect),
      tap(() => {
        this.router.navigate(['/login'])
      })
    )

  /**
   * Password lost effect
   */
  @Effect()
  passwordLost$ = this.actions$.pipe(ofType(fromAuth.AuthActionTypes.PasswordLost))
    .pipe(map((action: fromAuth.PasswordLost) => action.payload),
      switchMap(credentials => {
        return this.authService.lost(credentials)
          .pipe(
            map(() => {
              this.store.dispatch(new fromAuth.SignInRedirect)
              return new fromAuth.PasswordLostSuccess
            }), catchError(e => {
              return of(new fromAuth.PasswordLostFailure(e.error))
            })
          )
      })
    )

  /**
   * Confirm mail effect
   */
  @Effect()
  confirmMail$ = this.actions$.pipe(ofType(fromAuth.AuthActionTypes.ConfirmMail))
    .pipe(map((action: fromAuth.ConfirmMail) => action.payload),
      switchMap(credentials => {
        return this.authService.confirmMail(credentials)
          .then(res => new fromAuth.ConfirmMailSuccess(res))
          .catch(e => new fromAuth.ConfirmMailFailure(e))
      })
    )

  /**
   * Reset password effect
   */
  @Effect()
  resetPassword$ = this.actions$.pipe(ofType(fromAuth.AuthActionTypes.ResetPassword))
    .pipe(map((action: fromAuth.ResetPassword) => action.payload),
      switchMap(credentials => {
        return this.authService.resetPassword(credentials)
          .then(response => new fromAuth.ResetPasswordSuccess(response))
          .catch(e => new fromAuth.ResetPasswordFailure(e))
      })
    )
}
