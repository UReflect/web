import { NgModule }                from '@angular/core'
import { ModuleService }           from '@core/modules/services/module.service'
import { ModuleRoutingModule }     from '@core/modules/module.routing'
import { ModuleListComponent }     from '@core/modules/containers/module-list.component'
import { ModuleListCardComponent } from '@core/modules/components/module-list-card/module-list-card.component'
import { CommonModule }            from '@angular/common'


@NgModule({
  imports: [
    CommonModule,
    ModuleRoutingModule
  ],
  exports: [
    ModuleListComponent,
    ModuleListCardComponent
  ],
  declarations: [
    ModuleListComponent,
    ModuleListCardComponent
  ],
  providers: [
    ModuleService
  ]
})
export class ModuleModule {
}
