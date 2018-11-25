import { Component, OnInit }                  from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store }                      from '@ngrx/store'
import * as fromStore                         from '@core/profiles/store'
import { IUser }                              from '@core/users/model/user.model'
import * as fromAuth                          from '@core/auth/store'

/**
 * Profile new component
 */
@Component({
  selector: 'app-profile-new',
  templateUrl: 'profile-new.component.html'
})

export class ProfileNewComponent implements OnInit {
  /**
   * Form fields definition
   */
  formFields: FormGroup
  /**
   * Logged user
   */
  user: IUser

  /**
   * Constructor
   * @param fb Form builder
   * @param store Profile store
   */
  constructor(private fb: FormBuilder,
              private store: Store<fromStore.IProfileReducerState>) {
    this.store.pipe(select(fromAuth.getLoggedUser)).subscribe(user => this.user = user)
  }

  /**
   * Inits form
   */
  ngOnInit() {
    this.store.dispatch(new fromStore.ClearError())
    this.formFields = this.fb.group({
      title: ['', Validators.required]
    })
  }

  /**
   * Creates profile
   * @param data profile title
   */
  createHandler(data) {
    if (data && data.title) {
      this.store.dispatch(new fromStore.Create(data))
    }
  }
}
