import { Injectable }    from '@angular/core'
import { HttpClient }    from '@angular/common/http'
import { select, Store } from '@ngrx/store'
import * as fromAuth     from '@core/auth/store'
import { environment }   from '@env/environment'

/**
 * Comment HTTP service
 */
@Injectable()
export class CommentService {
  /**
   * API Url
   */
  private url: string
  /**
   * Token Observable from store
   */
  private token$: any

  /**
   * Constructor
   * @param http HTTP Client used to make HTTP queries
   * @param store Auth store
   */
  constructor(private http: HttpClient,
              private store: Store<fromAuth.IAuthReducerState>) {
    this.url = environment.apiUrl
    this.token$ = this.store.pipe(select(fromAuth.getToken))
  }

  /**
   * Async method to get token from auth store
   */
  authHeader(): Promise<any> {
    return new Promise((resolve) => {
      this.token$.subscribe(token => {
        resolve({ 'x-access-token': token })
      })
    })
  }

  /**
   * Load all comments for a module from API
   * @param moduleID Module ID
   */
  async all(moduleID: number): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/module/${moduleID}/comments`, {
        headers: { ...header }
      }).subscribe(
        response => resolve(response['data']),
        e => reject(e.error))
    })
  }
}
