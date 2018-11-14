import { Component, OnInit } from '@angular/core'
import * as fromStore        from '../../store'
import { select, Store }     from '@ngrx/store'
import { Observable }        from 'rxjs'

/**
 * Mirror list component
 */
@Component({
  selector: 'app-mirror-list',
  templateUrl: 'mirror-list.component.html'
})

export class MirrorListComponent implements OnInit {
  /**
   * Mirrors observable from store
   */
  mirrors$: Observable<any>

  /**
   * Constructor
   * @param store Mirror store
   */
  constructor(private store: Store<fromStore.IMirrorReducerState>) {
  }

  /**
   * Init mirrors$ Observable using getAllMirrors selector
   */
  ngOnInit() {
    this.mirrors$ = this.store.pipe(select(fromStore.getAllMirrors))
  }
}
