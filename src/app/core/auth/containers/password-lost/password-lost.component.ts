import { Component, OnInit }                           from '@angular/core'
import { IFields, IFooter, IPasswordLost, ISubmitBtn } from '@core/auth/models/auth.model'
import { FormBuilder, FormGroup, Validators }          from '@angular/forms'
import * as fromStore                                  from '@core/auth/store'
import { Store }                                       from '@ngrx/store'

/**
 * Password lost component
 */
@Component({
  selector: 'app-password-lost',
  templateUrl: 'password-lost.component.html',
  styleUrls: ['../../components/auth-form/auth-form.component.scss']
})

export class PasswordLostComponent implements OnInit {
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
      icon: 'fa fa-asterisk mr-10',
      text: {
        static: 'I forgot my password',
        loading: 'Retrieving your password ...'
      }
    }
    this.footer = [{
      link: '/login',
      btnText: 'Sign In',
      btnIcon: 'fa-user'
    }]
    this.fields = {
      email: true,
      name: false,
      password: false,
      passwordConfirm: false
    }
    this.formFields = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
  }

  /**
   * Sends request for lost password
   * @param data Credentials needed to recover password
   */
  lostPasswordHandler(data) {
    if (data.email) {
      const credentials: IPasswordLost = {
        email: data.email
      }

      this.store.dispatch(new fromStore.PasswordLost(credentials))
    }
  }
}
