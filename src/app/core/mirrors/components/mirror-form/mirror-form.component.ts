import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormGroup }                     from '@angular/forms'
import { IMirrorUpdate }                                  from '@core/mirrors/models'
import { ActivatedRoute }                                 from '@angular/router'
import * as fromStore                                     from '@core/mirrors/store'
import { select, Store }                                  from '@ngrx/store'
import { Observable }                                     from 'rxjs'

/**
 * Mirror form component
 */
@Component({
  selector: 'app-mirror-form',
  templateUrl: 'mirror-form.component.html'
})

export class MirrorFormComponent implements OnInit {
  /**
   * Form field
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
   * Submit event emitter
   */
  @Output() submit = new EventEmitter<IMirrorUpdate>()
  /**
   * Error Observable from store
   */
  err$: Observable<any>

  /**
   * Constructor
   * @param route Current route
   * @param store Mirror store
   */
  constructor(private route: ActivatedRoute,
              private store: Store<fromStore.IMirrorReducerState>) {
  }

  /**
   * Init err$ Observable with store selector
   */
  ngOnInit() {
    this.err$ = this.store.pipe(select(fromStore.getMirrorError))
  }

  /**
   * Submits data through @Output
   */
  submitHandler() {
    this.submit.emit({
      id: parseInt(this.route.snapshot.paramMap.get('id'), 10),
      name: this.name().value,
      location: this.location().value
    })
  }

  /**
   * Returns error strings for form validation
   * @param field Field to check
   */
  getErrors(field: string): string {
    switch (field) {
      case 'name':
        return this.name().hasError('required') ? 'Please fill the name'
          : 'Unknown error on name field'
      case 'location':
        return this.location().hasError('required') ? 'Please fill the location'
          : 'Unknown error on location field'
      default:
        return 'Unknown error'
    }
  }

  /**
   * Getter for AbstractControl name
   */
  name(): AbstractControl {
    return this.formFields.get('name')
  }

  /**
   * Getter for AbstractControl location
   */
  location(): AbstractControl {
    return this.formFields.get('location')
  }
}
