import { Component, OnInit } from '@angular/core'
import { Observable }        from 'rxjs'
import * as fromRoot         from '@reducers'
import { select, Store }     from '@ngrx/store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSidenav$: Observable<boolean>

  constructor(private store: Store<fromRoot.IState>) {
  }

  ngOnInit() {
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav))
  }
}
