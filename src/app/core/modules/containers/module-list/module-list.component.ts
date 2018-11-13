import { Component, OnInit } from '@angular/core'
import { Observable }        from 'rxjs'
import { select, Store }     from '@ngrx/store'
import * as fromStore        from '@core/modules/store'
import * as fromSelectors    from '@core/modules/store/selectors'

/**
 * Module listing component
 */
@Component({
  selector: 'app-module-list',
  templateUrl: 'module-list.component.html',
  styles: ['.container { display: flex; flex-flow: row wrap}']
})

export class ModuleListComponent implements OnInit {
  /**
   * Modules entities from store
   */
  private modulesEntities$: Observable<any>
  /**
   * Modules in array from store
   */
  modules$: Observable<any>

  /**
   * Constructor
   * @param store Module store
   */
  constructor(private store: Store<fromStore.IModuleReducerState>) {
    this.modulesEntities$ = this.store.pipe(select(fromSelectors.getModuleEntities))
    this.modules$ = this.store.pipe(select(fromSelectors.getAllModules))
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
  }
}
