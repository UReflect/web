import { NgModule }                         from '@angular/core'
import { StoreModule }                      from '@ngrx/store'
import { effects, reducers }                from '@core/profiles/store'
import { CommonModule }                     from '@angular/common'
import { services }                         from '@core/profiles/services'
import { EffectsModule }                    from '@ngrx/effects'
import { containers }                       from '@core/profiles/containers'
import { components }                       from '@core/profiles/components'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('profiles', reducers),
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
export class ProfileModule {
}

