import { NgModule }                                  from '@angular/core'
import { AuthService }                               from './services/auth.service'
import { LoginPageComponent, RegisterPageComponent } from '@core/auth/containers'
import { AuthRoutingModule }                         from '@core/auth/auth.routing'
import { CommonModule }                              from '@angular/common'
import { FormsModule, ReactiveFormsModule }          from '@angular/forms'
import { LoginComponent, RegisterComponent }         from '@core/auth/components'
import { AuthGuardService }                          from '@core/auth/services/auth-guard.service'
import { StoreModule }                               from '@ngrx/store'
import { reducers }                                  from './store'

@NgModule({
  imports: [
    StoreModule.forFeature('auth', reducers),
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginPageComponent,
    LoginComponent,
    RegisterPageComponent,
    RegisterComponent
  ],
  declarations: [
    LoginPageComponent,
    LoginComponent,
    RegisterPageComponent,
    RegisterComponent
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class AuthModule {
}
