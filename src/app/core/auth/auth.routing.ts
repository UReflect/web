import { NgModule }                                                 from '@angular/core'
import { RouterModule, Routes }                                     from '@angular/router'
import { LoginComponent, PasswordLostComponent, RegisterComponent } from '@core/auth/containers'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'password-lost',
    component: PasswordLostComponent
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
