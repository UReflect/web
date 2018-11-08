import { Component, OnInit }                  from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import * as fromStore                         from '@core/mirrors/store'
import { Store }                              from '@ngrx/store'

@Component({
  selector: 'app-set-mirror',
  templateUrl: 'set-mirror.component.html'
})

export class SetMirrorComponent implements OnInit {
  formFields: FormGroup

  constructor(private fb: FormBuilder,
              private store: Store<fromStore.IMirrorState>) {
    this.formFields = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  setupHandler(data) {
    if (data.id) {
      this.store.dispatch(new fromStore.Setup(data))
    }
  }
}
