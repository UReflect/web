import { Component, OnInit }                     from '@angular/core'
import { Observable }                            from 'rxjs'
import * as fromStore                            from '@core/profiles/store'
import { Action, ActionsSubject, select, Store } from '@ngrx/store'
import { ActivatedRoute }                        from '@angular/router'
import { NumpadService }                         from '@shared/components'

/**
 * Enum state of PIN code edit process
 */
const enum state {
  VERIFY,
  NEW,
  CONFIRM
}

/**
 * Edit PIN code component
 */
@Component({
  selector: 'app-pincode-edit',
  templateUrl: 'pincode-edit.component.html',
  styleUrls: ['pincode-edit.component.scss']
})

export class PincodeEditComponent implements OnInit {
  /**
   * Text to display
   */
  text: string
  /**
   * Err to display
   */
  err: string
  /**
   * Current process state
   */
  state: state
  /**
   * Error from profile store
   */
  error$: Observable<any>
  /**
   * Profile ID
   */
  private readonly profileId: number
  /**
   * Entered code to check for match
   */
  private code: string

  /**
   * Constructor
   * @param store Profile store
   * @param route Current route
   * @param actionsSubject$ Action triggered Subject
   * @param numpadService Numpad service used to clear input
   */
  constructor(private store: Store<fromStore.IProfileReducerState>,
              private route: ActivatedRoute,
              private actionsSubject$: ActionsSubject,
              private numpadService: NumpadService) {
    this.err = ''
    this.text = 'Enter your PIN code to verify'
    this.profileId = parseInt(this.route.snapshot.paramMap.get('id'), 10)
    this.state = state.VERIFY
  }

  /**
   * Inits error Observable from profile store
   */
  ngOnInit() {
    this.error$ = this.store.pipe(select(fromStore.getProfileError))
  }

  /**
   * Handles differents state of PIN code update
   * @param data PIN code from numpad component
   */
  pincodeHandler(data) {
    if (this.state === state.VERIFY) {
      this.store.dispatch(new fromStore.VerifyPin(
        { ID: this.profileId, pin: data }
      ))
      this.actionsSubject$.subscribe((action: Action) => {
        if (action.type === fromStore.ProfileActionTypes.VerifyPinSuccess) {
          this.state = state.NEW
          this.text = 'Enter you new PIN code'
          this.store.dispatch(new fromStore.ClearError())
        }
      })
      this.numpadService.clear.emit()
    } else if (this.state === state.NEW) {
      this.code = data
      this.text = 'Confirm your new PIN code'
      this.numpadService.clear.emit()
      this.state = state.CONFIRM
    } else if (this.state === state.CONFIRM) {
      if (this.code === data) {
        this.err = ''
        this.store.dispatch(new fromStore.UpdatePin({
          ID: parseInt(this.route.snapshot.paramMap.get('id'), 10),
          pin: this.code
        }))
      } else {
        this.err = 'PIN codes must match'
        this.text = 'Enter your new PIN code'
        this.numpadService.clear.emit()
        this.code = ''
        this.state = state.NEW
      }
    }
  }
}
