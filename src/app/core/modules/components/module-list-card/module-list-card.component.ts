import { Component, Input, OnInit } from '@angular/core'
import { IModule }                  from '@core/modules/models/module'
import { Observable }               from 'rxjs'
import * as fromStore               from '@core/users/store'
import { select, Store }            from '@ngrx/store'
import { IUser }                    from '@core/users/model/user.model'

@Component({
  selector: 'app-module-list-card',
  templateUrl: 'module-list-card.component.html'
})

export class ModuleListCardComponent implements OnInit {
  @Input() module: IModule
  user$: Observable<IUser>
  ratingNbStr: string

  constructor(private store: Store<fromStore.IUserState>) {
  }

  ngOnInit() {
    this.user$ = this.store.pipe(select(fromStore.getUserById, this.module.user_id))
    this.ratingNbStr = this.module.rating_nb === 1
      ? '1 review'
      : `${this.module.rating_nb} reviews`
  }
}

