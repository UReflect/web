import { NgModule }            from '@angular/core'
import { ModuleListComponent } from '@core/modules/containers/module-list.component'
import { ModuleService }       from '@core/modules/services/module.service'
import { ModuleRoutingModule } from '@core/modules/module.routing'


@NgModule({
  imports: [
    ModuleRoutingModule
  ],
  exports: [
    ModuleListComponent
  ],
  declarations: [
    ModuleListComponent
  ],
  providers: [
    ModuleService
  ]
})
export class ModuleModule {
}
