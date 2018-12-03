import { Injectable }                                                                    from '@angular/core'
import { Observable }                                                                    from 'rxjs'
import { HttpClient }                                                                    from '@angular/common/http'
import { select, Store }                                                                 from '@ngrx/store'
import * as fromAuth                                                                     from '@core/auth/store'
import { IMirror, IMIrrorInstallModule, IMirrorJoin, IMIrrorLinkProfile, IMirrorUpdate } from '@core/mirrors/models'
import { environment }                                                                   from '@env/environment'

/**
 * Mirror HTTP service
 */
@Injectable()
export class MirrorService {
  /**
   * API Url
   */
  private url: string
  /**
   * Token Observable to get token from store
   */
  private token$: Observable<any>

  /**
   * Constructor
   * @param http HTTP service used to make HTTP queries
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
   * Get the user's mirrors
   */
  async mine(): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/mirror`, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }

  /**
   * Update the provided mirror
   * @param data Info used to update the mirror
   */
  async update(data: IMirrorUpdate): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.put(`${this.url}/mirror/${data.id}`, {
        name: data.name,
        location: data.location,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }

  /**
   * Join the mirror
   * @param data Info used to join mirror
   */
  async join(data: IMirrorJoin): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/mirror/join`, {
        join_code: data.join_code
      }, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }

  /**
   * Link a profile to a mirror
   * @param data Info used to link profile to mirror
   */
  async linkProfile(data: IMIrrorLinkProfile): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.post(`${this.url}/mirrors/${data.id}/profile`, {
        profile_id: data.profile_id
      }, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }

  /**
   * Deletes mirror from API
   * @param mirror Mirror to delete
   */
  async delete(mirror: IMirror): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise<any>((resolve, reject) => {
      this.http.delete(`${this.url}/mirror/${mirror.ID}`, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }

  /**
   * Installs module on mirror
   * @param data Module to install on mirror
   */
  async installModule(data: IMIrrorInstallModule): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise<any>((resolve, reject) => {
      this.http.post(`${this.url}/module/${data.module_id}/install/${data.profile_id}`, null, {
        headers: { ...header }
      }).subscribe(() => {
        resolve()
      }, e => reject(e.error))
    })
  }

  /**
   * Loads profiles for a mirror from API
   * @param mirrorID Mirror ID
   */
  async loadProfiles(mirrorID: number): Promise<any> {
    const header: any = await this.authHeader()

    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/mirror/${mirrorID}/profiles`, {
        headers: { ...header }
      }).subscribe(response => {
        resolve(response['data'])
      }, e => reject(e.error))
    })
  }
}
