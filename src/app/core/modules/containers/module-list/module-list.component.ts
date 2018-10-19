import { Component, OnInit } from '@angular/core'
import { Observable }        from 'rxjs'
import { select, Store }     from '@ngrx/store'
import * as fromStore        from '@core/modules/store'
import * as fromSelectors    from '@core/modules/store/selectors'

@Component({
  selector: 'app-module-list',
  templateUrl: 'module-list.component.html',
  styles: ['.container { display: flex; flex-flow: row wrap}']
})

export class ModuleListComponent implements OnInit {
  private modulesEntities$: Observable<any>
  modules$: Observable<any>

  constructor(private store: Store<fromStore.IModulesState>) {
    this.modulesEntities$ = this.store.pipe(select(fromSelectors.getModuleEntities))
    this.modules$ = this.store.pipe(select(fromSelectors.getAllModules))
  }

  ngOnInit() {
  }
}
