import { Component, OnInit }                                   from '@angular/core'
import { ActivatedRoute }                                      from '@angular/router'
import { ResetPassword, IAuthReducerState }                    from '@core/auth/store'
import { Action, ActionsSubject, Store }                       from '@ngrx/store'
import * as fromStore                                          from '@core/auth/store'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { passwordConfirm }                                     from '@shared/validators'

@Component({
  selector: 'app-reset-password',
  templateUrl: 'reset-password.component.html'
})

export class ResetPasswordComponent implements OnInit {
  private token: string
  formField: FormGroup
  confirmField: FormGroup
  text: string

  constructor(private route: ActivatedRoute,
              private store: Store<IAuthReducerState>,
              private actionsSubject$: ActionsSubject,
              private fb: FormBuilder) {
    this.formField = this.fb.group({
      password: ['', Validators.required]
    })
    this.confirmField = this.fb.group({
      passwordConfirm: ['', [Validators.required,
        passwordConfirm(this.getPassword())]]
    })
  }

  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get('token')
    this.store.dispatch(new fromStore.ClearError())
    this.actionsSubject$.subscribe((action: Action) => {
      if (action.type === fromStore.AuthActionTypes.ResetPasswordSuccess) {
        this.text = 'Password successfully updated. You can leave this page.'
      }
    })
  }

  submitHandler() {
    this.store.dispatch(new fromStore.ResetPassword({
      token: this.token,
      password: this.getPassword().value
    }))
  }

  private getPassword(): AbstractControl {
    return this.formField.get('password')
  }
}
