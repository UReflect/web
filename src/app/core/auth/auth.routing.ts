import { NgModule }                                  from '@angular/core'
import { RouterModule, Routes }                      from '@angular/router'
import { LoginPageComponent, RegisterPageComponent } from '@core/auth/containers'

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
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
