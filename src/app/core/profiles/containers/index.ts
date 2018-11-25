import { ProfileFirstComponent } from '@core/profiles/containers/profile-first/profile-first.component'
import { PincodeSetComponent }   from '@core/profiles/containers/pincode-set/pincode-set.component'
import { ProfileListComponent }  from '@core/profiles/containers/profile-list/profile-list.component'
import { ProfileEditComponent }  from '@core/profiles/containers/profile-edit/profile-edit.component'
import { ProfileNewComponent }   from '@core/profiles/containers/profile-new/profile-new.component'
import { PincodeEditComponent }  from '@core/profiles/containers/pincode-edit/pincode-edit.component'

export * from './profile-first/profile-first.component'
export * from './pincode-set/pincode-set.component'
export * from './profile-list/profile-list.component'
export * from './profile-edit/profile-edit.component'
export * from './profile-new/profile-new.component'
export * from './pincode-edit/pincode-edit.component'

/**
 * Exports all containers
 */
export const containers: any[] = [
  ProfileFirstComponent,
  PincodeSetComponent,
  ProfileListComponent,
  ProfileEditComponent,
  ProfileNewComponent,
  PincodeEditComponent
]
