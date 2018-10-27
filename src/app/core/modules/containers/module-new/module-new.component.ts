import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-module-new',
  templateUrl: 'module-new.component.html'
})

export class ModuleNewComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  createHandler(event) {
    console.log(event)
  }
}
