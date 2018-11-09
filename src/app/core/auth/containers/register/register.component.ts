import { Component, OnInit }                           from '@angular/core'
import { IFields, IFooter, IRegistration, ISubmitBtn } from '@core/auth/models/auth.model'
import { FormBuilder, FormGroup, Validators }          from '@angular/forms'
import { passwordStrength }                            from '@shared/validators'
import * as fromStore                                  from '@core/auth/store'
import { Store }                                       from '@ngrx/store'

/**
 * Register page component
 */
@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['../../components/auth-form/auth-form.component.scss']
})

export class RegisterComponent implements OnInit {
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
              private store: Store<fromStore.IState>) {
    this.submitBtn = {
      icon: 'fa fa-plus mr-10',
      text: {
        static: 'Create Account',
        loading: 'Creating Account ...'
      }
    }
    this.footer = [{
      link: '/login',
      btnText: 'Sign In',
      btnIcon: 'fa-user'
    }]
    this.fields = {
      email: true,
      name: true,
      password: true,
      passwordConfirm: true
    }
    this.formFields = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordStrength()]]
    })
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
  }

  /**
   * Signs up the user
   * @param data Credentials needed to create an account
   */
  signupHandler(data) {
    if (data.email && data.name && data.password) {
      const credentials: IRegistration = {
        name: data.name,
        email: data.email,
        password: data.password
      }

      this.store.dispatch(new fromStore.SignUp(credentials))
    }
  }
}
