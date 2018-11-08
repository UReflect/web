import { NgModule }                         from '@angular/core'
import { AuthRoutingModule }                from '@core/auth/auth.routing'
import { CommonModule }                     from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreModule }                      from '@ngrx/store'
import { reducers, effects }                from './store'
import { EffectsModule }                    from '@ngrx/effects'
import * as fromComponents                  from './components'
import * as fromContainers                  from './containers'
import { services }                         from '@core/auth/services'
import { guards }                           from '@core/auth/guards'

@NgModule({
  imports: [
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature(effects),
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...fromComponents.components,
    ...fromContainers.containers
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ],
  providers: [
    ...services,
    ...guards
  ]
})
export class AuthModule {
}
