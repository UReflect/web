import { LoginPageComponent }        from '@core/auth/containers/login-page/login-page.component'
import { RegisterPageComponent }     from '@core/auth/containers/register-page/register-page.component'
import { PasswordLostPageComponent } from '@core/auth/containers/password-lost-page/password-lost-page.component'

export * from './login-page/login-page.component'
export * from './register-page/register-page.component'
export * from './password-lost-page/password-lost-page.component'

/**
 * Exports all containers
 */
export const containers: any[] = [
  LoginPageComponent,
  RegisterPageComponent,
  PasswordLostPageComponent
]
