import { AuthInterceptor } from '@shared/interceptors/auth.interceptor'

export * from './auth.interceptor'

/**
 * Exports all interceptors
 */
export const interceptors: any[] = [
  AuthInterceptor
]
