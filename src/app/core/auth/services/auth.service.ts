import { Injectable }                     from '@angular/core'
import { HttpClient }                     from '@angular/common/http'
import { environment }                    from '@env/environment'
import { Observable }                     from 'rxjs'
import { IAuthentication, IRegistration } from '@core/auth/models/user'
import * as fromAuth                      from '@core/auth/store'
import { select, Store }                  from '@ngrx/store'

@Injectable()
export class AuthService {
  private url: string
  private authHeader: {}
  private token$: Observable<string>

  constructor(private http: HttpClient,
              private store: Store<fromAuth.IState>) {
    this.url = environment.apiUrl
    this.token$ = this.store.pipe(select(fromAuth.getToken))
    this.getToken().then(() => {
    }).catch(e => {
      if (e) {
        throw e
      }
    })
  }

  getToken(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.token$.subscribe(token => {
        this.authHeader = {
          'x-access-token': `${token}`
        }
        resolve()
      }, e => {
        if (e) {
          reject(e)
        }
      })
    })
  }

  signin(credentials: IAuthentication): Observable<any> {
    return this.http.post(`${this.url}/signin`, {
      email: credentials.email,
      password: credentials.password
    })
  }

  signup(credentials: IRegistration): Observable<any> {
    return this.http.post(`${this.url}/signup`, {
      email: credentials.email,
      password: credentials.password,
      name: credentials.name
    })
  }

  signout(): Observable<any> {
    return new Observable<any>(observer => {
      this.getToken().then(() => {
        observer.next(this.http.post(`${this.url}/signout`, {}, {
          headers: { ...this.authHeader }
        }))
        observer.complete()
      }).catch(e => {
        if (e) {
          throw e
        }
      })
    })
  }
}
