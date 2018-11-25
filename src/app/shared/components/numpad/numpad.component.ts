import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { NumpadService }                           from '@shared/components/numpad/numpad.service'

/**
 * Numpad component
 */
@Component({
  selector: 'app-numpad',
  templateUrl: 'numpad.component.html',
  styleUrls: ['numpad.component.scss']
})

export class NumpadComponent implements OnInit {
  /**
   * Sends join code
   */
  @Output() submit: EventEmitter<string> = new EventEmitter<string>()
  /**
   * Join code
   */
  code: string

  /**
   * Constructor
   */
  constructor(private service: NumpadService) {
    this.code = ''
  }

  /**
   * Init code string with empty value
   */
  ngOnInit() {
    this.service.clear.subscribe(() => {
      this.code = ''
    })
  }

  /**
   * Fills join code string with numpad value
   * @param value Value received from numpad
   */
  inputHandler(value) {
    if (value === 10) {
      this.deleteHandler()
    } else if (value === 12) {
      this.submit.emit(this.code)
    } else if (this.code.length < 4) {
      if (value === 11) {
        this.code += '0'
      } else {
        this.code += value.toString()
      }
    }
  }

  /**
   * Delete number from string
   */
  deleteHandler() {
    if (this.code.length !== 0) {
      this.code = this.code.slice(0, this.code.length - 1)
    }
  }
}
