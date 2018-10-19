import { Component, Input, OnInit } from '@angular/core'
import * as fromStore               from '@core/users/store'
import { select, Store }            from '@ngrx/store'
import { Observable }               from 'rxjs'
import { IUser }                    from '@core/users/model/user.model'

@Component({
  selector: 'app-module-detail-header',
  templateUrl: 'module-detail-header.component.html'
})

export class ModuleDetailHeaderComponent implements OnInit {
  @Input() title: string
  @Input() userId: number
  user$: Observable<IUser>

  constructor(private store: Store<fromStore.IUserState>) {
  }

  ngOnInit() {
    this.user$ = this.store.pipe(select(fromStore.getUserById, this.userId))
  }
}
