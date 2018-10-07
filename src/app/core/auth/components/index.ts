import { LoginComponent }    from '@core/auth/components/login/login.component'
import { RegisterComponent } from '@core/auth/components/register/register.component'

export * from './login/login.component'
export * from './register/register.component'

export const components: any[] = [
  LoginComponent,
  RegisterComponent
]
