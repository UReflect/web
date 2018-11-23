import { Component, OnInit }                  from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import * as fromStore                         from '@core/profiles/store'
import { select, Store }                      from '@ngrx/store'
import { Observable }                         from 'rxjs'
import { IProfile }                           from '@core/profiles/models'

/**
 * Edit profile component
 */
@Component({
  selector: 'app-profile-edit',
  templateUrl: 'profile-edit.component.html'
})

export class ProfileEditComponent implements OnInit {
  /**
   * Data from profile for the form
   */
  formFields: FormGroup
  /**
   * Owner's user id
   */
  userId: number
  /**
   * Profile from store
   */
  private profile: IProfile

  /**
   * Constructor
   * @param store Profile store
   * @param fb FormBuilder
   */
  constructor(private store: Store<fromStore.IProfileReducerState>,
              private fb: FormBuilder) {
  }

  /**
   * Updates profile
   * @param data Data for profile to update
   */
  updateHandler(data) {
    if (data && data.title) {
      this.store.dispatch(new fromStore.Update({
        ID: this.profile.ID,
        title: data.title
      }))
    }
  }

  /**
   * Deletes the profile
   */
  deleteHandler() {
    this.store.dispatch(new fromStore.Delete(this.profile))
  }

  /**
   * Inits profile, userid and form fields
   */
  ngOnInit() {
    this.store.pipe(select(fromStore.getSelectedProfile))
      .subscribe((profile: IProfile) => {
        if (profile) {
          this.profile = profile
          this.userId = profile.user_id
          this.formFields = this.fb.group({
            title: [profile.title, Validators.required]
          })
        }
      })
  }
}
