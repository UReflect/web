import { Injectable }    from '@angular/core'
import { HttpClient }    from '@angular/common/http'
import { Observable }    from 'rxjs'
import { select, Store } from '@ngrx/store'
import * as fromAuth     from '@core/auth/store'
import { environment }   from '@env/environment'

@Injectable()
export class UserService {
  private url: string
  private token$: Observable<string>

  constructor(private http: HttpClient,
              private store: Store<fromAuth.IState>) {
    this.url = environment.apiUrl
    this.token$ = this.store.pipe(select(fromAuth.getToken))
  }

  authHeader(): Promise<any> {
    return new Promise((resolve) => {
      this.token$.subscribe(token => {
        resolve({ 'x-access-token': token })
      })
    })
  }

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
