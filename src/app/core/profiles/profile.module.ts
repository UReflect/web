import { NgModule }          from '@angular/core'
import { StoreModule }       from '@ngrx/store'
import { effects, reducers } from '@core/profiles/store'
import { CommonModule }      from '@angular/common'
import { services }          from '@core/profiles/services'
import { EffectsModule }     from '@ngrx/effects'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('profiles', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [],
  declarations: [],
  providers: [
    ...services
  ]
})
export class ProfileModule {
}

