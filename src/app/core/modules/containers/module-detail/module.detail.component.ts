import { Component, OnInit } from '@angular/core'
import * as fromStore        from '@core/modules/store/reducers'
import * as fromSelectors    from '@core/modules/store/selectors'
import { select, Store }     from '@ngrx/store'
import { Observable }        from 'rxjs'
import { IModule }           from '@core/modules/models/module'

@Component({
  selector: 'app-module-detail',
  templateUrl: 'module-detail.component.html'
})

export class ModuleDetailComponent implements OnInit {
  public module$: Observable<IModule>

  constructor(private store: Store<fromStore.IModulesState>) {
    this.module$ = this.store.pipe(select(fromSelectors.getSelectedModule))
  }

  ngOnInit() {
  }
}
