import { Component, OnInit }                                   from '@angular/core'
import { ActivatedRoute }                                      from '@angular/router'
import { IAuthReducerState }                                   from '@core/auth/store'
import { Action, ActionsSubject, select, Store }               from '@ngrx/store'
import * as fromStore                                          from '@core/auth/store'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { passwordConfirm }                                     from '@shared/validators'
import { Observable }                                          from 'rxjs'

/**
 * Password reset component
 */
@Component({
  selector: 'app-reset-password',
  templateUrl: 'reset-password.component.html'
})

export class ResetPasswordComponent implements OnInit {
  /**
   * Token from URL (from email)
   */
  private token: string
  /**
   * Main form field
   */
  formField: FormGroup
  /**
   * Password confirm form field
   */
  confirmField: FormGroup
  /**
   * Text to display
   */
  text: string
  /**
   * Boolean to display form or response text
   */
  displayForm = false
  /**
   * Pending state for button
   */
  pending$: Observable<any>

  /**
   * Constructor
   * @param route Current route
   * @param store Auth store
   * @param actionsSubject$ Action subject
   * @param fb FormBuilder
   */
  constructor(private route: ActivatedRoute,
              private store: Store<IAuthReducerState>,
              private actionsSubject$: ActionsSubject,
              private fb: FormBuilder) {
  }

  /**
   * Init forms, token, and action subject
   */
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

  /**
   * Submit handler
   */
  submitHandler() {
    this.store.dispatch(new fromStore.ResetPassword({
      token: this.token,
      password: this.getPassword().value
    }))
  }

  /**
   * Getter for password field
   */
  getPassword(): AbstractControl {
    return this.formField.get('password')
  }

  /**
   * Getter for password confirm field
   */
  getPasswordConfirm(): AbstractControl {
    return this.confirmField.get('passwordConfirm')
  }
}
