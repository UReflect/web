import { NgModule }          from '@angular/core'
import { services }          from '@core/mirrors/services'
import { CommonModule }      from '@angular/common'
import { StoreModule }       from '@ngrx/store'
import { effects, reducers } from '@core/mirrors/store'
import { EffectsModule }     from '@ngrx/effects'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('mirrors', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [],
  declarations: [],
  providers: [
    ...services
  ]
})
export class MirrorModule {
}
