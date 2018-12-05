import { NgModule }                                                                        from '@angular/core'
import { RouterModule, Routes }                                                            from '@angular/router'
import { EmailConfirmComponent, LoginComponent, PasswordLostComponent, RegisterComponent } from '@core/auth/containers'

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
  },
  {
    path: 'confirm-mail',
    component: EmailConfirmComponent
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
