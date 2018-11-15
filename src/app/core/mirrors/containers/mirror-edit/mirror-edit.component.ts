import { Component, OnInit }                  from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { IMirror }                            from '@core/mirrors/models'
import * as fromStore                         from '@core/mirrors/store'
import { select, Store }                      from '@ngrx/store'

/**
 * Mirror edit component
 */
@Component({
  selector: 'app-mirror-edit',
  templateUrl: 'mirror-edit.component.html'
})

export class MirrorEditComponent implements OnInit {
  /**
   * Form fields with mirror data
   */
  formFields: FormGroup

  /**
   * Constructor
   * @param fb Form builder
   * @param store Mirror store
   */
  constructor(private fb: FormBuilder,
              private store: Store<fromStore.IMirrorReducerState>) {
  }

  /**
   * Init formFields with mirror data
   */
  ngOnInit() {
    this.store.pipe(select(fromStore.getSelectedMirror))
      .subscribe((mirror: IMirror) => {
        if (mirror) {
          this.formFields = this.fb.group({
            name: [mirror.name, Validators.required],
            location: [mirror.location, Validators.required]
          })
        }
      })
  }

  /**
   * Updates mirror with received data
   * @param data Received data from app-mirror-form
   */
  updateHandler(data) {
    if (data.id) {
      this.store.dispatch(new fromStore.Update(data))
    }
  }
}
