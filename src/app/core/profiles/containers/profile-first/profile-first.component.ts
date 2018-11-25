import { Component, OnInit }                  from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import * as fromMirror                        from '@core/mirrors/store'
import { ActionsSubject, Store }              from '@ngrx/store'
import { ActivatedRoute }                     from '@angular/router'
import * as fromProfile                       from '@core/profiles/store'
import { IMIrrorLinkProfile }                 from '@core/mirrors/models'

/**
 * First profile creation container
 */
@Component({
  selector: 'app-first-profile',
  templateUrl: 'profile-first.component.html'
})

export class ProfileFirstComponent implements OnInit {
  /**
   * Form declaration
   */
  formFields: FormGroup

  /**
   * Constructor
   * @param fb FormBuilder
   * @param store Profile store
   * @param route Current route
   * @param actionsSubject$ Action observable to catch emitted actions
   */
  constructor(private fb: FormBuilder,
              private store: Store<fromProfile.IProfileReducerState>,
              private route: ActivatedRoute,
              private actionsSubject$: ActionsSubject) {
    this.formFields = this.fb.group({
      title: ['', Validators.required]
    })
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
  }

  /**
   * Handles @Output from ProfileFormComponent
   * @param data Data sent from ProfileFormComponent
   */
  linkHandler(data) {
    if (data.title) {
      this.store.dispatch(new fromProfile.Create(data))
      this.actionsSubject$.subscribe((action: fromProfile.CreateSuccess) => {
        if (action.type === fromProfile.ProfileActionTypes.CreateSuccess) {
          const form: IMIrrorLinkProfile = {
            profile_id: action.payload.ID,
            id: parseInt(this.route.snapshot.paramMap.get('id'), 10)
          }
          this.store.dispatch(new fromMirror.LinkProfile(form))
        }
      })
    }
  }
}
