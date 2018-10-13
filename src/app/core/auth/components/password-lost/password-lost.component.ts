import { Component, OnInit }                                   from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable }                                          from 'rxjs'
import * as fromAuth                                           from '@core/auth/store'
import { select, Store }                                       from '@ngrx/store'
import { IPasswordLost }                                       from '@core/auth/models/user'

@Component({
  selector: 'app-password-lost',
  templateUrl: 'password-lost.component.html',
  styleUrls: ['../auth.component.css']
})

export class PasswordLostComponent implements OnInit {
  formFields: FormGroup
  pending$: Observable<boolean>
  error$: Observable<any>

  constructor(private fb: FormBuilder,
              private store: Store<fromAuth.IState>) {
    this.formFields = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit() {
    this.pending$ = this.store.pipe(select(fromAuth.getPending))
    this.error$ = this.store.pipe(select(fromAuth.getError))
    this.store.dispatch(new fromAuth.ClearError())
  }

  passwordLostHandler(): any {
    if (!this.formFields.valid) {
      return
    }

    const credentials: IPasswordLost = {
      email: this.getEmail().value
    }

    this.store.dispatch(new fromAuth.PasswordLost(credentials))
  }

  getErrors(field: string): string {
    switch (field) {
      case 'email':
        return this.getEmail().hasError('required') ? 'Please enter an email address'
          : this.getEmail().hasError('email') ? 'Please enter a valid email address'
            : 'Unknown error on email field'
      default:
        return ''
    }
  }

  getEmail(): AbstractControl {
    return this.formFields.get('email')
  }
}
