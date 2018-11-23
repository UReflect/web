import { NgModule }                                                                             from '@angular/core'
import { RouterModule, Routes }                                                                 from '@angular/router'
import { ProfileEditComponent, ProfileListComponent, ProfileNewComponent, SetPincodeComponent } from '@core/profiles/containers'
import { AuthGuardService }                                                                     from '@core/auth/guards'
import { guards, ProfileGuard }                                                                 from '@core/profiles/guards'
import { ProfilesGuard }                                                                        from '@core/profiles/guards/profiles.guard'

const routes: Routes = [
  {
    path: 'profile/:id/set-pincode',
    component: SetPincodeComponent,
    canActivate: [
      AuthGuardService,
      ProfileGuard
    ]
  },
  {
    path: 'profile/:id/edit',
    component: ProfileEditComponent,
    canActivate: [
      AuthGuardService,
      ProfileGuard
    ]
  },
  {
    path: 'profile/new',
    component: ProfileNewComponent,
    canActivate: [
      AuthGuardService
    ]
  },
  {
    path: 'profiles',
    component: ProfileListComponent,
    canActivate: [
      AuthGuardService,
      ProfilesGuard
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
