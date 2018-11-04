import { Injectable }                               from '@angular/core'
import { HttpClient }                               from '@angular/common/http'
import * as fromAuth                                from '@core/auth/store'
import { select, Store }                            from '@ngrx/store'
import { environment }                              from '@env/environment'
import { Observable }                               from 'rxjs'
import { IProfile, IProfileCreate, IProfileUpdate } from '@core/profiles/models/profile.model'
import { map }                                      from 'rxjs/operators'

/**
 * Profile HTTP service
 */
@Injectable()
export class ProfileService {
  /**
   * API url
   */
  private url: string
  /**
   * Token Observable from auth store
   */
  private token$: any

  /**
   * Constructor
   * @param http HttpClient used for HTTP queries
   * @param store Auth store
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
   * Get the user's profiles
   */
  async mine(): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/profile`, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }

  /**
   * Create a new profile
   * @param data Info used to create the profile
   */
  async create(data: IProfileCreate): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/profile`, {
        title: data.title
      }, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }

  /**
   * Update the provided profile
   * @param data Info used to update the profile
   */
  async update(data: IProfileUpdate): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.put(`${this.url}/profile/${data.ID}`, {
        title: data.title
      }, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }

  /**
   * Delete the provided profile
   * @param profile profile to delete
   */
  async delete(profile: IProfile): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.delete(`${this.url}/profile/${profile.ID}`, {
        headers: { ...header }
      }).subscribe(() => {
        resolve(profile)
      }, e => {
        reject(e.error)
      })
    })
  }
}
