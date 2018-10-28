import { Component, OnInit }                  from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { moduleZipName, priceFormat }         from '@shared/validators'

@Component({
  selector: 'app-module-new',
  templateUrl: 'module-new.component.html'
})

export class ModuleNewComponent implements OnInit {
  formFields: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formFields = this.fb.group({
      title: ['', [
        Validators.required
      ]],
      description: ['', [
        Validators.required
      ]],
      price: ['', [
        Validators.required,
        priceFormat()
      ]],
      min_width: ['', [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]],
      min_height: ['', [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]],
      fileName: ['', [
        Validators.required,
        moduleZipName()
      ]]
    })
  }

  createHandler(event) {
    console.log(event)
  }
}
