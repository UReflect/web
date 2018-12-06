import { Component, OnInit }                                   from '@angular/core'
import { ActivatedRoute }                                      from '@angular/router'
import { IAuthReducerState }                                   from '@core/auth/store'
import { Action, ActionsSubject, select, Store }               from '@ngrx/store'
import * as fromStore                                          from '@core/auth/store'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { passwordConfirm }                                     from '@shared/validators'
import { Observable }                                          from 'rxjs'

@Component({
  selector: 'app-reset-password',
  templateUrl: 'reset-password.component.html'
})

export class ResetPasswordComponent implements OnInit {
  private token: string
  formField: FormGroup
  confirmField: FormGroup
  text: string
  displayForm = false
  pending$: Observable<any>


  constructor(private route: ActivatedRoute,
              private store: Store<IAuthReducerState>,
              private actionsSubject$: ActionsSubject,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formField = this.fb.group({
      password: ['', Validators.required]
    })
    this.confirmField = this.fb.group({
      passwordConfirm: ['', [Validators.required,
        passwordConfirm(this.getPassword())]]
    })
    this.displayForm = true
    this.token = this.route.snapshot.queryParamMap.get('token')
    this.store.dispatch(new fromStore.ClearError())
    this.actionsSubject$.subscribe((action: Action) => {
      if (action.type === fromStore.AuthActionTypes.ResetPasswordSuccess) {
        this.text = 'Password successfully updated. You can leave this page.'
        this.displayForm = false
      }
    })
    this.pending$ = this.store.pipe(select(fromStore.getPending))
  }

  submitHandler() {
    this.store.dispatch(new fromStore.ResetPassword({
      token: this.token,
      password: this.getPassword().value
    }))
  }

  getPassword(): AbstractControl {
    return this.formField.get('password')
  }

  getPasswordConfirm(): AbstractControl {
    return this.confirmField.get('passwordConfirm')
  }
}
