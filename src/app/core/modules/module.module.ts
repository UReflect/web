import { NgModule }            from '@angular/core'
import { ModuleService }       from '@core/modules/services/module.service'
import { ModuleRoutingModule } from '@core/modules/module.routing'
import { CommonModule }        from '@angular/common'
import { StoreModule }         from '@ngrx/store'
import { reducers, effects }   from './store'
import { EffectsModule }       from '@ngrx/effects'
import { components }          from '@core/modules/components'
import { containers }          from '@core/modules/containers'

@NgModule({
  imports: [
    CommonModule,
    ModuleRoutingModule,
    StoreModule.forFeature('modules', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [
    ...components,
    ...containers
  ],
  declarations: [
    ...components,
    ...containers
  ],
  providers: [
    ModuleService
  ]
})
export class ModuleModule {
}
