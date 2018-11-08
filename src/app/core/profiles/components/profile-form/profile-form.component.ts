import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormGroup }                     from '@angular/forms'
import * as fromStore                                     from '@core/profiles/store'
import { Observable }                                     from 'rxjs'
import { select, Store }                                  from '@ngrx/store'

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
   * Errors from profile store
   */
  err$: Observable<any>

  /**
   * Constructor
   * @param store Profile Store
   */
  constructor(private store: Store<fromStore.IProfileState>) {
  }

  /**
   * ngOnInit
   * Init err$ Observable
   */
  ngOnInit() {
    this.err$ = this.store.pipe(select(fromStore.getProfileError))
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
}
