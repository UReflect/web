import { LoginPageComponent }    from '@core/auth/containers/login-page/login-page.component'
import { RegisterPageComponent } from '@core/auth/containers/register-page/register-page.component'

export * from './login-page/login-page.component'
export * from './register-page/register-page.component'

export const containers: any[] = [
  LoginPageComponent,
  RegisterPageComponent
]
