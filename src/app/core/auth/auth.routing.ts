import { NgModule }                                                             from '@angular/core'
import { RouterModule, Routes }                                                 from '@angular/router'
import { LoginPageComponent, PasswordLostPageComponent, RegisterPageComponent } from '@core/auth/containers'

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'password-lost',
    component: PasswordLostPageComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: []
})
export class AuthRoutingModule {
}
