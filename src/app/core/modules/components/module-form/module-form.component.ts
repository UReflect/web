import { Component, EventEmitter, OnInit, Output }             from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { moduleZipName, priceFormat }                          from '@shared/validators'

@Component({
  selector: 'app-module-form',
  templateUrl: 'module-form.component.html'
})

export class ModuleFormComponent implements OnInit {
  @Output() submit = new EventEmitter()
  mainFields: FormGroup

  constructor(private fb: FormBuilder) {
    this.mainFields = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, priceFormat()]],
      min_width: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      min_height: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      fileName: ['', [Validators.required, moduleZipName()]]
    })
  }

  ngOnInit() {
  }

  submitHandler() {
  }

  fileHandler(event) {
    const payload = event.target.files[0] || event.srcElement.files[0]
    this.fileName().patchValue(payload.name)
  }

  getErrors(field: string): string {
    switch (field) {
      case 'title':
        return this.title().hasError('required') ? 'Please fill the title'
          : 'Unknown error on title field'
      case 'description':
        return this.description().hasError('required') ? 'Please fill the description'
          : 'Unknown error on description field'
      case 'price':
        return this.price().hasError('required') ? 'Please fill the price'
          : this.price().hasError('price') ? 'Please enter a valid price'
            : 'Unknown error on price field'
      case 'min_width':
        return this.minWidth().hasError('required') ? 'Please fill the minimum width'
          : this.minWidth().hasError('min') ? 'The minimum value is 0'
            : this.minWidth().hasError('max') ? 'The maximum value is 10'
              : 'Unknown error on min_width field'
      case 'min_height':
        return this.minHeight().hasError('required') ? 'Please fill the minimum width'
          : this.minHeight().hasError('min') ? 'The minimum value is 0'
            : this.minHeight().hasError('max') ? 'The maximum value is 10'
              : 'Unknown error on min_height field'
      case 'fileName':
        return this.fileName().hasError('required') ? 'Please select a ZIP file'
          : this.fileName().hasError('name') ? 'Please enter a valid name'
            : 'Unknown error on file upload field'
      default:
        return 'Unknown error'
    }
  }

  title(): AbstractControl {
    return this.mainFields.get('title')
  }

  description(): AbstractControl {
    return this.mainFields.get('description')
  }

  price(): AbstractControl {
    return this.mainFields.get('price')
  }

  minWidth(): AbstractControl {
    return this.mainFields.get('min_width')
  }

  minHeight(): AbstractControl {
    return this.mainFields.get('min_height')
  }

  fileName(): AbstractControl {
    return this.mainFields.get('fileName')
  }
}
