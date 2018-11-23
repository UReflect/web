import { NgModule }                         from '@angular/core'
import { services }                         from '@core/mirrors/services'
import { CommonModule }                     from '@angular/common'
import { StoreModule }                      from '@ngrx/store'
import { effects, reducers }                from '@core/mirrors/store'
import { EffectsModule }                    from '@ngrx/effects'
import { containers }                       from '@core/mirrors/containers'
import { MirrorRoutingModule }              from '@core/mirrors/mirror.routing'
import { components }                       from '@core/mirrors/components'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { guards }                           from '@core/mirrors/guards'
import { SharedModule }                     from '@shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    MirrorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('mirrors', reducers),
    EffectsModule.forFeature(effects),
    SharedModule
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
    ...services,
    ...guards
  ]
})
export class MirrorModule {
}
