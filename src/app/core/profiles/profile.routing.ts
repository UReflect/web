import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SetPincodeComponent }  from '@core/profiles/containers'
import { AuthGuardService }     from '@core/auth/guards'
import { guards, ProfileGuard } from '@core/profiles/guards'

const routes: Routes = [
  {
    path: 'profile/:id/set-pincode',
    component: SetPincodeComponent,
    canActivate: [
      AuthGuardService,
      ProfileGuard
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [],
  providers: [
    ...guards
  ]
})
export class ProfileRoutingModule {
}
