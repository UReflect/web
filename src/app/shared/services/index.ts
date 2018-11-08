import { SentryService } from '@shared/services/sentry.service'

export * from './sentry.service'

/**
 * Exports all shared services
 */
export const services: any[] = [
  SentryService
]
