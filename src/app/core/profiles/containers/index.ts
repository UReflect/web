import { FirstProfileComponent } from '@core/profiles/containers/first-profile/first-profile.component'
import { SetPincodeComponent }   from '@core/profiles/containers/set-pincode/set-pincode.component'
import { ProfileListComponent }  from '@core/profiles/containers/profile-list/profile-list.component'
import { ProfileEditComponent }  from '@core/profiles/containers/profile-edit/profile-edit.component'
import { ProfileNewComponent }   from '@core/profiles/containers/profile-new/profile-new.component'

export * from './first-profile/first-profile.component'
export * from './set-pincode/set-pincode.component'
export * from './profile-list/profile-list.component'
export * from './profile-edit/profile-edit.component'
export * from './profile-new/profile-new.component'

/**
 * Exports all containers
 */
export const containers: any[] = [
  FirstProfileComponent,
  SetPincodeComponent,
  ProfileListComponent,
  ProfileEditComponent,
  ProfileNewComponent
]
