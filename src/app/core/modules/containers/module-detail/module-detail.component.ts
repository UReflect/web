import { Component, OnInit } from '@angular/core'
import * as fromStore        from '@core/modules/store'
import * as fromSelectors    from '@core/modules/store/selectors'
import * as fromAuth         from '@core/auth/store'
import * as fromRouter       from '@store'
import * as fromMirror       from '@core/mirrors/store'
import { select, Store }     from '@ngrx/store'
import { Observable }        from 'rxjs'
import { IModule }           from '@core/modules/models/module'
import { IMirror }           from '@core/mirrors/models'
import { MirrorService }     from '@core/mirrors/services'
import { ActivatedRoute }    from '@angular/router'

/**
 * Module detail component
 */
@Component({
  selector: 'app-module-detail',
  templateUrl: 'module-detail.component.html',
  styleUrls: ['module-detail.component.scss']
})

export class ModuleDetailComponent implements OnInit {
  /**
   * Asked module from store
   */
  module$: Observable<IModule>
  /**
   * Logged user from store
   */
  user$: Observable<any>
  /**
   * Mirrors from store Observable
   */
  mirrors$: Observable<IMirror[]>
  /**
   * Module local variable
   */
  module: IModule
  /**
   * Toggle dropdown for mirror selector
   */
  toggleDropdown = false

  /**
   * Constructor
   * @param store Module store
   * @param mirrorService Mirror HTTP Service
   * @param route Current route
   * Init module$ and user$ Observables
   */
  constructor(private store: Store<fromStore.IModuleReducerState>,
              private mirrorService: MirrorService,
              private route: ActivatedRoute) {
    this.module$ = this.store.pipe(select(fromSelectors.getSelectedModule))
    this.user$ = this.store.pipe(select(fromAuth.getLoggedUser))
  }

  /**
   * Gets module info from store and store it in local variable
   * for later use
   */
  ngOnInit() {
    this.module$.subscribe((module: IModule) => {
      this.module = module
    })
    this.mirrors$ = this.store.pipe(select(fromMirror.getAllLoggedUserMirrors))
  }

  /**
   * Generates stars for rating display
   * @param ratingNb Rating number
   */
  getRatingNbStr(ratingNb: number): string {
    return ratingNb === 1
      ? '1 review'
      : `${ratingNb} reviews`
  }

  /**
   * Edits module
   */
  editHandler() {
    this.store.dispatch(new fromRouter.Go({
      path: [`/module/${this.module.ID}/edit`]
    }))
  }

  /**
   * Installs module on mirror
   * @param mirrorID Mirror selected
   */
  installHandler(mirrorID) {
    this.mirrorService.loadProfiles(mirrorID).then(response => {
      this.store.dispatch(new fromMirror.InstallModule({
        module_id: parseInt(this.route.snapshot.paramMap.get('id'), 10),
        profile_id: response[0].ID
      }))
    })
    this.toggleDropdown = !this.toggleDropdown
  }
}
