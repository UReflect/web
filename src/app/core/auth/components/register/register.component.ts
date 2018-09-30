import { Component, OnDestroy, OnInit }                        from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService }                                         from '@core/auth/services/auth.service'
import { passwordConfirm, passwordStrength }                   from '@shared/validators'
import { Observable, Subscription }                            from 'rxjs'
import { IRegistration }                                       from '@core/auth/models/user'
import * as fromAuth                                           from '@core/auth/store'
import { select, Store }                                       from '@ngrx/store'

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['../auth.component.css']
})

export class RegisterComponent implements OnInit, OnDestroy {
  formFields: FormGroup
  passwordConfirmForm: FormGroup
  pending$: Observable<boolean>
  error$: Observable<any>
  private subscriptions: Subscription

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private store: Store<fromAuth.IState>) {
    this.formFields = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordStrength]]
    })
    this.passwordConfirmForm = this.fb.group({
      passwordConfirm: ['', [Validators.required, passwordConfirm(this.getPassword())]]
    })
    this.subscriptions = new Subscription()
  }

  ngOnInit() {
    this.pending$ = this.store.pipe(select(fromAuth.getPending))
    this.error$ = this.store.pipe(select(fromAuth.getError))
  }

  signupHandler(): any {
    if (!this.formFields.valid && !this.passwordConfirmForm.valid) {
      return
    }

    const credentials: IRegistration = {
      name: this.getName().value,
      email: this.getEmail().value,
      password: this.getPassword().value
    }

    this.store.dispatch(new fromAuth.SignUp(credentials))
    this.subscriptions.add(this.authService.signup(credentials).subscribe(response => {
      this.store.dispatch(new fromAuth.SignInSuccess)
      this.store.dispatch(new fromAuth.StoreLoggedUser(response.data.user))
      this.store.dispatch(new fromAuth.StoreToken(response.data.token))
    }, e => {
      if (e) {
        this.store.dispatch(new fromAuth.SignInFailure(e.error))
      }
    }))
  }

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

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

  getName(): AbstractControl {
    return this.formFields.get('name')
  }

  getEmail(): AbstractControl {
    return this.formFields.get('email')
  }

  getPassword(): AbstractControl {
    return this.formFields.get('password')
  }

  getPasswordConfirm(): AbstractControl {
    return this.passwordConfirmForm.get('passwordConfirm')
  }
}
