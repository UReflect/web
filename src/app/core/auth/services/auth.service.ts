import { Injectable }                     from '@angular/core'
import { HttpClient }                     from '@angular/common/http'
import { environment }                    from '@env/environment'
import { Observable }                     from 'rxjs'
import { IAuthentication, IRegistration } from '@core/auth/models/user'

@Injectable()
export class AuthService {
  private url: string
  private authHeader: {}

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl
    this.authHeader = {
      'x-access-token': 'toto'
    }
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

  signout(): Observable<Object> {
    return this.http.post(`${this.url}/signout`, {}, {
      headers: { ...this.authHeader }
    })
  }
}
