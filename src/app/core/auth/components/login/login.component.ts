import { Component, OnInit }                                   from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable }                                          from 'rxjs'
import { IAuthentication }                                     from '../../models/auth.model'
import * as fromAuth                                           from '@core/auth/store'
import { select, Store }                                       from '@ngrx/store'

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['../auth.component.css']
})

export class LoginComponent implements OnInit {
  formFields: FormGroup
  pending$: Observable<boolean>
  error$: Observable<any>

  constructor(private fb: FormBuilder,
              private store: Store<fromAuth.IState>) {
    this.formFields = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.pending$ = this.store.pipe(select(fromAuth.getPending))
    this.error$ = this.store.pipe(select(fromAuth.getError))
    this.store.dispatch(new fromAuth.ClearError())
  }

  signinHandler(): any {
    if (!this.formFields.valid) {
      return
    }
    const credentials: IAuthentication = {
      email: this.getEmail().value,
      password: this.getPassword().value
    }

    this.store.dispatch(new fromAuth.SignIn(credentials))
  }

  getErrors(field: string): string {
    switch (field) {
      case 'email':
        return this.getEmail().hasError('required') ? 'Please enter an email address'
          : this.getEmail().hasError('email') ? 'Please enter a valid email address'
            : 'Unknown error on email field'
      case 'password':
        return this.getPassword().hasError('required') ? 'Please enter a password'
          : 'Unknown error on password field'
      default:
        return ''
    }
  }

  getEmail(): AbstractControl {
    return this.formFields.get('email')
  }

  getPassword(): AbstractControl {
    return this.formFields.get('password')
  }

  getRememberMe(): AbstractControl {
    return this.formFields.get('rememberMe')
  }
}
