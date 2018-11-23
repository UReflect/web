import { FirstProfileComponent } from '@core/profiles/containers/first-profile/first-profile.component'
import { SetPincodeComponent }   from '@core/profiles/containers/set-pincode/set-pincode.component'

export * from './first-profile/first-profile.component'
export * from './set-pincode/set-pincode.component'

/**
 * Exports all containers
 */
export const containers: any[] = [
  FirstProfileComponent,
  SetPincodeComponent
]
