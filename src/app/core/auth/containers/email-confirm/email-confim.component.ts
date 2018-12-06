import { Component, OnInit }              from '@angular/core'
import { ActivatedRoute }                 from '@angular/router'
import { ConfirmMail, IAuthReducerState } from '@core/auth/store'
import { Action, ActionsSubject, Store }  from '@ngrx/store'
import * as fromStore                     from '@core/auth/store'

/**
 * Email confirm component
 */
@Component({
  selector: 'app-email-confirm',
  template: '{{text}}'
})

export class EmailConfirmComponent implements OnInit {
  /**
   * Token from URL (from email)
   */
  private token: string
  /**
   * Text to display
   */
  text: string

  /**
   * Constructor
   * @param route Current route
   * @param store Auth store
   * @param actionsSubject$ Action subject
   */
  constructor(private route: ActivatedRoute,
              private store: Store<IAuthReducerState>,
              private actionsSubject$: ActionsSubject) {
  }

  /**
   * Init token, then dispatch confirm query
   */
  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get('token')
    this.store.dispatch(new ConfirmMail(this.token))
    this.actionsSubject$.subscribe((action: Action) => {
      if (action.type === fromStore.AuthActionTypes.ConfirmMailSuccess) {
        this.text = 'Email successfully confirmed, you can leave this page.'
      }
    })
  }
}
