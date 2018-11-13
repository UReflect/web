import { Component, OnInit }                             from '@angular/core'
import { IAuthentication, IFields, IFooter, ISubmitBtn } from '@core/auth/models/auth.model'
import { FormBuilder, FormGroup, Validators }            from '@angular/forms'
import * as fromStore                                    from '@core/auth/store'
import { Store }                                         from '@ngrx/store'

/**
 * Login page component
 */
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['../../components/auth-form/auth-form.component.scss']
})

export class LoginComponent implements OnInit {
  /**
   * Submit button settings
   */
  submitBtn: ISubmitBtn
  /**
   * Footer settings
   */
  footer: IFooter[]
  /**
   * Fields list
   */
  fields: IFields
  /**
   * Form fields
   */
  formFields: FormGroup

  /**
   * Constructor
   * @param fb Form builder
   * @param store Auth store
   */
  constructor(private fb: FormBuilder,
              private store: Store<fromStore.IAuthReducerState>) {
    this.submitBtn = {
      icon: 'si si-login mr-10',
      text: {
        static: 'Sign In',
        loading: 'Signing in ...'
      }
    }
    this.footer = [{
      link: '/register',
      btnText: 'Create Account',
      btnIcon: 'fa-plus'
    }, {
      link: '/password-lost',
      btnText: 'Forgot Password',
      btnIcon: 'fa-warning'
    }]
    this.fields = {
      email: true,
      name: false,
      password: true,
      passwordConfirm: false
    }
    this.formFields = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
  }

  /**
   * Signs in the user
   * @param data Credentials needed for authentication
   */
  signinHandler(data) {
    if (data.email && data.password) {
      const credentials: IAuthentication = {
        email: data.email,
        password: data.password
      }

      this.store.dispatch(new fromStore.SignIn(credentials))
    }
  }
}
