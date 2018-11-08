import { Component, OnInit }                  from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-first-profile',
  templateUrl: 'first-profile.component.html'
})

export class FirstProfileComponent implements OnInit {
  formFields: FormGroup

  constructor(private fb: FormBuilder) {
    this.formFields = this.fb.group({
      title: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  linkHandler(data) {
    console.log(data)
  }
}
