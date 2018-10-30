import { Component, OnInit }                  from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { moduleZipName, priceFormat }         from '@shared/validators'
import * as fromStore                         from '@core/modules/store'
import { Action, ActionsSubject, Store }      from '@ngrx/store'
import { IModuleUpload }                      from '@core/modules/models/module'

@Component({
  selector: 'app-module-new',
  templateUrl: 'module-new.component.html'
})

export class ModuleNewComponent implements OnInit {
  formFields: FormGroup

  constructor(private fb: FormBuilder,
              private store: Store<fromStore.IModulesState>,
              private actionsSubject$: ActionsSubject) {
  }

  ngOnInit() {
    this.formFields = this.fb.group({
      title: ['Test Aurelien', [
        Validators.required
      ]],
      description: ['test', [
        Validators.required
      ]],
      price: ['0', [
        Validators.required,
        priceFormat()
      ]],
      min_width: ['1', [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]],
      min_height: ['2', [
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

  createHandler(data) {
    this.store.dispatch(new fromStore.Create(data.form))
    this.actionsSubject$.subscribe((action: Action) => {
      if (action.type === fromStore.ModuleActionTypes.CreateSuccess) {
        const form: IModuleUpload = {
          ID: action['payload'].ID,
          formData: data.formData
        }
        this.store.dispatch(new fromStore.Upload(form))
      }
    })
  }
}
