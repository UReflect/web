import { Component, Input, OnInit } from '@angular/core'
import { IModule }                  from '@core/modules/models/module'

@Component({
  selector: 'app-module-list-card',
  templateUrl: 'module-list-card.component.html'
})

export class ModuleListCardComponent implements OnInit {
  @Input() module: IModule
  stars: Array<boolean>

  constructor() {
  }

  ngOnInit() {
    this.stars = this.starsHandler()
  }

  starsHandler(): Array<boolean> {
    const stars = []
    let i = 0
    while (i < this.module.rating) {
      stars.push(true)
      ++i
    }
    while (i < 5) {
      stars.push(false)
      ++i
    }
    console.log(stars)
    return stars
  }
}
