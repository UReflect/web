import { ProfileGuard }  from '@core/profiles/guards/profile.guard'
import { ProfilesGuard } from '@core/profiles/guards/profiles.guard'

export * from './profile.guard'
export * from './profiles.guard'

/**
 * Export all profiles related guards
 */
export const guards: any[] = [
  ProfileGuard,
  ProfilesGuard
]
