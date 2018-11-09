import { Injectable }                                                              from '@angular/core'
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable, throwError }                                                  from 'rxjs'
import { Router }                                                                  from '@angular/router'
import { catchError }                                                              from 'rxjs/operators'
import * as fromStore                                                              from '@core/auth/store'
import { Store }                                                                   from '@ngrx/store'

/**
 * Checks if the user is authenticated
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router,
              private store: Store<fromStore.IState>) {
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 && err.url.indexOf('/signin') <= 0) {
      this.store.dispatch(new fromStore.SignOut())
      return new Observable()
    }
    return throwError(err.error)
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone()
    return next.handle(authReq).pipe(
      catchError(e => this.handleAuthError(e))
    )
  }
}
