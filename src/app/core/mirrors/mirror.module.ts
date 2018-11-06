import { NgModule }            from '@angular/core'
import { services }            from '@core/mirrors/services'
import { CommonModule }        from '@angular/common'
import { StoreModule }         from '@ngrx/store'
import { effects, reducers }   from '@core/mirrors/store'
import { EffectsModule }       from '@ngrx/effects'
import { containers }          from '@core/mirrors/containers'
import { MirrorRoutingModule } from '@core/mirrors/mirror.routing'
import { components }          from '@core/mirrors/components'

@NgModule({
  imports: [
    CommonModule,
    MirrorRoutingModule,
    StoreModule.forFeature('mirrors', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [
    ...containers,
    ...components
  ],
  declarations: [
    ...containers,
    ...components
  ],
  providers: [
    ...services
  ]
})
export class MirrorModule {
}
