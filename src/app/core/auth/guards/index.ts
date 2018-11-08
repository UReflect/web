import { AuthGuardService } from '@core/auth/guards/auth-guard.service'

export * from './auth-guard.service'

/**
 * Exports all auth guards
 */
export const guards: any[] = [
  AuthGuardService
]
