import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginPageComponent }   from '@core/auth/containers/login-page.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
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
