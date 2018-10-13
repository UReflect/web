import { Injectable }                                    from '@angular/core'
import { HttpClient }                                    from '@angular/common/http'
import { environment }                                   from '@env/environment'
import { Observable }                                    from 'rxjs'
import { IAuthentication, IPasswordLost, IRegistration } from '@core/auth/models/auth.model'
import * as fromAuth                                     from '@core/auth/store/selectors'
import * as AuthState                                    from '@core/auth/store/reducers'
import { select, Store }                                 from '@ngrx/store'

@Injectable()
export class AuthService {
  private url: string
  private token$: Observable<string>

  constructor(private http: HttpClient,
              private store: Store<AuthState.IState>) {
    this.url = environment.apiUrl
    this.token$ = this.store.pipe(select(fromAuth.getToken))
  }

  authHeader(): Promise<any> {
    return new Promise(resolve => {
      this.token$.subscribe(token => {
        resolve({ 'x-access-token': token })
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

  async signout(): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/signout`, {}, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }

  lost(credentials: IPasswordLost): Observable<any> {
    return this.http.post(`${this.url}/lost`, {
      email: credentials.email
    })
  }
}
