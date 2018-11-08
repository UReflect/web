import { Component, OnInit }                  from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import * as fromStore                         from '@core/mirrors/store'
import { Store }                              from '@ngrx/store'

/**
 * Set new mirror component
 */
@Component({
  selector: 'app-set-mirror',
  templateUrl: 'set-mirror.component.html'
})

export class SetMirrorComponent implements OnInit {
  /**
   * form field
   */
  formFields: FormGroup

  /**
   * Constructor
   * @param fb Form builder
   * @param store Mirror store
   * Init form field
   */
  constructor(private fb: FormBuilder,
              private store: Store<fromStore.IMirrorState>) {
    this.formFields = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    })
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
  }

  /**
   * Setup mirror with provided data
   * @param data Mirror info received
   */
  setupHandler(data) {
    if (data.id) {
      this.store.dispatch(new fromStore.Setup(data))
    }
  }
}
