import { Injectable }                      from '@angular/core'
import { AuthService }                     from '@core/auth/services/auth.service'
import * as fromAuth                       from '@core/auth/store/actions'
import * as AuthState                      from '@core/auth/store/reducers'
import { Store }                           from '@ngrx/store'
import { Actions, Effect, ofType }         from '@ngrx/effects'
import { catchError, map, switchMap, tap } from 'rxjs/operators'
import { Router }                          from '@angular/router'
import { from, of }                        from 'rxjs'

@Injectable()
export class AuthProcessEffects {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private store: Store<AuthState.IState>,
              private router: Router) {
  }

  @Effect()
  signIn$ = this.actions$.ofType(fromAuth.AuthActionTypes.SignIn)
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

  @Effect()
  signUp$ = this.actions$.ofType(fromAuth.AuthActionTypes.SignUp)
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

  @Effect({ dispatch: false })
  signOut$ = this.actions$.ofType(fromAuth.AuthActionTypes.SignOut)
    .pipe(ofType(fromAuth.AuthActionTypes.SignOut),
      tap(() => {
        this.store.dispatch(new fromAuth.ClearLoggedUser)
        this.store.dispatch(new fromAuth.ClearToken)
        this.store.dispatch(new fromAuth.SignInRedirect)
      })
    )

  @Effect({ dispatch: false })
  signInSuccess$ = this.actions$.ofType(fromAuth.AuthActionTypes.SignInSuccess)
    .pipe(ofType(fromAuth.AuthActionTypes.SignInSuccess),
      tap(() => {
        this.router.navigate(['/modules'])
      })
    )

  @Effect({ dispatch: false })
  signInRedirect$ = this.actions$.ofType(fromAuth.AuthActionTypes.SignInRedirect)
    .pipe(ofType(fromAuth.AuthActionTypes.SignInRedirect),
      tap(() => {
        this.router.navigate(['/login'])
      })
    )

  @Effect()
  passwordLost = this.actions$.ofType(fromAuth.AuthActionTypes.PasswordLost)
    .pipe(map((action: fromAuth.PasswordLost) => action.payload),
      switchMap(credentials => {
        return this.authService.lost(credentials)
          .pipe(
            map(() => {
              this.store.dispatch(new fromAuth.SignInRedirect)
              return new fromAuth.PasswordLostSuccess
            }),
            catchError(e => {
              return of(new fromAuth.PasswordLostFailure(e.error))
            })
          )
      })
    )
}
