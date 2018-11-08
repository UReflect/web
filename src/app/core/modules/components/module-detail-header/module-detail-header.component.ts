import { Component, Input, OnInit } from '@angular/core'
import * as fromStore               from '@core/users/store'
import { select, Store }            from '@ngrx/store'
import { Observable }               from 'rxjs'
import { IUser }                    from '@core/users/model/user.model'

/**
 * Module detail header component
 */
@Component({
  selector: 'app-module-detail-header',
  templateUrl: 'module-detail-header.component.html'
})

export class ModuleDetailHeaderComponent implements OnInit {
  /**
   * Title
   */
  @Input() title: string
  /**
   * User ID
   */
  @Input() userId: number
  /**
   * User from store
   */
  user$: Observable<IUser>

  /**
   * Constructor
   * @param store User store
   */
  constructor(private store: Store<fromStore.IUserState>) {
  }

  /**
   * Gets user from store with selector
   */
  ngOnInit() {
    this.user$ = this.store.pipe(select(fromStore.getUserById, this.userId))
  }
}
