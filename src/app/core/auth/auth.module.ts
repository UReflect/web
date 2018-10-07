import { NgModule }                         from '@angular/core'
import { AuthService }                      from './services/auth.service'
import { AuthRoutingModule }                from '@core/auth/auth.routing'
import { CommonModule }                     from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthGuardService }                 from '@core/auth/guards/auth-guard.service'
import { StoreModule }                      from '@ngrx/store'
import { reducers, effects }                from './store'
import { EffectsModule }                    from '@ngrx/effects'
import * as fromComponents                  from './components'
import * as fromContainers                  from './containers'

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
    AuthService,
    AuthGuardService
  ]
})
export class AuthModule {
}
