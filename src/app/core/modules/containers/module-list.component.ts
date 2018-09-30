import { Component, OnDestroy, OnInit } from '@angular/core'
import { IModule }                      from '@core/modules/models/module'
import { ModuleService }                from '@core/modules/services/module.service'
import { Subscription }                 from 'rxjs'

@Component({
  selector: 'app-module-list',
  templateUrl: 'module-list.component.html'
})

export class ModuleListComponent implements OnInit, OnDestroy {
  modules: IModule[]
  private subscriptions: Subscription

  constructor(private moduleService: ModuleService) {
    this.subscriptions = new Subscription()
  }

  ngOnInit() {
    this.moduleService.all().subscribe(response => {
      console.log(response)
      this.modules = response.data
    })
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }
}
