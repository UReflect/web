import { Component, OnInit } from '@angular/core'
import * as fromStore        from '@core/profiles/store'
import { select, Store }     from '@ngrx/store'
import { Observable }        from 'rxjs'
import { NumpadService }     from '@shared/components/numpad/numpad.service'
import { ActivatedRoute }    from '@angular/router'

/**
 * Set PIN component
 */
@Component({
  selector: 'app-set-pincode',
  templateUrl: 'set-pincode.component.html',
  styleUrls: ['set-pincode.component.scss']
})

export class SetPincodeComponent implements OnInit {
  /**
   * Entered code received by NumpadComponent
   */
  code: string
  /**
   * Text to display
   */
  text: string
  /**
   * PIN not matching error
   */
  err: string
  /**
   * Profile error stored in state
   */
  error$: Observable<any>

  /**
   * Constructor
   * @param store Profile store
   * @param numpadService NumpadService used to clear numpad input
   * @param route Current route
   */
  constructor(private store: Store<fromStore.IProfileReducerState>,
              private numpadService: NumpadService,
              private route: ActivatedRoute) {
    this.code = ''
    this.text = 'Set Profile PIN Code'
  }

  /**
   * Init error$ Observable from Store
   */
  ngOnInit() {
    this.error$ = this.store.pipe(select(fromStore.getProfileError))
  }

  /**
   * Handles PIN code received from NumpadComponent
   * @param data Data received
   */
  pincodeHandler(data) {
    if (this.code.length === 0) {
      this.code = data
      this.text = 'Confirm Profile PIN Code'
      this.numpadService.clear.emit()
    } else {
      if (this.code === data) {
        this.err = ''
        this.store.dispatch(new fromStore.UpdatePin({
          ID: parseInt(this.route.snapshot.paramMap.get('id'), 10),
          pin: this.code
        }))
      } else {
        this.err = 'PIN codes must match'
        this.text = 'Set Profile PIN Code'
        this.numpadService.clear.emit()
        this.code = ''
      }
    }
  }
}
