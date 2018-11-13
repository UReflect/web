import { Component, OnInit }                     from '@angular/core'
import { FormBuilder, FormGroup, Validators }    from '@angular/forms'
import { Action, ActionsSubject, select, Store } from '@ngrx/store'
import * as fromStore                            from '@core/modules/store'
import { moduleZipName, priceFormat }            from '@shared/validators'
import { IModule, IModuleUpload }                from '@core/modules/models/module'

/**
 * Module edit component
 */
@Component({
  selector: 'app-module-edit',
  templateUrl: 'module-edit.component.html'
})

export class ModuleEditComponent implements OnInit {
  /**
   * Form field
   */
  formFields: FormGroup
  /**
   * Module to edit
   */
  module: IModule

  /**
   * Constructor
   * @param fb Form builder
   * @param store Module store
   * @param actionsSubject$ Action triggered
   */
  constructor(private fb: FormBuilder,
              private store: Store<fromStore.IModuleReducerState>,
              private actionsSubject$: ActionsSubject) {
  }

  /**
   * Init form with module data
   * Fill module variable
   */
  ngOnInit() {
    this.store.pipe(select(fromStore.getSelectedModule)).subscribe((module: IModule) => {
      if (module) {
        this.formFields = this.fb.group({
          title: [module.title, [
            Validators.required
          ]],
          description: [module.description, [
            Validators.required
          ]],
          price: [module.price, [
            Validators.required,
            priceFormat()
          ]],
          min_width: [module.min_width, [
            Validators.required,
            Validators.min(1),
            Validators.max(10)
          ]],
          min_height: [module.min_height, [
            Validators.required,
            Validators.min(1),
            Validators.max(10)
          ]],
          fileName: ['', [
            Validators.required,
            moduleZipName()
          ]]
        })
        this.module = module
      }
    })
  }

  /**
   * Updates module with new data
   * @param data Module info
   */
  updateHandler(data) {
    data.form.ID = this.module.ID
    this.store.dispatch(new fromStore.Update(data.form))
    this.actionsSubject$.subscribe((action: Action) => {
      if (action.type === fromStore.ModuleActionTypes.UpdateSuccess) {
        const form: IModuleUpload = {
          ID: action['payload'].ID,
          formData: data.formData
        }
        this.store.dispatch(new fromStore.Upload(form))
      }
    })
  }

  /**
   * Deletes module
   */
  deleteHandler() {
    this.store.dispatch(new fromStore.Delete(this.module))
  }
}
