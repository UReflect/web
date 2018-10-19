import { Component, Input, OnInit } from '@angular/core'
import { IModule }                  from '@core/modules/models/module'
import { Observable }               from 'rxjs'
import * as fromStore               from '@core/users/store'
import { select, Store }            from '@ngrx/store'

@Component({
  selector: 'app-module-list-card',
  templateUrl: 'module-list-card.component.html'
})

export class ModuleListCardComponent implements OnInit {
  @Input() module: IModule
  stars: Array<boolean>
  user$: Observable<any>

  constructor(private store: Store<fromStore.IUserState>) {
  }

  ngOnInit() {
    this.stars = this.starsHandler()
    this.user$ = this.store.pipe(select(fromStore.getUserById, this.module['user_id']))
  }

  starsHandler(): Array<boolean> {
    const stars = []
    let i = 0
    while (i < this.module.rating) {
      stars.push(true)
      ++i
    }
    while (i < 5) {
      stars.push(false)
      ++i
    }
    return stars
  }
}
