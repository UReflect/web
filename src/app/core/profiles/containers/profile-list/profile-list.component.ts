import { Component, OnInit } from '@angular/core'
import { IProfile }          from '@core/profiles/models'
import * as fromStore        from '@core/profiles/store'
import { select, Store }     from '@ngrx/store'
import { Observable }        from 'rxjs'

/**
 * Profiles listing
 */
@Component({
  selector: 'app-profile-list',
  templateUrl: 'profile-list.component.html'
})

export class ProfileListComponent implements OnInit {
  /**
   * Profiles Observable array from store
   */
  profiles$: Observable<IProfile[]>

  /**
   * Constructor
   * @param store Profile store
   */
  constructor(private store: Store<fromStore.IProfileReducerState>) {
    this.profiles$ = this.store.pipe(select(fromStore.getAllProfiles))
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
  }
}
