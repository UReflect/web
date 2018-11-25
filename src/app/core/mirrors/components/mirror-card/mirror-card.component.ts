import { Component, Input, OnInit } from '@angular/core'
import { IMirror }                  from '@core/mirrors/models'

/**
 * Mirror card component
 */
@Component({
  selector: 'app-mirror-card',
  templateUrl: 'mirror-card.component.html',
  styleUrls: ['mirror-card.component.scss']
})

export class MirrorCardComponent implements OnInit {
  /**
   * Mirror @Input from list
   */
  @Input() mirror: IMirror
  /**
   * Possible backgrounds list
   */
  backgrounds: Array<string>
  /**
   * Randomized background
   */
  backgroundColor: string

  /**
   * Constructor
   * Fills backgrounds entries then gets the random color
   */
  constructor() {
    this.backgrounds = [
      'bg-gd-dusk',
      'bg-gd-aqua',
      'bg-gd-sea',
      'bg-gd-leaf',
      'bg-gd-lake',
      'bg-gd-sun'
    ]
    this.backgroundColor = this.getRandomBackground()
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
  }

  /**
   * Returns a random background as string
   */
  getRandomBackground(): string {
    const rand = Math.floor(Math.random() * Math.floor(this.backgrounds.length - 1))
    return this.backgrounds[rand]
  }
}
