import { NgModule }                         from '@angular/core'
import { StoreModule }                      from '@ngrx/store'
import { effects, reducers }                from '@core/profiles/store'
import { CommonModule }                     from '@angular/common'
import { services }                         from '@core/profiles/services'
import { EffectsModule }                    from '@ngrx/effects'
import { containers }                       from '@core/profiles/containers'
import { components }                       from '@core/profiles/components'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProfileRoutingModule }             from '@core/profiles/profile.routing'
import { SharedModule }                     from '@shared/shared.module'
import { guards }                           from '@core/profiles/guards'
import { RouterModule }                     from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('profiles', reducers),
    EffectsModule.forFeature(effects),
    ProfileRoutingModule,
    SharedModule,
    RouterModule
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
export class ProfileModule {
}

