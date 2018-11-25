import { Component, OnInit } from '@angular/core'
import * as fromStore        from '@core/modules/store'
import * as fromSelectors    from '@core/modules/store/selectors'
import * as fromAuth         from '@core/auth/store'
import * as fromRouter       from '@store'
import { select, Store }     from '@ngrx/store'
import { Observable }        from 'rxjs'
import { IModule }           from '@core/modules/models/module'

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
   * Module local variable
   */
  module: IModule

  /**
   * Constructor
   * @param store Module store
   * Init module$ and user$ Observables
   */
  constructor(private store: Store<fromStore.IModuleReducerState>) {
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
}
