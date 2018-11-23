import { ProfileGuard } from '@core/profiles/guards/profile.guard'

export * from './profile.guard'

/**
 * Export all profiles related guards
 */
export const guards: any[] = [
  ProfileGuard
]
