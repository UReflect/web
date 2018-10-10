import { Injectable }                     from '@angular/core'
import { environment }                    from '@env/environment'
import { HttpClient }                     from '@angular/common/http'
import { Observable }                     from 'rxjs'
import { IModuleCreation, IModuleUpload } from '@core/modules/models/module'
import { catchError, map }                from 'rxjs/operators'
import * as fromAuth                      from '@core/auth/store'
import { select, Store }                  from '@ngrx/store'

@Injectable()
export class ModuleService {
  private url: string
  private token$: any

  constructor(private http: HttpClient,
              private store: Store<fromAuth.IState>) {
    this.url = environment.apiUrl
    this.token$ = this.store.select(fromAuth.getToken)
  }

  authHeader() {
    return this.token$.pipe(
      map(token => {
        return {
          'x-access-token': token
        }
      })
    )
  }

  all(params?: { query: string, order: string, invert: boolean, limit: number }): any {
    return this.http.get(`${this.url}/modules?${params && params.query
      ? `query=${params.query}&`
      : ''}${params && params.order
      ? `order=${params.order}&`
      : ''}${params && params.invert
      ? `invert=${params.invert}&`
      : ''}${params && params.limit
      ? `limit=${params.limit}`
      : ''}`, {
      headers: { ...this.authHeader().subscribe(header => header) }
    }).pipe(catchError(e => Observable.throw(e)))
  }

  // one(id: number): Observable<any> {
  //   return new Observable<any>(observer => {
  //     this.getToken().then(() => {
  //       observer.next(this.http.get(`${this.url}/module/${id}`, {
  //         headers: { ...this.authHeader }
  //       }))
  //       observer.complete()
  //     }).catch(e => {
  //       if (e) {
  //         throw e
  //       }
  //     })
  //   })
  // }
  //
  // create(data: IModuleCreation): Observable<any> {
  //   return new Observable<any>(observer => {
  //     this.getToken().then(() => {
  //       observer.next(this.http.post(`${this.url}/module`, {
  //         title: data.title,
  //         description: data.description,
  //         min_height: data.minHeight,
  //         min_width: data.minWidth,
  //         price: data.price
  //       }))
  //       observer.complete()
  //     }).catch(e => {
  //       if (e) {
  //         throw e
  //       }
  //     })
  //   })
  // }
  //
  // uploadPackage(data: IModuleUpload): Observable<any> {
  //   return new Observable<any>(observer => {
  //     this.getToken().then(() => {
  //       const headers = new HttpHeaders()
  //       headers.append('Content-Type', 'multipart/form-data')
  //
  //       observer.next(this.http.post(`${this.url}/module/${data.id}/upload`, data.formData, {
  //         headers: { ...this.authHeader }
  //       }))
  //       observer.complete()
  //     }).catch(e => {
  //       if (e) {
  //         throw e
  //       }
  //     })
  //   })
  // }
  //
  // update(id: number, data: IModuleCreation): Observable<any> {
  //   return new Observable<any>(observer => {
  //     this.getToken().then(() => {
  //       observer.next(this.http.put(`${this.url}/module/${id}`, {
  //         title: data.title,
  //         description: data.description,
  //         min_height: data.minHeight,
  //         min_width: data.minWidth,
  //         price: data.price
  //       }, {
  //         headers: { ...this.authHeader }
  //       }))
  //       observer.complete()
  //     }).catch(e => {
  //       if (e) {
  //         throw e
  //       }
  //     })
  //   })
  // }
  //
  // delete(id: number): Observable<any> {
  //   return new Observable<any>(observer => {
  //     this.getToken().then(() => {
  //       observer.next(this.http.delete(`${this.url}/module/${id}`))
  //       observer.complete()
  //     })
  //   })
  // }
}
