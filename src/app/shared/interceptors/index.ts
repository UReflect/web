import { AuthInterceptor } from '@shared/interceptors/auth.interceptor'

export * from './auth.interceptor'

export const interceptors: any[] = [
  AuthInterceptor
]
