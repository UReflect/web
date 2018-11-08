import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormGroup }                     from '@angular/forms'
import * as fromStore                                     from '@core/profiles/store'
import { Observable }                                     from 'rxjs'
import { select, Store }                                  from '@ngrx/store'

@Component({
  selector: 'app-profile-form',
  templateUrl: 'profile-form.component.html'
})

export class ProfileFormComponent implements OnInit {
  @Input() formFields: FormGroup
  @Input() btnText: string
  @Input() btnIcon: string
  @Output() submit = new EventEmitter()
  err$: Observable<any>

  constructor(private store: Store<fromStore.IProfileState>) {
  }

  ngOnInit() {
    this.err$ = this.store.pipe(select(fromStore.getProfileError))
  }

  submitHandler() {
    this.submit.emit({
      title: this.title().value
    })
  }

  getErrors(field: string): string {
    switch (field) {
      case 'name':
        return this.title().hasError('required') ? 'Please fill the title'
          : 'Unknown error on title field'
      default:
        return 'Unknown error'
    }
  }

  title(): AbstractControl {
    return this.formFields.get('title')
  }
}
