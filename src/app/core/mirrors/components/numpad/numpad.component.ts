import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-numpad',
  templateUrl: 'numpad.component.html',
  styleUrls: ['numpad.component.scss']
})

export class NumpadComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>()
  code: string

  constructor() {
  }

  ngOnInit() {
    this.code = ''
  }

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

  deleteHandler() {
    if (this.code.length !== 0) {
      this.code = this.code.slice(0, this.code.length - 1)
    }
  }
}
