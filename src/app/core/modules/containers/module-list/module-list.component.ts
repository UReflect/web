import { Component, OnDestroy, OnInit } from '@angular/core'
import { IModule }                      from '../../models/module'
import { Observable, Subscription }     from 'rxjs'
import { select, Store }                from '@ngrx/store'
import * as fromModule                  from '@core/modules/store'

@Component({
  selector: 'app-module-list',
  templateUrl: 'module-list.component.html'
})

export class ModuleListComponent implements OnInit, OnDestroy {
  modules: IModule[]
  private subscriptions: Subscription
  private modulesEntities$: Observable<any>
  private modules$: Observable<any>

  constructor(private store: Store<fromModule.IModulesState>) {
    this.subscriptions = new Subscription()
    this.modulesEntities$ = this.store.pipe(select(fromModule.getModuleEntities))
    this.modules$ = this.store.pipe(select(fromModule.getAllModules))
  }

  ngOnInit() {
    this.store.dispatch(new fromModule.LoadAll)
    this.modulesEntities$.subscribe(response => console.log('toto', response))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }
}
