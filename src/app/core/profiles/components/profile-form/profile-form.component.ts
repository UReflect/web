import { Component, EventEmitter, Input, OnInit, Output }      from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import * as fromStore                                          from '@core/profiles/store'
import { Observable }                                          from 'rxjs'
import { select, Store }                                       from '@ngrx/store'
import { IUser }                                               from '@core/users/model/user.model'
import * as fromLoggedUser                                     from '@core/auth/store'

/**
 * Profile form component
 */
@Component({
  selector: 'app-profile-form',
  templateUrl: 'profile-form.component.html'
})

export class ProfileFormComponent implements OnInit {
  /**
   * formField @Input
   */
  @Input() formFields: FormGroup
  /**
   * Submit button text
   */
  @Input() btnText: string
  /**
   * Submit button icon
   */
  @Input() btnIcon: string
  /**
   * Submit event
   */
  @Output() submit = new EventEmitter()
  /**
   * Delete event
   */
  @Output() delete = new EventEmitter()
  /**
   * Profile user's ID
   */
  @Input() userId: number
  /**
   * Errors from profile store
   */
  err$: Observable<any>
  /**
   * User from auth store
   */
  user$: Observable<IUser>
  /**
   * Profile name
   */
  profileName: string
  /**
   * Form used to activate delete button
   */
  formDelete: FormGroup

  /**
   * Constructor
   * @param store Profile Store
   * @param fb FromBuilder
   */
  constructor(private store: Store<fromStore.IProfileReducerState>,
              private fb: FormBuilder) {
  }

  /**
   * ngOnInit
   * Init err$ Observable
   */
  ngOnInit() {
    this.err$ = this.store.pipe(select(fromStore.getProfileError))
    this.user$ = this.store.pipe(select(fromLoggedUser.getLoggedUser))
    this.profileName = this.formFields.get('title').value
    this.formDelete = this.fb.group({
      name: ['', Validators.required]
    })
  }

  /**
   * Sends form data through @Output
   */
  submitHandler() {
    this.submit.emit({
      title: this.title().value
    })
  }

  /**
   * Sends delete event
   */
  deleteHandler() {
    this.delete.emit()
  }

  /**
   * Returns string error for form validation
   * @param field Field to check
   */
  getErrors(field: string): string {
    switch (field) {
      case 'title':
        return this.title().hasError('required') ? 'Please fill the title'
          : 'Unknown error on title field'
      default:
        return 'Unknown error'
    }
  }

  /**
   * Getter for AbstractControl for title
   */
  title(): AbstractControl {
    return this.formFields.get('title')
  }

  /**
   * Getter for AbstractControl name
   */
  deleteName(): AbstractControl {
    return this.formDelete.get('name')
  }

}
