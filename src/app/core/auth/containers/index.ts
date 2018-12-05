import { LoginComponent }        from '@core/auth/containers/login/login.component'
import { RegisterComponent }     from '@core/auth/containers/register/register.component'
import { PasswordLostComponent } from '@core/auth/containers/password-lost/password-lost.component'
import { EmailConfirmComponent } from '@core/auth/containers/email-confirm/email-confim.component'

export * from './login/login.component'
export * from './register/register.component'
export * from './password-lost/password-lost.component'
export * from './email-confirm/email-confim.component'

/**
 * Exports all containers
 */
export const containers: any[] = [
  LoginComponent,
  RegisterComponent,
  PasswordLostComponent,
  EmailConfirmComponent
]
