import { UserService } from '@core/users/services/user.service'

export * from './user.service'

/**
 * Exports all user related services
 */
export const services: any[] = [
  UserService
]
