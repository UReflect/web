import { Injectable }                                             from '@angular/core'
import { environment }                                            from '@env/environment'
import { HttpClient }                                             from '@angular/common/http'
import { IModule, IModuleCreation, IModuleUpdate, IModuleUpload } from '@core/modules/models/module'
import * as fromAuth                                              from '@core/auth/store'
import { select, Store }                                          from '@ngrx/store'

/**
 * Module HTTP Service
 */
@Injectable()
export class ModuleService {
  /**
   * API Url
   */
  private url: string
  /**
   * Token$ Observable
   */
  private token$: any

  /**
   * Constructor
   * @param http HttpClient used to make HTTP queries
   * @param store Auth Store
   */
  constructor(private http: HttpClient,
              private store: Store<fromAuth.IState>) {
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
   * Load all mirrors from API
   * @param params Filtering parameters
   */
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

  /**
   * Load one mirror from API
   * @param id Mirror ID
   */
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

  /**
   * Create mirror
   * @param data Mirror info
   */
  async create(data: IModuleCreation): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/module`, {
        title: data.title,
        description: data.description,
        min_height: data.min_height,
        min_width: data.min_width,
        price: data.price
      }, { headers: { ...header } }).subscribe(
        response => resolve(response['data']),
        e => reject(e.error)
      )
    })
  }

  /**
   * Upload ZIP Archive for mirror
   * @param data ZIP Archive data
   */
  async uploadPackage(data: IModuleUpload): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/module/${data.ID}/upload`, data.formData, {
        headers: { ...header }
      }).subscribe(() => {
        resolve()
      }, e => reject(e.error))
    })
  }

  /**
   * Update module
   * @param module Module data
   */
  async update(module: IModuleUpdate): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.put(`${this.url}/module/${module.ID}`, {
        title: module.title,
        description: module.description,
        min_height: module.min_height,
        min_width: module.min_width,
        price: module.price
      }, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }

  /**
   * Delete module from API
   * @param module Module to delete
   */
  async delete(module: IModule): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.delete(`${this.url}/module/${module.ID}`,
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
