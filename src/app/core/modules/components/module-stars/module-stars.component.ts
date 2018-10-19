import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-module-stars',
  templateUrl: 'module-stars.component.html'
})

export class ModuleStarsComponent implements OnInit {
  @Input() rating: number
  stars: Array<boolean>

  constructor() {
  }

  ngOnInit() {
    this.stars = this.starsHandler()
  }

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
