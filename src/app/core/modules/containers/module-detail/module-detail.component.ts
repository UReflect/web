import { Component, OnInit } from '@angular/core'
import * as fromStore        from '@core/modules/store/reducers'
import * as fromSelectors    from '@core/modules/store/selectors'
import { select, Store }     from '@ngrx/store'
import { Observable }        from 'rxjs'
import { IModule }           from '@core/modules/models/module'

@Component({
  selector: 'app-module-detail',
  templateUrl: 'module-detail.component.html',
  styleUrls: ['module-detail.component.scss']
})

export class ModuleDetailComponent implements OnInit {
  module$: Observable<IModule>

  constructor(private store: Store<fromStore.IModulesState>) {
    this.module$ = this.store.pipe(select(fromSelectors.getSelectedModule))
  }

  ngOnInit() {
  }

  getRatingNbStr(ratingNb: number): string {
    return ratingNb === 1
      ? '1 review'
      : `${ratingNb} reviews`
  }
}
