import { Component, OnInit } from '@angular/core'
import { Observable }        from 'rxjs'
import { select, Store }     from '@ngrx/store'
import * as fromLayout       from '@core/layout/store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSidenav$: Observable<boolean>

  constructor(private store: Store<fromLayout.IState>) {
  }

  ngOnInit() {
    this.showSidenav$ = this.store.pipe(select(fromLayout.getShowSidenav))
  }
}
