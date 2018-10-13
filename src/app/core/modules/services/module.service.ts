import { Injectable }                                             from '@angular/core'
import { environment }                                            from '@env/environment'
import { HttpClient, HttpHeaders, HttpResponse }                  from '@angular/common/http'
import { Observable }                                             from 'rxjs'
import { IModule, IModuleCreation, IModuleUpdate, IModuleUpload } from '@core/modules/models/module'
import { catchError, map }                                        from 'rxjs/operators'
import * as fromAuth                                              from '@core/auth/store'
import { select, Store }                                          from '@ngrx/store'

@Injectable()
export class ModuleService {
  private url: string
  private token$: any

  constructor(private http: HttpClient,
              private store: Store<fromAuth.IState>) {
    this.url = environment.apiUrl
    this.token$ = this.store.select(fromAuth.getToken)
  }

  authHeader(): Promise<any> {
    return new Promise((resolve) => {
      this.token$.subscribe(token => {
        resolve({ 'x-access-token': token })
      })
    })
  }

  async all(params?: { query: string, order: string, invert: boolean, limit: number }): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/modules?${params && params.query
        ? `query=${params.query}&`
        : ''}${params && params.order
        ? `order=${params.order}&`
        : ''}${params && params.invert
        ? `invert=${params.invert}&`
        : ''}${params && params.limit
        ? `limit=${params.limit}`
        : ''}`, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }

  async one(id: number): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/module/${id}`, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }

  async create(data: IModuleCreation): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/module`, {
        title: data.title,
        description: data.description,
        min_height: data.minHeight,
        min_width: data.minWidth,
        price: data.price
      }, { headers: { ...header } }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }

  async uploadPackage(data: IModuleUpload): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/module/${data.id}/upload`, data.formData, {
        headers: {
          ...header,
          'Content-Type': 'multipart/from-data'
        }
      }).subscribe(() => {
        resolve()
      }, e => reject(e.error))
    })
  }

  async update(module: IModuleUpdate): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.put(`${this.url}/module/${module.id}`, {
        title: module.title,
        description: module.description,
        min_height: module.minHeight,
        min_width: module.minWidth,
        price: module.price
      }, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }

  async delete(module: IModule): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.delete(`${this.url}/module/${module.id}`,
        {
          headers: { ...header }
        }).subscribe(() => {
        resolve(module)
      }, e => {
        reject(e.error)
      })
    })
  }
}
