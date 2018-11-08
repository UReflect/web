import { LoginComponent }        from '@core/auth/components/login/login.component'
import { RegisterComponent }     from '@core/auth/components/register/register.component'
import { PasswordLostComponent } from '@core/auth/components/password-lost/password-lost.component'

export * from './login/login.component'
export * from './register/register.component'
export * from './password-lost/password-lost.component'

/**
 * Export all components
 */
export const components: any[] = [
  LoginComponent,
  RegisterComponent,
  PasswordLostComponent
]

// ToDo: Need refacto to use only on form
