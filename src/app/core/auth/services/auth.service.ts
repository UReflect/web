import { Injectable }                                    from '@angular/core'
import { HttpClient }                                    from '@angular/common/http'
import { environment }                                   from '@env/environment'
import { Observable }                                    from 'rxjs'
import { IAuthentication, IPasswordLost, IRegistration } from '@core/auth/models/auth.model'
import * as fromAuth                                     from '@core/auth/store/selectors'
import * as AuthState                                    from '@core/auth/store/reducers'
import { select, Store }                                 from '@ngrx/store'

/**
 * Auth HTTP service
 */
@Injectable()
export class AuthService {
  /**
   * API Url
   */
  private url: string
  /**
   * Token Observable from store
   */
  private token$: Observable<string>

  /**
   * Constructor
   * @param http HTTP Client used to make HTTP queries
   * @param store Auth store
   */
  constructor(private http: HttpClient,
              private store: Store<AuthState.IState>) {
    this.url = environment.apiUrl
    this.token$ = this.store.pipe(select(fromAuth.getToken))
  }

  /**
   * Async method to get token from auth store
   */
  authHeader(): Promise<any> {
    return new Promise(resolve => {
      this.token$.subscribe(token => {
        resolve({ 'x-access-token': token })
      })
    })
  }

  /**
   * Signs in user
   * @param credentials Credentials used to sign in user
   */
  signin(credentials: IAuthentication): Observable<any> {
    return this.http.post(`${this.url}/signin`, {
      email: credentials.email,
      password: credentials.password
    })
  }

  /**
   * Signs up user
   * @param credentials Credentials used to sign up user
   */
  signup(credentials: IRegistration): Observable<any> {
    return this.http.post(`${this.url}/signup`, {
      email: credentials.email,
      password: credentials.password,
      name: credentials.name
    })
  }

  /**
   * Signs out user
   */
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

  /**
   * Send password lost request
   * @param credentials Credentials used to send request
   */
  lost(credentials: IPasswordLost): Observable<any> {
    return this.http.post(`${this.url}/lost`, {
      email: credentials.email
    })
  }
}
