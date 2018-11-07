import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormGroup }                     from '@angular/forms'
import { IMirrorUpdate }                                  from '@core/mirrors/models'
import { ActivatedRoute }                                 from '@angular/router'

@Component({
  selector: 'app-mirror-form',
  templateUrl: 'mirror-form.component.html'
})

export class MirrorFormComponent implements OnInit {
  @Input() formFields: FormGroup
  @Input() btnText: string
  @Input() btnIcon: string
  @Output() submit = new EventEmitter<IMirrorUpdate>()

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  submitHandler() {
    this.submit.emit({
      id: parseInt(this.route.snapshot.paramMap.get('id'), 10),
      name: this.name().value,
      location: this.location().value
    })
  }

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

  name(): AbstractControl {
    return this.formFields.get('name')
  }

  location(): AbstractControl {
    return this.formFields.get('location')
  }
}
