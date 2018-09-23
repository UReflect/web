import * as fromAuth  from './auth.reducer'
import * as fromLoginPage from './login-page.reducer'

export interface AuthState {
  auth: fromAuth.State
  loginPage: fromLoginPage.State
}
