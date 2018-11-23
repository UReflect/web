import { EventEmitter, Injectable } from '@angular/core'

/**
 * Numpad service
 */
@Injectable()
export class NumpadService {
  /**
   * EventEmitter used to clear numpad input from another component
   */
  clear: EventEmitter<any> = new EventEmitter<any>()

  /**
   * Useless constructor
   */
  constructor() {
  }
}
