import { Component, Input, OnInit } from '@angular/core'

/**
 * Module stars component
 */
@Component({
  selector: 'app-module-stars',
  templateUrl: 'module-stars.component.html'
})

export class ModuleStarsComponent implements OnInit {
  /**
   * Rating @Input
   */
  @Input() rating: number
  /**
   * Stars array
   */
  stars: Array<boolean>

  /**
   * Constructor
   */
  constructor() {
  }

  /**
   * Fill stars array with proper rating
   */
  ngOnInit() {
    this.stars = this.starsHandler()
  }

  /**
   * true = filled star
   * false = empty star
   * Based on rating
   */
  starsHandler(): Array<boolean> {
    const stars = []
    let i = 0
    while (i < this.rating) {
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
