import { Injectable }  from '@angular/core'
import { HttpClient }  from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { Observable }  from 'rxjs'

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

  signin(email: string, passwd: string): Observable<any> {
    return this.http.post(`${this.url}/signin`, {
      email: email,
      password: passwd
    })
  }

  signup(email: string, passwd: string, name: string): Observable<any> {
    return this.http.post(`${this.url}/signup`, {
      email: email,
      password: passwd,
      name: name
    })
  }

  signout(): Observable<Object> {
    return this.http.post(`${this.url}/signout`, {}, {
      headers: {...this.authHeader}
    })
  }
}
