import { Component, EventEmitter, Input, OnInit, Output }      from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { IFields, IFooter, ISubmitBtn }                        from '@core/auth/models/auth.model'
import { passwordConfirm }                                     from '@shared/validators'
import { Observable }                                          from 'rxjs'
import { select, Store }                                       from '@ngrx/store'
import * as fromStore                                          from '@core/auth/store'

/**
 * Auth form component
 */
@Component({
  selector: 'app-auth-form',
  templateUrl: 'auth-form.component.html',
  styleUrls: ['auth-form.component.scss']
})

export class AuthFormComponent implements OnInit {
  /**
   * Form title
   */
  @Input() title: string
  /**
   * Form fields from parent
   */
  @Input() formFields: FormGroup
  /**
   * Form mode
   * 'signin' | 'signup' | 'lost'
   */
  @Input() mode: string
  /**
   * Fields to display
   */
  @Input() fields: IFields
  /**
   * Footer links settings
   */
  @Input() footer: IFooter[]
  /**
   * Submit button settings
   */
  @Input() submitBtn: ISubmitBtn

  /**
   * EventEmitter which sends data back to parent
   */
  @Output() submit = new EventEmitter()

  /**
   * Form field use to validate password confirmation on sign up
   */
  passwordConfirmForm: FormGroup
  /**
   * Pending Observable from store
   */
  pending$: Observable<boolean>
  /**
   * Error Observable from store
   */
  error$: Observable<any>

  /**
   * Constructor
   * @param fb Form builder
   * @param store Auth store
   */
  constructor(private fb: FormBuilder,
              private store: Store<fromStore.IAuthReducerState>) {
  }

  /**
   * Init pending$, error$, passwordConfirmForm, clears previous error
   */
  ngOnInit() {
    this.pending$ = this.store.pipe(select(fromStore.getPending))
    this.error$ = this.store.pipe(select(fromStore.getError))
    this.store.dispatch(new fromStore.ClearError())
    if (this.mode === 'signup') {
      this.passwordConfirmForm = this.fb.group({
        passwordConfirm: ['', [Validators.required, passwordConfirm(this.getPassword())]]
      })
    }
  }

  /**
   * Validate inputs to activate submit button
   */
  checkValidation(): boolean {
    switch (this.mode) {
      case 'signin':
        return this.getEmail().valid && this.getPassword().valid
      case 'signup':
        return this.getEmail().valid && this.getName().valid
          && this.getPassword().valid && this.getPasswordConfirm().valid
      case 'lost':
        return this.getEmail().valid
      default:
        return false
    }
  }

  /**
   * Sends back data to parent according to chosen mode
   */
  submitHandler() {
    switch (this.mode) {
      case 'signin': {
        this.submit.emit({
          email: this.getEmail().value,
          password: this.getPassword().value
        })
        break
      }
      case 'signup': {
        this.submit.emit({
          email: this.getEmail().value,
          name: this.getName().value,
          password: this.getPassword().value
        })
        break
      }
      case 'lost': {
        this.submit.emit({
          email: this.getEmail().value
        })
        break
      }
    }
  }

  /**
   * Return string error depending on field
   * @param field Field to check
   */
  getFormErrors(field: string): string {
    switch (field) {
      case 'name':
        return this.getName().hasError('required') ? 'Please enter a name'
          : 'Unknown error on name field'
      case 'email':
        return this.getEmail().hasError('required') ? 'Please enter an email address'
          : this.getEmail().hasError('email') ? 'Please enter a valid email address'
            : 'Unknown error on email field'
      case 'password':
        return this.getPassword().hasError('required') ? 'Please enter a password'
          : this.getPassword().hasError('strength') ? 'Please enter a password at least ' +
            '16 chars long, with a number and a special character'
            : 'Unknown error on password field'
      case 'passwordConfirm':
        return this.getPasswordConfirm().hasError('required') ? 'Please confirm your password'
          : this.getPasswordConfirm().hasError('match') ? 'Please enter the same password as previously'
            : 'Unknown error on password confirmation field'
      default:
        return ''
    }
  }

  /**
   * Name getter
   */
  getName(): AbstractControl {
    return this.formFields.get('name')
  }

  /**
   * Email getter
   */
  getEmail(): AbstractControl {
    return this.formFields.get('email')
  }

  /**
   * Password getter
   */
  getPassword(): AbstractControl {
    return this.formFields.get('password')
  }

  /**
   * PasswordConfirm getter
   */
  getPasswordConfirm(): AbstractControl {
    return this.passwordConfirmForm.get('passwordConfirm')
  }
}
