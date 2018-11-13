import { Component, EventEmitter, Input, OnInit, Output }      from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import * as JSZip                                              from 'jszip'
import { ManifestService }                                     from '@core/modules/services'
import { IModuleCreation }                                     from '@core/modules/models/module'
import { Observable }                                          from 'rxjs'
import { IUser }                                               from '@core/users/model/user.model'
import { select, Store }                                       from '@ngrx/store'
import * as fromAuth                                           from '@core/auth/store'

/**
 * Module form component
 */
@Component({
  selector: 'app-module-form',
  templateUrl: 'module-form.component.html'
})

export class ModuleFormComponent implements OnInit {
  /**
   * Submit event with form data
   */
  @Output() submitForm = new EventEmitter()
  /**
   * Submit event for deletion
   */
  @Output() submitDelete = new EventEmitter()
  /**
   * Form fields
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
   * Module user's ID
   */
  @Input() userId: number
  /**
   * Errors
   */
  err = []
  /**
   * Module name
   */
  moduleName: string
  /**
   * Module ZIP archive FormData
   */
  user$: Observable<IUser>
  /**
   * Form used to activate delete button
   */
  formDelete: FormGroup
  /**
   * ZIP archive FormData
   */
  private formData: FormData = new FormData()

  /**
   * Constructor
   * @param manifestService HTTP manifest service
   * @param store Auth store
   * @param fb FormBuilder
   */
  constructor(private store: Store<fromAuth.IState>,
              private manifestService: ManifestService,
              private fb: FormBuilder) {
  }

  /**
   * Init loggedUser Observable from Auth store
   */
  ngOnInit() {
    this.user$ = this.store.pipe(select(fromAuth.getLoggedUser))
    this.moduleName = this.formFields.get('title').value
    this.formDelete = this.fb.group({
      name: ['', Validators.required]
    })
  }

  /**
   * Submit form data through EventEmitter
   */
  submitHandler() {
    const form: IModuleCreation = {
      title: this.title().value,
      description: this.description().value,
      min_width: parseInt(this.minWidth().value, 10),
      min_height: parseInt(this.minHeight().value, 10),
      price: parseFloat(this.price().value)
    }
    this.submitForm.emit({
      form: form,
      formData: this.formData
    })
  }

  /**
   * Emits delete event
   */
  deleteHandler() {
    this.submitDelete.emit()
  }

  /**
   * Checks ZIP archive name
   * @param event Data from (change) event on file input
   */
  fileHandler(event) {
    const re = new RegExp(/^([\w-]{1,50})\.v([\d]+)-([\d]+)\.zip$/)
    const payload = event.target.files[0] || event.srcElement.files[0]
    if (!payload) {
      return
    }
    const cut = payload.name.match(re)

    this.fileName().patchValue(payload.name)
    if (!re.test(payload.name)) {
      return
    }
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
          this.fileName().setErrors({ invalidZip: true })
        })
    })
  }

  /**
   * Checks ZIP content
   * @param zip ZIP file
   * @param zipName ZIP name
   */
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

  /**
   * Returns string errors for form validation
   * @param field Field to check
   */
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
          : this.minWidth().hasError('min') ? 'The minimum value is 1'
            : this.minWidth().hasError('max') ? 'The maximum value is 10'
              : 'Unknown error on min_width field'
      case 'min_height':
        return this.minHeight().hasError('required') ? 'Please fill the minimum width'
          : this.minHeight().hasError('min') ? 'The minimum value is 1'
            : this.minHeight().hasError('max') ? 'The maximum value is 10'
              : 'Unknown error on min_height field'
      case 'fileName':
        return this.fileName().hasError('required') ? 'Please select a ZIP file'
          : this.fileName().hasError('name') ? 'Please enter a valid name'
            : this.fileName().hasError('invalidZip') ? 'Please check errors below'
              : 'Unknown error on file upload field'
      default:
        return 'Unknown error'
    }
  }

  /**
   * Getter for AbstractControl title
   */
  title(): AbstractControl {
    return this.formFields.get('title')
  }

  /**
   * Getter for AbstractControl description
   */
  description(): AbstractControl {
    return this.formFields.get('description')
  }

  /**
   * Getter for AbstractControl price
   */
  price(): AbstractControl {
    return this.formFields.get('price')
  }

  /**
   * Getter for AbstractControl min_width
   */
  minWidth(): AbstractControl {
    return this.formFields.get('min_width')
  }

  /**
   * Getter for AbstractControl min_height
   */
  minHeight(): AbstractControl {
    return this.formFields.get('min_height')
  }

  /**
   * Getter for AbstractControl fileName
   */
  fileName(): AbstractControl {
    return this.formFields.get('fileName')
  }

  /**
   * Getter for AbstractControl name
   */
  deleteName(): AbstractControl {
    return this.formDelete.get('name')
  }
}
