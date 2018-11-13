import { Injectable }    from '@angular/core'
import { HttpClient }    from '@angular/common/http'
import { Observable }    from 'rxjs'
import { select, Store } from '@ngrx/store'
import * as fromAuth     from '@core/auth/store'
import { environment }   from '@env/environment'

/**
 * User HTTP Service
 */
@Injectable()
export class UserService {
  /**
   * API url
   */
  private url: string
  /**
   * Observable to get token from auth store
   */
  private token$: Observable<string>

  /**
   * Constructor
   * @param http HttpClient used to make HTTP queries
   * @param store User store
   */
  constructor(private http: HttpClient,
              private store: Store<fromAuth.IAuthReducerState>) {
    this.url = environment.apiUrl
    this.token$ = this.store.pipe(select(fromAuth.getToken))
  }

  /**
   * Async Promise to get token from auth store querying token$
   */
  authHeader(): Promise<any> {
    return new Promise((resolve) => {
      this.token$.subscribe(token => {
        resolve({ 'x-access-token': token })
      })
    })
  }

  /**
   * Gets all users from external API
   */
  async all(): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/users`, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }
}
