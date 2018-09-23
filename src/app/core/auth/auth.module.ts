import { NgModule }           from '@angular/core'
import { AuthService }        from './services/auth.service'
import { LoginPageComponent } from '@core/auth/containers/login-page.component'
import { LoginComponent }     from '@core/auth/components/login.component'
import { AuthRoutingModule }  from '@core/auth/auth.routing'

@NgModule({
  imports: [
    AuthRoutingModule
  ],
  exports: [
    LoginPageComponent,
    LoginComponent
  ],
  declarations: [
    LoginPageComponent,
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}
