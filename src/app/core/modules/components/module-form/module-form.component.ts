import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormGroup }                     from '@angular/forms'
import * as JSZip                                         from 'jszip'
import { ManifestService }                                from '@core/modules/services'

@Component({
  selector: 'app-module-form',
  templateUrl: 'module-form.component.html'
})

export class ModuleFormComponent implements OnInit {
  @Output() submit = new EventEmitter()
  @Input() formFields: FormGroup
  err = []
  private formData: FormData = new FormData()

  constructor(private manifestService: ManifestService) {
  }

  ngOnInit() {
  }

  submitHandler() {
  }

  fileHandler(event) {
    const re = new RegExp(/^([\w-]{1,50})\.v([\d]+)-([\d]+)\.zip$/)
    const payload = event.target.files[0] || event.srcElement.files[0]
    if (!payload) {
      return
    }
    const cut = payload.name.match(re)

    this.fileName().patchValue(payload.name)
    this.formData.append('file', payload)
    this.formData.append('major', cut[2])
    this.formData.append('minor', cut[3])

    JSZip.loadAsync(payload).then(zip => {
      this.checkArchive(zip, this.fileName().value
        .slice(0, this.fileName().value.length - 4))
        .then(() => {
        })
        .catch(e => {
          this.err = e
        })
    })
  }

  checkArchive(zip: JSZip, zipName: string): Promise<any> {
    return new Promise<string>((resolve, reject) => {
      if (!zip.folder(`${zipName}/`)) {
        reject({
          scope: 'zip',
          error: `files must be in a folder named \'${zipName}\'`
        })
      }
      if (zip.file(`${zipName}/manifest.json`)) {
        zip.file(`${zipName}/manifest.json`).async('text')
          .then(manifest => {
            const err = this.manifestService.checkManifest(manifest)
            if (err.length <= 0) {
              if (!zip.file(`${zipName}/${this.manifestService.getEntryFile()}`)) {
                err.push({
                  scope: 'zip',
                  error: `entry_file \'${this.manifestService.getEntryFile()}\' not found`
                })
              }
              if (!zip.file(`${zipName}/${this.manifestService.getCSSFile()}`)) {
                err.push({
                  scope: 'zip',
                  error: `css_file \'${this.manifestService.getCSSFile()}\' not found`
                })
              }
              if (err.length > 0) {
                reject(err)
              } else {
                resolve()
              }
            } else {
              reject(err)
            }
          })
          .catch(e => {
            reject(e)
          })
      } else {
        reject([{
          scope: 'zip',
          error: 'manifest.json not found'
        }])
      }
    })
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
    return this.formFields.get('title')
  }

  description(): AbstractControl {
    return this.formFields.get('description')
  }

  price(): AbstractControl {
    return this.formFields.get('price')
  }

  minWidth(): AbstractControl {
    return this.formFields.get('min_width')
  }

  minHeight(): AbstractControl {
    return this.formFields.get('min_height')
  }

  fileName(): AbstractControl {
    return this.formFields.get('fileName')
  }
}
