import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {
  ProfileEditComponent, ProfileListComponent,
  ProfileNewComponent, PincodeSetComponent
}                               from '@core/profiles/containers'
import { AuthGuardService }     from '@core/auth/guards'
import { guards, ProfileGuard } from '@core/profiles/guards'
import { ProfilesGuard }        from '@core/profiles/guards/profiles.guard'
import { PincodeEditComponent } from '@core/profiles/containers/pincode-edit/pincode-edit.component'

const routes: Routes = [
  {
    path: 'profile/:id/pincode-set',
    component: PincodeSetComponent,
    canActivate: [
      AuthGuardService,
      ProfileGuard
    ]
  },
  {
    path: 'profile/:id/pincode-edit',
    component: PincodeEditComponent,
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
