import { Component, OnInit }              from '@angular/core'
import { ActivatedRoute }                 from '@angular/router'
import { ConfirmMail, IAuthReducerState } from '@core/auth/store'
import { Action, ActionsSubject, Store }  from '@ngrx/store'
import * as fromStore                     from '@core/auth/store'

@Component({
  selector: 'app-email-confirm',
  templateUrl: 'email-confirm.component.html'
})

export class EmailConfirmComponent implements OnInit {
  private token: string
  text: string

  constructor(private route: ActivatedRoute,
              private store: Store<IAuthReducerState>,
              private actionsSubject$: ActionsSubject) {
  }

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
