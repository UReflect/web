import { NgModule }                                  from '@angular/core'
import { AuthService }                               from './services/auth.service'
import { LoginPageComponent, RegisterPageComponent } from '@core/auth/containers'
import { AuthRoutingModule }                         from '@core/auth/auth.routing'
import { CommonModule }                              from '@angular/common'
import { FormsModule, ReactiveFormsModule }          from '@angular/forms'
import { LoginComponent, RegisterComponent }         from '@core/auth/components'

@NgModule({
  imports: [
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
    AuthService
  ]
})
export class AuthModule {
}
